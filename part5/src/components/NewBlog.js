import React from 'react'

const BlogForm = ({
    showWhenVisible, setNewBlogVisible,
    newTitle, setNewTitle,
    newAuthor, setNewAuthor,
    newUrl, setNewUrl, addBlog
}) => {
   
    return (
      <div>
        <div style={showWhenVisible}> <h1>Create new Blog</h1>
     <form>
       title:<input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)} /><br />
       author:<input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} /><br />
       url:<input type="text" value={newUrl} onChange={({ target }) => setNewUrl(target.value)} /><br />
            <button type="submit" onClick={addBlog}>Add</button><br />
            <button type="submit" onClick={() => setNewBlogVisible(false)}>Cancel</button>
     </form></div> </div>
      
       
    )
}
export default  BlogForm;