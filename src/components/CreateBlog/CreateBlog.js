
export default function CreateBlog ({
  createBlog,
  blog,
  handleChange
}
) {
  return (
    <div className= 'CreateBlog'>
      <h2 className= 'NewBlog'>Create A Blog</h2>
      <div className= 'container'>
        <form 
          className= 'form'
          onSubmit={(e) => {
            e.preventDefault()
            createBlog()
          }}
        >
          
          <label>Title
            <input 
            className= 'title'
            type='text' 
            value={blog.title} 
            name='title' 
            onChange={handleChange} 
            placeholder='Title' 
            />
          </label>

          <label>Url
            <input className= 'url'
            type='text' 
            value={blog.url} 
            name='url' 
            onChange={handleChange} 
            placeholder='URL' />
          </label>

          <label>Pick a category:
            <select 
            
            options={blog.category} 
            value={blog.category} 
            onChange={handleChange} 
            placeholder='Category'
            name="category">
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
            </select>
            </label>

          <input className= 'button'
          type='submit' 
          value='Create Blog' />

        </form>
      </div>
     
    </div>
  )
}

