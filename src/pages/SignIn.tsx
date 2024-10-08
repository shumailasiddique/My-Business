import React from 'react';
import SignInLayout from '../layouts/SignInLayout';
import ImageViewer from '../components/ImageViewer'; // Existing component for the left-side image
import SignInForm from '../components/SignInForm'; // Existing form component for inputs and buttons
import SignInTitle from '../components/SignInTitle'; // Import the new title component

const SignInPage: React.FC = () => {
  return (
    <SignInLayout>
      <div id="left">
        <ImageViewer 
          src="/../../public/green-trees.png" 
          alt="Sign-in Illustration"
        />
      </div>
      <div id="right">
        <SignInTitle /> {/* Replaces the old 'Welcome Back' with Favicon and Business Name */}
        <SignInForm />
      </div>
    </SignInLayout>
  );
};

export default SignInPage;
