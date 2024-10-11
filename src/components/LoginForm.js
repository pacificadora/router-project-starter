import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
  return (
    <form>
        <label htmlFor='email'><p>Email Address<sup>*</sup></p></label>
        <input
            id='email'
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email Id'
            name='email'
        ></input>

        <label htmlFor='password'>
            <p>Password<sup>*</sup></p>

            <input
                id='password'
                required
                type={showPassword ? ('text') : ('password')}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Your Password'
                name='password'
            ></input>

            <span onClick={()=>(setShowPassword((prev)=> !prev ))}>
                {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye/>)}
            </span>

            <Link to='#'>
                <p>Forgot Password</p>
            </Link>
        </label>

        <button>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm