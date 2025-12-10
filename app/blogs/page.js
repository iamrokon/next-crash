import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "First Blog Post",
      description: "This is the content of the first blog post."
    },
    {
      id: 2,
      title: "Second Blog Post",
      description: "This is the content of the second blog post."
    }
  ];
   
  return (
    <main className="mt-10">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
    </main>
  );
}