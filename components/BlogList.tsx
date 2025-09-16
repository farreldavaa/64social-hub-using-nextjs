"use client";
import { IoIosArrowForward } from "react-icons/io";
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
    <div className="w-full h-auto">
      <div className="w-full flex justify-center bg-gray-100 mx-auto h-16">
        <div className="w-full max-w-[1240px] bg-gray-100 grid grid-cols-2 flex items-center px-7 mx-auto">
          <div className="font-bold text-[24px] text-left">
            {isAdmin ? "Manage Blogs" : "blog"}
          </div>
          <div className="text-[18px] items-center flex gap-2 justify-end text-gray-600">
            home <span>
              <IoIosArrowForward className="w-4 h-4 my-2 text-gray-400"/>
              </span>
              blog
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-4 grid grid-cols-2 gap-5 flex">
        <div>
          Test
        </div>
        <div className="grid grid-cols-2 gap-5 flex">
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
        </div>
      </div>

      {/* Admin-only create button */}
      {isAdmin && (
        <div>
          <Link href="/admin/blog/create">
            <button>Create New Blog</button>
          </Link>
        </div>
      )}
    </div>
  );
}
