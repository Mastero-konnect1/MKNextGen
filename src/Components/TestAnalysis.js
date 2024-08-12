import React, { useState } from 'react';
import './TestAnalysis.css';

const TestAnalysis = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    education: '',
    exposure: '',
    goals: '',
    skills: '',
    industryImpact: '',
    guidance: '',
    mentorshipExperience: '',
    mentorshipChallenges: '',
    exposureInfluence: '',
    professionalEngagement: '',
    mentorshipSuggestions: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.age) formErrors.age = 'Age is required';
    if (!formData.education) formErrors.education = 'Education level is required';
    if (!formData.exposure) formErrors.exposure = 'Exposure rating is required';
    // if (!formData.skills) formErrors.skills = 'Skills lacking are required';
    // if (!formData.industryImpact) formErrors.industryImpact = 'Impact of lack of industry exposure is required';
    // if (!formData.guidance) formErrors.guidance = 'Type of guidance needed from a mentor is required';
    // if (!formData.mentorshipExperience) formErrors.mentorshipExperience = 'Mentorship experience rating is required';
    // if (!formData.mentorshipChallenges) formErrors.mentorshipChallenges = 'Challenges in the mentorship relationship are required';
    // if (!formData.exposureInfluence) formErrors.exposureInfluence = 'Exposure to the industry influence on career goals is required';
    // if (!formData.professionalEngagement) formErrors.professionalEngagement = 'Frequency of engagement with professionals is required';
    // if (!formData.mentorshipSuggestions) formErrors.mentorshipSuggestions = 'Suggestions for improving the mentorship program are required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully', formData);
      // Handle form submission (e.g., send data to a server)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="test-analysis">
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email<span className="required">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>What's your name?<span className="required">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Age?<span className="required">*</span></label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="age"
                value="15-25"
                checked={formData.age === '15-25'}
                onChange={handleChange}
              />
              15-25
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="26-35"
                checked={formData.age === '26-35'}
                onChange={handleChange}
              />
              26-35
            </label>
            <label>
              <input
                type="radio"
                name="age"
                value="36+"
                checked={formData.age === '36+'}
                onChange={handleChange}
              />
              36+
            </label>
          </div>
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div>
          <label>Your Current education level<span className="required">*</span></label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="education"
                value="Senior secondary school"
                checked={formData.education === 'Senior secondary school'}
                onChange={handleChange}
              />
              Senior secondary school
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Graduation"
                checked={formData.education === 'Graduation'}
                onChange={handleChange}
              />
              Graduation
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Post graduation"
                checked={formData.education === 'Post graduation'}
                onChange={handleChange}
              />
              Post graduation
            </label>
          </div>
          {errors.education && <span className="error">{errors.education}</span>}
        </div>
        <div>
          <label>How would you rate your current level of exposure to your desired industry?<span className="required">*</span></label>
          <input
            type="range"
            name="exposure"
            min="1"
            max="10"
            value={formData.exposure}
            onChange={handleChange}
            className="slider"
          />
          <div className="slider-value">{formData.exposure}</div>
          {errors.exposure && <span className="error">{errors.exposure}</span>}
        </div>
        <div>
          <label>What are your primary goals for professional development?</label>
          <input
            type="text"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            className="line-input"
          />
        </div>
        <div>
          <label>What skills do you feel are most lacking for success in your desired industry?</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="line-input"
          />
          {errors.skills && <span className="error">{errors.skills}</span>}
        </div>
        <div>
          <label>How has the lack of industry exposure impacted your career development?</label>
          <input
            type="text"
            name="industryImpact"
            value={formData.industryImpact}
            onChange={handleChange}
            className="line-input"
          />
          {errors.industryImpact && <span className="error">{errors.industryImpact}</span>}
        </div>
        <div>
          <label>What type of guidance would be most helpful from a mentor?</label>
          <input
            type="text"
            name="guidance"
            value={formData.guidance}
            onChange={handleChange}
            className="line-input"
          />
          {errors.guidance && <span className="error">{errors.guidance}</span>}
        </div>
        <div>
          <label>On a scale from 1 to 10, how would you rate your overall mentorship experience?</label>
          <input
            type="range"
            name="mentorshipExperience"
            min="1"
            max="10"
            value={formData.mentorshipExperience}
            onChange={handleChange}
            className="slider"
          />
          <div className="slider-value">{formData.mentorshipExperience}</div>
          {errors.mentorshipExperience && <span className="error">{errors.mentorshipExperience}</span>}
        </div>
        <div>
          <label>What are the biggest challenges in your mentorship relationship?</label>
          <input
            type="text"
            name="mentorshipChallenges"
            value={formData.mentorshipChallenges}
            onChange={handleChange}
            className="line-input"
          />
          {errors.mentorshipChallenges && <span className="error">{errors.mentorshipChallenges}</span>}
        </div>
        <div>
          <label>How has your exposure to the industry influenced your career goals?</label>
          <input
            type="text"
            name="exposureInfluence"
            value={formData.exposureInfluence}
            onChange={handleChange}
            className="line-input"
          />
          {errors.exposureInfluence && <span className="error">{errors.exposureInfluence}</span>}
        </div>
        <div>
          <label>How often do you engage with professionals in your desired industry?</label>
          <input
            type="text"
            name="professionalEngagement"
            value={formData.professionalEngagement}
            onChange={handleChange}
            className="line-input"
          />
          {errors.professionalEngagement && <span className="error">{errors.professionalEngagement}</span>}
        </div>
        <div>
          <label>What suggestions do you have for improving the mentorship program?</label>
          <input
            type="text"
            name="mentorshipSuggestions"
            value={formData.mentorshipSuggestions}
            onChange={handleChange}
            className="line-input"
          />
          {errors.mentorshipSuggestions && <span className="error">{errors.mentorshipSuggestions}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestAnalysis;
