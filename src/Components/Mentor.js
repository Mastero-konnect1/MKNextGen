import React from 'react';

const Mentor = ({ name, specialization, experience, profilePicture, handleClick }) => {
    return (
        <div className="mentor-card" onClick={handleClick}>
            <div>
                <h3>{name}</h3>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Experience:</strong> {experience} years</p>
            </div>
            <img src={profilePicture} alt={`${name}'s profile`} />
        </div>
    );
};

export default Mentor;
