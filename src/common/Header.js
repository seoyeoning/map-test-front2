import React, { useState } from 'react';
import Styles from './Header.module.css';
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login&scope=friends,talk_message`;

  const handleLogin = () => {
    window.location.href = link;
  };

  const [login, setLogin] = useState(false);

  return (
    <header className={Styles.header}>
      <div className={Styles.title}>📌 RemindMap</div>
      {login ? (
        <div className={Styles.userInfo}>
          <div className={Styles.userPhoto} />
          <div className={Styles.userName}>홍사미</div>
          <AiFillHome className={Styles.home} />
        </div>
      ) : (
        <button className={Styles.loginBtn} onClick={handleLogin}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
