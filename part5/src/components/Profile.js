import React from 'react'
const Profile = ({ showUserProfile, getUsersBlogs ,setShowUserProfile }) => {
  return (
    <div className="container">
        <h1>{showUserProfile.username}</h1><br />
        {console.log(getUsersBlogs)}
      <button onClick={() => setShowUserProfile('')}>Back</button>
    </div>
  )
}

export default Profile