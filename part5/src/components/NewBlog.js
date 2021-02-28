import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ClearIcon from '@material-ui/icons/Clear';
const BlogForm = ({
  showWhenVisible, setNewBlogVisible,
  newTitle, setNewTitle,
  newAuthor, setNewAuthor,
  newUrl, setNewUrl, addBlog
}) => { 
  return (
      <div>
      <div style={showWhenVisible}>
      <h1>Create new Blog</h1>
     <form>
       title:<input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)} /><br />
       author:<input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} /><br />
       Blog :<br />
       <textarea value={newUrl} onChange={({ target }) => setNewUrl(target.value)} rows="5" cols="30"></textarea>
       <br />
            <button type="submit" onClick={addBlog}><AddCircleIcon /></button><br />
            <button type="submit" onClick={() => setNewBlogVisible(false)}><ClearIcon /></button>
        </form>
      </div>
    </div>   
       
    )
}
export default  BlogForm;