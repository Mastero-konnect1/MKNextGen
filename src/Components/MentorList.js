import React, { useState } from 'react';
import './css/Mentor.css';



const MentorList = () => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showAchievements, setShowAchievements] = useState(false);

    const mentors = [
        {
            name: 'John Doe',
            specialization: 'Frontend Development',
            experience: 5,
            bio: 'John is a passionate frontend developer with expertise in React and Vue.js.',
            profilePicture: 'https://media.licdn.com/dms/image/D4D03AQGFpBgs2uGLVg/profile-displayphoto-shrink_400_400/0/1666361329848?e=2147483647&v=beta&t=3IM545aqqz4C2HPlAuPGdeNc2-Q8rYEDUTmEFi3ibk4',
            rating: 4.5,
            aboutMe: 'I am a dedicated and passionate mentor with over a decade of experience in the tech industry. My journey began with a deep fascination for technology and a drive to create innovative solutions. Over the years, I have honed my skills in various domains, including software development, project management, and team leadership.',
            achievements: 'Developed a top-rated app on the App Store, Speaker at several tech conferences.Throughout my career, I have made significant contributions to the tech community. I developed a groundbreaking app that reached over 1 million downloads, received the "Innovator of the Year" award from Tech Innovators, and was featured in several leading industry publications.',
            price: '₹ 20/min'
        },
        {
            name: 'Jane Smith',
            specialization: 'Backend Development',
            experience: 8,
            bio: 'Jane specializes in building robust backend systems with Node.js and Python.',
            profilePicture: "", 
            rating: 4.7,
            aboutMe: 'My focus is on creating scalable and efficient backend solutions.',
            achievements: 'Authored a popular book on Node.js, Contributed to several high-profile open-source projects.',
            price: '₹ 20/min'
        },
        {
            name: 'Alex Johnson',
            specialization: 'Full Stack Development',
            experience: 7,
            bio: 'Alex has extensive experience in both frontend and backend technologies, including Angular and Django.',
            profilePicture: 'path/to/alex-johnson.jpg',
            rating: 4.6,
            aboutMe: 'I enjoy working on all aspects of web development and problem-solving.',
            achievements: 'Built and launched a successful e-commerce platform, Awarded "Best Developer" by Tech Magazine.',
            price: '₹ 20/min'
        },
        // Add other mentors similarly...
    ];

    const handleMentorClick = (mentor) => {
        setSelectedMentor(mentor);
        setShowAboutMe(false);
        setShowAchievements(false);
    };

    const handleBackClick = () => {
        setSelectedMentor(null);
        setShowAboutMe(false);
        setShowAchievements(false);
    };

    const handleConnectClick = () => {
        alert('Connect with mentor feature not implemented yet.');
    };

    const handleChatClick = () => {
        alert('Chat with mentor feature not implemented yet.');
    };

    const toggleAboutMe = () => {
        setShowAboutMe(!showAboutMe);
    };

    const toggleAchievements = () => {
        setShowAchievements(!showAchievements);
    };

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
        <div className="mentor-list-page">
            {selectedMentor ? (
                <>
                    <div className="mentor-profile">
                        <img src={selectedMentor.profilePicture} alt={`${selectedMentor.name}'s profile`} />
                        <div className="mentor-profile-content">
                            <button onClick={handleBackClick}>Back to List</button>
                            <h2>{selectedMentor.name}</h2>
                            <p><strong>Specialization:</strong> {selectedMentor.specialization}</p>
                            <p><strong>Experience:</strong> {selectedMentor.experience} years</p>
                            <p><strong>Bio:</strong> {selectedMentor.bio}</p>
                            <p><strong>Rating:</strong> {renderStars(selectedMentor.rating)}</p>
                            <p>{selectedMentor.price}</p> {/* Display price without heading */}
                            {/* About Me Section */}
                            <div className="mentor-about-me">
                                <h3 onClick={toggleAboutMe} className="about-me-heading">
                                    About Me 
                                </h3>
                                {showAboutMe && <p>{selectedMentor.aboutMe}</p>}
                            </div>
                            {/* Achievements Section */}
                            <div className="mentor-achievements">
                                <h3 onClick={toggleAchievements} className="achievements-heading">
                                    Achievements 
                                </h3>
                                {showAchievements && <p>{selectedMentor.achievements}</p>}
                            </div>
                            <div className="mentor-actions">
                                <button onClick={handleConnectClick}>Connect with Mentor</button>
                                <button onClick={handleChatClick}>Chat with Mentor</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="mentor-h2">List of Mentors</h2>
                    <div className="mentor-list">
                        {mentors.map((mentor, index) => (
                            <div className="mentor-card" key={index} onClick={() => handleMentorClick(mentor)}>
                                <div className="mentor-info">
                                    <h3>{mentor.name}</h3>
                                    <p><strong>Specialization:</strong> {mentor.specialization}</p>
                                    <p><strong>Experience:</strong> {mentor.experience} years</p>
                                    <div className="mentor-rating">{renderStars(mentor.rating)}</div>
                                    <p>{mentor.price}</p> {/* Display price without heading */}
                                </div>
                                <img src={mentor.profilePicture} alt={`${mentor.name}'s profile`} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MentorList;
