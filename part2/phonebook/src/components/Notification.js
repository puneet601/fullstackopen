import React from 'react'
const Notification = ({ message , status }) => {
    if (message === null) {
      return null
    }
    if(status === false)
     {return (
      <div className="error">
        {message}
      </div>
    )}
    return (
        <div className="sucess">
          {message}
        </div>
      )
  }
  export default Notification