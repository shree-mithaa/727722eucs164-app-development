import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Import the CSS file for styling

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (isLogin) {
            if (!email) {
                errors.email = 'Email is required';
                isValid = false;
            }
            if (!password) {
                errors.password = 'Password is required';
                isValid = false;
            }
        } else {
            if (!username) {
                errors.username = 'Username is required';
                isValid = false;
            }
            if (!email) {
                errors.email = 'Email is required';
                isValid = false;
            }
            if (!password) {
                errors.password = 'Password is required';
                isValid = false;
            }
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission logic here
            console.log(isLogin ? 'Logging in with:' : 'Registering with:', { username, email, password });
            setErrors({});
            navigate('/success'); // Redirect to the success page
        }
    };

    return (
        <div className="auth-container">
            <h2 className="form-title">{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="submit-button">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
                </p>
            </form>
        </div>
    );
};

export default AuthPage;