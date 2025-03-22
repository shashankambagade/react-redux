import React, {useState} from 'react'
import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setSmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            createUserWithEmailAndPassword(auth, email,password)
            alert('Signup Sucessful');
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <>
        <div className="container">
            <h2>SignUp</h2>
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
            <button className='btn btn-primary'
            onClick={handleSignup}>SignUP</button>
        </div>
    </>
  )
}

export default Signup