
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/css/Login.css'

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const simpleEncrypt = (str) => {
    const offset = 3;
    return str
      .split('')
      .map(char => {
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + offset) % 26) + 97);
        }
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + offset) % 26) + 65);
        }
        return char;
      })
      .join('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedLogin = simpleEncrypt(login);
    const encryptedPassword = simpleEncrypt(password);
    alert('Você está logado!');
    sessionStorage.setItem('email', encryptedLogin);
    sessionStorage.setItem('senha', encryptedPassword);
    navigate('/pedido');
  };

  const handleLogout = () => {
    alert('Você fez logout.');
    sessionStorage.clear();
    navigate('/');
  };

  return (
      
    
    <div className="login-container">
      <h2 className="login-title">Por favor, nos forneça as seguintes informações</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="text" 
          value={login} 
          onChange={(e) => setLogin(e.target.value)} 
          placeholder="E-mail" 
          className="login-input"
        />
        
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Senha" 
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        <button type="button" onClick={handleLogout} className="login-button logout-button">Logout</button>
      </form>   
    </div>
  );
};

export default Login;
