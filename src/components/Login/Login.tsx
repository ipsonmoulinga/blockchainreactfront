import './Login.css';
import './Style.css';
import React, { ReactElement } from 'react';
import { GoPerson } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () : ReactElement => (
    <div className="login-wrapper">
      <form>
          <div className="avatar-wrapper"><GoPerson id='goperson' size={90}/></div>
        <label>
          <FiMail className='login-icon'size={20}/>
          <input type="text" name="emailId" className="emailId" placeholder="Email Id"/>
        </label>
        <label>
          <AiOutlineLock className='login-icon' size={20}/>
          <input type="password" className="password" placeholder="Password"/>
        </label>
        <div className="submitOrChangePassWord">
          <button type="submit">Login</button>
          <button>Forgot password ?</button>
        </div>
      </form>
    <Link to="/register" className="registerFromLogin">
      Register
    </Link>
  </div>
);
export default Login;
