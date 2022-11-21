import { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.accessToken) {
            localStorage.setItem('accessToken', result.accessToken);
            setToken(result.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
