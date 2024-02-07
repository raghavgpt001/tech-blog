"use client"
import { Client, Databases, ID} from "appwrite";
import Navbar from '../components/Navbar'
import BlogPost from '../components/BlogPost'
import {useState, useEffect } from 'react'

export default function Home() {
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    const client = new Client()
    client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65c2970cc45f1f2a9530');
  
  const databases = new Databases(client);
  let promise = databases.listDocuments(
    '65c29bc1a991361f99ec',
      '65c29bcc9efb10d8faeb',
    []
  );

  promise.then(function (response) {
      console.log(response);
      setBlogs(response.documents)
  }, function (error) {
      console.log(error);
  });

  },[])
  
  function truncateHTML(htmlString, maxLength) {
    const strippedString = htmlString.replace(/<[^>]*>/g, '');
    const truncatedString = strippedString.substring(0, maxLength);

    if (truncatedString.length < strippedString.length) {
      return truncatedString + '...';
    } else {
      return truncatedString;
    }
  }
 
  return <>
    <Navbar/>
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length==0 ? "Loading..." : ""}
        {blogs.map((blog,index)=>(
          <BlogPost key={index} title={blog.title} author={blog.author} slug={blog.slug} metaDesc= {truncateHTML(blog.content,100)}/>
        ))}
      </div>
    </div>
  </>
}

