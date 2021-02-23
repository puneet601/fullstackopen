import React, { useState } from "react"
import userService from '../services/users'
const Signup = (setStatus, setErrorMessage) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const addUser = async (event) => {
        event.preventDefault()
        try {
            await userService.signin({
                username, password, email
            })
            setEmail('')
            setUsername('')
            setPassword('')
           
        } catch (exception) {
            console.log(exception)
        }
    }
        return (
            <div>
                <h1>Sign UP</h1>
             email:
                <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} /><br />
            username:
                <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} /><br />
            password:
                <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} /><br />
                <button type="submit" onClick={addUser}>Sign Up</button>
            </div>
        );
    
}
export default Signup
