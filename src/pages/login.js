import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setUserLoggedIn}) => {
  return (
    <Template
      title="Welcome back"
      desc1="Build Skills for Today, tomorrow and beyond"
      desc2="Education to future proof your career"
      image={loginImg}
      formType="login"
      setUserLoggedIn={setUserLoggedIn}
    ></Template>
  )
}

export default Login
