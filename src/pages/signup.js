import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setUserLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with study notion"
      desc1="Build Skills for Today, tomorrow and beyond"
      desc2="Education to future proof your career"
      image={signupImg}
      formType="signup"
      setUserLoggedIn={setUserLoggedIn}
    ></Template>
  )
}

export default Signup
