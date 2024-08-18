import React, { useState } from 'react';
import './css/HomePage.css';
import exampleImage from './Images/home.jpg'; 
import Navbar from './Navbar';
// Import the MentorList component
import MentorList from './MentorList';

const HomePage = () => {
  const [rating, setRating] = useState(5); // Default rating value
  const [goals, setGoals] = useState(''); // For the second question input
  const [skills, setSkills] = useState(''); // For the third question input
  const [guidance, setGuidance] = useState(''); // For the fourth question input
  const [submittedFirst, setSubmittedFirst] = useState(false);
  const [submittedSecond, setSubmittedSecond] = useState(false);
  const [submittedThird, setSubmittedThird] = useState(false);
  const [navigateToMentorList, setNavigateToMentorList] = useState(false); // To handle the navigation to MentorList

  const handleSubmitFirstQuestion = () => {
    setSubmittedFirst(true);
  };

  const handleSubmitSecondQuestion = () => {
    setSubmittedSecond(true);
  };

  const handleSubmitThirdQuestion = () => {
    setSubmittedThird(true);
  };

  const handleSubmitFourthQuestion = () => {
    alert(`First Rating: ${rating}\nGoals: ${goals}\nLacking Skills: ${skills}\nGuidance: ${guidance}`);
    // Set state to navigate to the MentorList component
    setNavigateToMentorList(true);
  };

  if (navigateToMentorList) {
    return <MentorList />; // Navigate to the MentorList page by rendering the component
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="homepage">
          <div className="intro">
            <h2>Welcome to Our Platform!</h2>
            <p>
              We’re committed to offering top-notch support to help you reach your goals.
              Connect with experts, explore innovative solutions. Join us today and start achieving your full potential!
            </p>
            <h3>
              <a href="#assessment-section">Complete the assessment</a>
            </h3>
          </div>
          <div className="image">
            <img src={exampleImage} alt="Platform Overview" className="home-image" />
          </div>
        </div>
        {/* Assessment Section */}
        <div id="assessment-section" className="additional-section">
          <h2>Assessment</h2>
          <p>1. How would you rate your current level of exposure to your desired industry?</p>
          <input
            type="range"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="slider"
          />
          <div className="rating-value">Rating: {rating}</div>
          
          {!submittedFirst && (
            <button className="submit-button-h" onClick={handleSubmitFirstQuestion}>Submit</button>
          )}
          
          {submittedFirst && (
            <>
              <p>2. What are your primary goals for professional development?</p>
              <textarea
                placeholder="Enter your goals here"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="assessment-textarea"
              /><br />
              {!submittedSecond && (
                <button className="submit-button-h" onClick={handleSubmitSecondQuestion}>Submit</button>
              )}
            </>
          )}

          {submittedFirst && submittedSecond && (
            <>
              <p>3. What skills do you feel are most lacking for success in your desired industry?</p>
              <textarea
                placeholder="Enter the skills you lack here"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="assessment-textarea"
              /><br />
              {!submittedThird && (
                <button className="submit-button-h" onClick={handleSubmitThirdQuestion}>Submit</button>
              )}
            </>
          )}

          {submittedFirst && submittedSecond && submittedThird && (
            <>
              <p>4. What type of guidance would be most helpful from a mentor?</p>
              <textarea
                placeholder="Enter the type of guidance here"
                value={guidance}
                onChange={(e) => setGuidance(e.target.value)}
                className="assessment-textarea"
              /><br />
              <button className="submit-button-h" onClick={handleSubmitFourthQuestion}>Submit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
