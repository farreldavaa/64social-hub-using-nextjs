// components/AdminDashboard.tsx
"use client"; // if you need client-side interactivity like buttons, useState, etc.

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/admin/blog">Manage Blogs</Link>
        </li>
        <li>
          <Link href="/admin/blog/create">Create Blog</Link>
        </li>
      </ul>
    </div>
  );
}
