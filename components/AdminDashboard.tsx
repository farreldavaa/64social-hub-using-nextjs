// components/AdminDashboard.tsx
"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let imageUrl = null;

    // Upload image to Supabase storage
    if (image) {
      const { data, error } = await supabase.storage
        .from("blog-image")
        .upload(`images/${Date.now()}-${image.name}`, image);

      if (error) {
        console.error("Image upload error:", error);
        return;
      }

      imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/${data.path}`;
    }

    // Insert into blogs table
    const { error: insertError } = await supabase.from("blogs").insert([
      {
        title,
        description,
        image_url: imageUrl,
        published_at: new Date(),
      },
    ]);

    if (insertError) {
      console.error("Insert error:", insertError);
    } else {
      alert("Blog created!");
      setShowModal(false);
      setTitle("");
      setDescription("");
      setImage(null);
    }
  }

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
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Create Blog
          </button>
        </li>
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
