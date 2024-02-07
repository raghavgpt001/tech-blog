"use client"
import React from 'react'
import {useState} from 'react'
import { Client, Databases, Query} from "appwrite";
import Navbar from '../../../components/Navbar'


export default function Page({params}) {
  const [blog,setBlog] = useState(null)

  const client = new Client()
  client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65c2970cc45f1f2a9530');

    const databases = new Databases(client);
    let promise = databases.listDocuments(
        '65c29bc1a991361f99ec',
        '65c29bcc9efb10d8faeb',
        [Query.equal('slug', params.slug)]
    );

    promise.then(function (response) {
        console.log(response);
        setBlog(response.documents[0])
    }, function (error) {
        console.log(error);
    });

    return <>
        <Navbar/>
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6">{blog ? blog.title : ""}</h1>
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
                {blog ? "" :"Loading..."}
                <div className="text-sm">  {blog ? blog.author : ""}</div>
                <div className="shadow-x1 p-10" dangerouslySetInnerHTML={{__html: blog?.content}}></div>
            </div>
        </div>
    </>
}