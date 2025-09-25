import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

// pastikan environment variable ada
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // pakai service role
);

export async function POST(req: Request) {
  try {
    // ambil data body
    const body = await req.json();
    console.log("Incoming body:", body);

    const { nama, username, email, password } = body;

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    // cek user sudah ada
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (checkError) {
      console.error("Supabase check error:", checkError);
      return NextResponse.json(
        { error: "Database error saat cek user" },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user baru
    const { error: insertError } = await supabase.from("users").insert([
      {
        nama,
        username,
        email,
        password: hashedPassword,
        role: "user",
        status: "true",
      },
    ]);

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: insertError.message, details: insertError},
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("API catch error:", err);
    return NextResponse.json(
      { error: "Unknown error" },
      { status: 500 }
    );
  }
}
