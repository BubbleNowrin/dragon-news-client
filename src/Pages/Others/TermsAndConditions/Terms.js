import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions here</h2>
            <p>Return to <Link to={'/register'}>Register</Link></p>
        </div>
    );
};

export default Terms;