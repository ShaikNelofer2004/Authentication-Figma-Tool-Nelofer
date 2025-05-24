
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // optional for styling

export default function home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="brand-title">Addwise Tech</h1>
      <div className="about-section">
  <h2>About Addwise</h2>

  <p>
    Addwise is a leading-edge technology company dedicated to simplifying digital identity and 
    user management across industries. Our innovative solutions enable seamless and secure access 
    to applications, ensuring that users enjoy effortless experiences with robust protection.
  </p>

  <h3>Our Mission</h3>
  <p>
    To empower businesses and individuals by delivering secure, scalable, and user-friendly 
    authentication and registration platforms. We strive to build trust through technology that 
    prioritizes privacy and ease of use.
  </p>

  <h3>Core Domains</h3>
  
  <h4>1. User Authentication & Security</h4>
  <p>
    Addwise specializes in creating reliable authentication systems using the latest standards 
    like OAuth 2.0 and JWT. We provide multi-factor authentication (MFA), biometric integrations, 
    and adaptive security mechanisms to safeguard user identities.
  </p>

  <h4>2. Identity Management Solutions</h4>
  <p>
    We design identity lifecycle management tools that help organizations manage user roles, 
    permissions, and data access efficiently. Our solutions integrate with cloud and on-premise 
    systems to provide unified user profiles.
  </p>

  <h4>3. Seamless User Experience</h4>
  <p>
    Our platforms focus on smooth user journeys — from quick registration flows to intuitive 
    login and password recovery processes. We leverage AI and behavioral analytics to enhance 
    usability while maintaining top-level security.
  </p>

 

  <h3>Join Us on Our Journey</h3>
  <p>
    Addwise is continuously innovating to meet the evolving needs of digital identity and security. 
    Whether you're a startup or an established enterprise, we invite you to experience the future of 
    authentication with Addwise.
  </p>
</div>
      <button className="btn-login" onClick={() => navigate('/auth')}>
        Go to Login/Register
      </button>
    </div>
  );
}
