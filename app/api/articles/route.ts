import { NextResponse } from 'next/server'
import { createClient, PostgrestError } from '@supabase/supabase-js'


const database = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
)

export async function GET() {
  const { data, error }: {data: unknown; error:PostgrestError | null} = await database
    .from('articles')
    .select('id,title, content, author_by, created_at, updated_at, thumbnail_article, users(id, nama, username)')
    .limit(10)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data })
}

export async function POST(req: Request) {
try{
  const body = await req.json()
  const { title, content, thumbnail_article, author_by } = body
    
  const { data: user, error: userError}: {data: {id: string; role:string} | null; error: PostgrestError | null} = await database
    .from('users')
    .select('id, role')
    .eq('id', author_by)
    .single()

  if (userError || !user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }if(user.role !== 'admin'){
    return NextResponse.json({ error: 'You are not authorized' }, { status: 403 })
} 
    const{data, error} : {data: any; error: PostgrestError | null} = await database
    .from('articles')
    .insert([{ title, content, thumbnail_article, author_by }])
    .select()

    if (error) throw error;
    return NextResponse.json({ article:data[0] }) 
    }catch(error:unknown){  
        return NextResponse.json({ error: "Unknown error" }, { status: 500 }) 
    }
}