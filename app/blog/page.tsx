// app/blog/page.tsx
import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return ( <div>
    <Navbar />
    <div className="pt-32 justify-center mx-auto">
      <BlogList />;
    </div>
    </div>
    );
}
