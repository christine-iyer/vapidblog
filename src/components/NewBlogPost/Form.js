import { useState } from "react";

const Form = () => {
     const [title, setTitle] = useState('');
     const [body, setBody] = useState('');
     const [image, setImage]= useState('');

     const handleSubmit =(e) => {
          e.preventDefault();
          const blog = { title, image, body }
          
          fetch('')
     }

     return (
          <div className='blog-entry'>
               <h2 className="add">Add a New Blog Entry</h2>
               <form>
                    <label className="title">Blog Title</label>
                    <input
                    className="title-box"
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Image</label>
                    <input
                    className="img"
                    type='text'
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                    <label className="body">Blog Body</label>
                    <input
                    type='text'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                    <button className="btn">Submit</button>
               </form>
          </div>
     )


}
export default Form