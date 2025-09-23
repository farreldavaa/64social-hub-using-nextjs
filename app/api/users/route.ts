import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const database = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
)

export async function GET() {
  const { data, error } = await database
    .from('users')
    .select('id, nama, username, email, role, status, created_at')


    if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ users: data });
}

export async function PATCH(req: Request) {
    const body = await req.json();
    const { id, role, status } = body;

    const { data, error } = await database
        .from('users')
        .update({ role, status })
        .eq('id', id)
        .select();

        if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ user: data[0] });
    
    }

    export async function DELETE(req: Request) {
        const body = await req.json();
        const { id } = body;

        const {error} = await database.from('users').delete().eq('id', id);
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ message: 'User deleted successfully' });
    }