import React from 'react'
import PropTypes from 'prop-types'
const BlogForm = ({
    showWhenVisible, setNewBlogVisible,
    newTitle, setNewTitle,
    newAuthor, setNewAuthor,
    newUrl, setNewUrl, addBlog
}) => {
   BlogForm.propTypes = {
     newTitle:PropTypes.string.isRequired
   }
    return (
      <div>
        <div style={showWhenVisible}> <h1>Create new Blog</h1>
     <form>
       title:<input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)} /><br />
       author:<input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} /><br />
       Blog :<br />
       <textarea value={newUrl} onChange={({ target }) => setNewUrl(target.value)} rows="5" cols="30"></textarea>
       <br />
            <button type="submit" onClick={addBlog}>Add</button><br />
            <button type="submit" onClick={() => setNewBlogVisible(false)}>Cancel</button>
     </form></div> </div>
      
       
    )
}
export default  BlogForm;