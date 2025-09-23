import { useFormik } from 'formik'
import React from 'react'
import {motion} from 'motion/react'
import { LoginSchema } from '../schema/LoginSchema'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/AuthStore'

const Login = () => {
  const SetisAuthenticated = useAuthStore(state => state.SetisAuthenticated);
  const Navigate = useNavigate();
  const initialValues = {
    email:'',
    password:'',

  }
  const {handleBlur,handleChange,handleSubmit,errors,touched,values,isSubmitting} = useFormik({
    initialValues:initialValues,
    validationSchema:LoginSchema,
    onSubmit: (values,{setSubmitting,resetForm})=>{
      setSubmitting(true);
      SetisAuthenticated();
      console.log(values);
      Navigate('/')
    }

  })
  return (
    <div className='login-container'>
      <motion.div 
      initial={{y:100,scale:0.8,opacity:0}}
      animate={{y:0,scale:1,opacity:1}}
      transition={{type:'spring', stiffness:150,damping:20}}
      className='login-wrapper'>
        <div className='heading'><h2>Login</h2></div>
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <div className='label-error'>
              <label htmlFor='email'>Email</label>
                {touched.email && errors.email?<p>{errors.email}</p>:null}
            </div>
            <input type='email' id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <div className='input-box'>
            <div className='label-error'>
              <label htmlFor='password'>password</label>
                {touched.password && errors.password?<p>{errors.password}</p>:null}
            </div>
            
            <input type='password' id='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          </div>
          <span>
            <motion.button 
            whileTap={{scale:0.90}}
            type='submit' disabled={isSubmitting}>Login</motion.button>
          </span>

        </form>
          <span className='link'>
            <Link to={'/sign-up'}>new user? sign-up</Link>
          </span>
      </motion.div>
    </div>
  )
}

export default Login
