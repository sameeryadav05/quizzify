import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { LoginSchema } from '../schema/LoginSchema';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/AuthStore';
import { PulseLoader } from 'react-spinners';


const Login = () => {
  const SetisAuthenticated = useAuthStore(state => state.SetisAuthenticated);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const navigate = useNavigate(); // lowercase 'navigate'

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const initialValues = {
    email: '',
    password: '',
  };

  const { handleBlur, handleChange, handleSubmit, errors, touched, values, isSubmitting } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        SetisAuthenticated();  // should update Zustand store and localStorage
        setSubmitting(false);
      }, 1000);

      console.log(values);
    },
  });

  return (
    <div className='login-container'>
      <motion.div
        initial={{ y: 100, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className='login-wrapper'
      >
        <div className='heading'>
          <h2>Welcome Back !</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <div className='label-error'>
              <label htmlFor='email'>Email</label>
              {touched.email && errors.email ? <p>{errors.email}</p> : null}
            </div>
            <input id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
          </div>
          <div className='input-box'>
            <div className='label-error'>
              <label htmlFor='password'>Password</label>
              {touched.password && errors.password ? <p>{errors.password}</p> : null}
            </div>
            <input
              type='password'
              id='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <span>
            <motion.button whileTap={{ scale: 0.85 }} type='submit' disabled={isSubmitting}>
              {isSubmitting ? <PulseLoader size={8} color='#ffffff' /> : 'Login'}
            </motion.button>
          </span>
        </form>
        <span className='link'>
          <Link to={'/sign-up'}>Don't have an account? <span>Sign-up</span></Link>
        </span>
      </motion.div>
    </div>
  );
};

export default Login;
