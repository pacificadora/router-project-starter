import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setUserLoggedIn}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault()
        if(formData.password != formData.confirmPassword){
            toast.error("password do not match")
            return
        }
        setUserLoggedIn(true)
        toast.success("Account Created")
        navigate("/dashboard")
    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            {/* firstName and lastName */}
            <div>
                <label>
                    <p>First Name</p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                    >
                    </input>
                </label>

                <label>
                    <p>First Name</p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                    >
                    </input>
                </label>
            </div>

            {/* email */}
            <label>
                    <p>Email Address</p>
                    <input
                        required
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                    >
                    </input>
            </label>

            {/* password and conformPassword */}
            <div>
                <label>
                    <p>Create Password</p>
                    <input
                        required
                        type={showPassword?("text"):("password")}
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter password'
                    >
                    </input>

                    <span onClick={()=>(setShowPassword((prev)=> !prev ))}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>Confirm Password</p>
                    <input
                        required
                        type={showConfirmPassword?("text"):("password")}
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Re -enter password'
                    >
                    </input>

                    <span onClick={()=>(setShowConfirmPassword((prev)=> !prev ))}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
            <button>Create Account</button>
        </form>

    </div>
  )
}

export default SignupForm