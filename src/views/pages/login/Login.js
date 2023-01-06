import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoginFlag } from '../../../actions/auth';

const Login = () => {
  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  
  console.log(login);
  const handleLogin = (e) => {
    e.preventDefault()
    setLogin(true)
    dispatch(setLoginFlag(true))
    
  }
  return (
    <div>
        <h2>Login page</h2>
      <form>
        <label>User Name</label>
        <input type="text" placeholder="user name"/>
        <label>Password</label>
        <input type="text" placeholder=""/>
        <button type='submit' onSubmit={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  )
}

export default Login
