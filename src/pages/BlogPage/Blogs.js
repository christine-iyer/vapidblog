import { useState, useEffect } from 'react'
import CreateBlog from '../../components/CreateBlog/CreateBlog'



export default function Blogs({
    blogs,
    addBlog,
    completeBlog,
    deleteBlog,
    editBlogText
  }) {
    return (
      <>

      <div className='newblog'>
        <h1>Create Blog</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addBlog(e)
          }}
        />
        </div>
        {blogs.length ? (
          <>
<div className="nowlist">

            <h1>Blog Items</h1>
            <ul>
              {blogs
                .filter((i) => !i.completed)
                .map((blog) => {
                  return (
                    <CreateBlog
                      key={blog.id}
                      blog={blog}
                      completeBlog={completeBlog}
                      deleteBlog={deleteBlog}
                      editBlogText={editBlogText}
                    />
                  )
                })}
            </ul>

            </div>

            <div className="neverlist">
            
            <h1>Completed Items </h1>
            <ul>
              {blogs
                .filter((i) => i.completed)
                .map((blog) => {
                  return (
                    <Blogs 
                      key={blog.id}
                      blog={blog}
                      completeBlog={completeBlog}
                      deleteBlog={deleteBlog}
                      editBlogText={editBlogText}
                    />
                  )
                })}
            </ul>
            </div>
          </>
        ) : (
          <h1>No Blogs Added Yet</h1>
        )}
      </>
    )
  }