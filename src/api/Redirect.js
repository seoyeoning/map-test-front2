import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .post(`/api/kakao/kakaoLogin/${code}`, {
        withCredentials: true,
      })
      .then(r => {
        console.log(r.headers['authorization']);
        localStorage.setItem('Authorization', r.headers['authorization']);
        // navigate('/');
      });
  }, []);

  const handleTestClick = () => {
    const jwtToken = localStorage.getItem('Authorization'); // localStorage에서 JWT 토큰을 가져옴
    if (jwtToken) {
      axios
        .get(
          '/api/test',
          { withCredentials: true },
          {
            headers: {
              Authorization: jwtToken, // JWT 토큰을 헤더에 추가
            },
          },
        )
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log('No JWT token found');
    }
  };

  return <button onClick={handleTestClick}>테스트</button>;
};

export default Redirect;
