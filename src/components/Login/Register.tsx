import './Style.css';
import './Register.css';
import React, { ReactElement } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Register = () : ReactElement => (
    <div className="register-wrapper">
      <form>
          <div className="avatar-wrapper-register"><GoPerson id='goperson' size={90}/></div>
        <label>
          <FiMail className='login-register-icon'size={20}/>
          <input type="text" name="emailId" className="emailId" placeholder="Email Id"/>
        </label>
        <label>
          <AiOutlineLock className='login-register-icon' size={20}/>
          <input type="password" className="password" placeholder="Password"/>
        </label>
        <label>
          <AiOutlineLock className='login-register-icon' size={20}/>
          <input type="password" className="password" placeholder="Confirm Password"/>
        </label>
        <button type="submit" id="registerNewUser">Register</button>
      </form>
    <Link to="/login" className="loginFromRegister">Login</Link>

  </div>
);
export default Register;
