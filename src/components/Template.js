import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn   }) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2 }</span>
            </p>

            {formType === "signup" ? 
                (<SignupForm></SignupForm>) : 
                (<LoginForm></LoginForm>)} 
            
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign up with Google</p>
            </button>
        </div>

        <div>
            <img  
                src={frameImage}
                alt='pattern'
                loading='lazy'
                width={558}
                height={504}
            />

            <img  
                src={image}
                alt='students'
                loading='lazy'
                width={558}
                height={500 }
            />
        </div>



    </div>
  )
}

export default Template