"use client";
import Link from "next/link";

type BlogListProps = {
  isAdmin?: boolean; // if true, show edit/delete buttons
};

export default function BlogList({ isAdmin = false }: BlogListProps) {
  const blogs = [
    { id: 1, title: "My First Blog" },
    { id: 2, title: "Next.js App Router" },
  ];

  return (
    <div>
      <h1>{isAdmin ? "Manage Blogs" : "All Blogs"}</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            
            {/* Admin-only actions */}
            {isAdmin && (
              <>
                {" | "}
                <Link href={`/admin/blog/${blog.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => alert(`Deleting blog ${blog.id}`)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Admin-only create button */}
      {isAdmin && (
        <div style={{ marginTop: "1rem" }}>
          <Link href="/admin/blog/create">
            <button>Create New Blog</button>
          </Link>
        </div>
      )}
    </div>
  );
}
