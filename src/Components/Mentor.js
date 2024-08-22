import React from 'react';
import './css/Mentor.css';

const Mentor = ({ name, specialization, experience, profilePicture, rating, handleClick }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="star-rating">
                {'★'.repeat(fullStars)}
                {halfStar ? '☆' : ''}
                {'☆'.repeat(emptyStars)}
            </div>
        );
    };

    return (
        <div className="mentor-card" onClick={handleClick}>
            <img src={profilePicture} alt={`${name}'s profile`} />
            <div className="mentor-info">
                <h3>{name}</h3>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Experience:</strong> {experience} years</p>
                <div className="mentor-rating">
                    {renderStars(rating)}
                </div>
            </div>
        </div>
    );
};

export default Mentor;
