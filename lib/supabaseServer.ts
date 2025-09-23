import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey)

console.log("Supabase_URL", process.env.SUPABASE_URL);
console.log("Supabase_Anon_Key", process.env.SUPABASE_ANON_KEY);
