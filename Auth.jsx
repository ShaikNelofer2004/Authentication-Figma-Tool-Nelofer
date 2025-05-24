import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const { username, email, password } = formData;

    if (!isLogin && username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 6 characters with letters & numbers';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Use correct backend URL for auth routes
    const url = isLogin ? '/api/auth/login' : '/api/auth/register';

    fetch(`http://localhost:5000${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Already registered or invalid credentials');
        }
        alert(data.message || 'Success');

        // On successful login, you may receive a token
        if (isLogin && data.token) {
          localStorage.setItem('token', data.token);
          // Redirect or update UI as needed
          window.location.href = '/dashboard'; // example redirect
        }

        // Clear form or switch to login after registration
        if (!isLogin) {
          setIsLogin(true);
          setFormData({ username: '', email: '', password: '' });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="app-container">
      <div className="form-box">
        <h1 className="brand-title">Addwise</h1>
        <h2>{isLogin ? 'Login to your account' : 'Register a new account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <p className="hint">Username must be at least 3 characters</p>
              {errors.username && <p className="error">{errors.username}</p>}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="hint">
            Password must be at least 6 characters and contain letters & numbers
          </p>
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p className="toggle-link" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default App;