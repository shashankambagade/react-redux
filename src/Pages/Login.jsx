import React, {useState} from 'react'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setSmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email,password);
            alert('Login Sucessful!!');
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }
  return (
    <>
        <div className="container">
            <h2>Login</h2>
            <input 
            type="email" 
            className='form-control my-2' 
            placeholder='Enter Email here..' 
            onChange={(e) =>setSmail(e.target.value)} />
            <input 
            type="password" 
            className='form-control my-2'
            placeholder='Enter Password here..'
            onChange={(e)=> setPassword(e.target.value)}
              />
            <button className='btn btn-success'
            onClick={handleLogin}>Login</button>
        </div>
    </>
  )
}

export default Login