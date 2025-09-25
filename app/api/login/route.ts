import { NextResponse } from "next/server";
import { createClient, PostgrestError } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

if(!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY){
    throw new Error("Missing environment variables");
}

const database = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    if ((!username) || !password) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // ambil user berdasarkan username
    const { data: user, error } : {data: any; error: PostgrestError | null} = await database
      .from("users")
      .select("*")
      .eq("username",username)
      .maybeSingle();

    if (error || !user) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    // cek password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    const token = jwt.sign(
        {id: user.id, role:user.role},
        process.env.JWT_SECRET!,
        {expiresIn: "3d"}
    )

    const res = NextResponse.json({ message: "Login success"});
    res.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*24*3,
        path: "/",
    });

    return res;
    
  } catch (err: unknown) {
    console.error("Login error:", err)
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
