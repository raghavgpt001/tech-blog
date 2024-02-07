import React from 'react';
import Link from 'next/link'

const BlogPost = ({ title, author, metaDesc, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">By {author}</p>
      <p className="text-gray-700 mb-4">{metaDesc}</p>
      <Link href={"/blogpost/" + slug} className="bg-purple-700 text-white py-2 px-4 rounded-md inline-block cursor-pointer hover:bg-purple-600 transition duration-300">Read More</Link>
    </div>
  );
};

export default BlogPost;
