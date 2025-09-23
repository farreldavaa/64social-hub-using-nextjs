// components/AdminDashboard.tsx
"use client";

import { useState, useEffect } from "react";
import { supabaseServer } from "../lib/supabaseServer";
import Link from "next/link";

export default function AdminDashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/admin-data');
      const text = await res.text();
      console.log("Fetched admin data:", text);
      try{
        const json = JSON.parse(text);
        setData(json.data || []);
      }catch(err){
        console.error("Failed to parse JSON:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/admin/blog" className="text-blue-600 underline">
            Manage Blogs
          </Link>
        </li>
        <li>
 
        </li>
      </ul>
    </div>
  );
}
