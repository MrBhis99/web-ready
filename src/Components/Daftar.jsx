import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import home from '../Assets/img/1.png';

const Daftar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  }

  return (
    <>
      <div className="login-umkmuser">
        <img className="homelog" alt="" src={home}/>
        <div className="login-umkmuser-child"></div>
        <img className="lambanglog" alt="" src={lambang}/>
        <div className="rectanglelogin"></div>
        <b className="masukdaftarlog">Daftar</b>
        <form onSubmit={handleSubmit}>
          <label className="email1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-email-login"
          />
          <label className="kata-sandi1" htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-password-login"
          />
         
        </form>
        <div className="tidak-punya-akun-container" id="tidakPunyaAkun">
          Sudah punya akun?
          <span className="daftar-di-sini">Masuk Di sini!</span>
        </div>
        <div className="button">
          <Link to="/" className="Daftar">Daftar</Link>
        </div>
      </div>
    </>
  )
}

export default Daftar;
