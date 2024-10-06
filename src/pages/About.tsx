import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div>
    <h1>About Page</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default About;
