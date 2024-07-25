import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css'; // Import CSS for styling

const SuccessPage = () => {
    return (
        <div className="success-container">
            <h2 className="success-title">Success!</h2>
            <p className="success-message">You have successfully logged in or registered.</p>
            <Link to="/" className="home-link">Go back to login</Link>
        </div>
    );
};

export default SuccessPage;