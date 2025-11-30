'use client'
import React, { useState } from 'react';
import { LogIn, UserPlus, Phone, Lock, Hash, Users, ArrowLeft, ArrowRight, X } from 'lucide-react';
import rimage from '../images/rb.jpg'
// FIX: Replaced local file import ('../images/rb.jpg') which was causing a build error
// with a direct URL to a placeholder image that fits the BGMI theme (dark, futuristic, action).
const rbImage = rimage.src; // Using the src property of the imported image

// --- Custom Components ---

// Input field with Neon/Holographic styling
const AuthInput = ({ type, placeholder, Icon, value, onChange, isSelect = false, children, error = false }) => (
  <div className="relative mb-5 group">
    {/* Icon */}
    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00E5FF] opacity-80 z-10" />

    {/* Input/Select element */}
    {isSelect ? (
      <select
        value={value}
        onChange={onChange}
        className={`w-full bg-black/50 border-b border-t-0 border-x-0 py-3 pl-12 pr-4 text-white text-lg placeholder-gray-400 focus:outline-none transition-all duration-300 shadow-inner ${
          error ? 'border-red-500' : 'border-[#00E5FF]/40 focus:border-[#FF4170]'
        } appearance-none cursor-pointer`}
      >
        {children}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-black/50 border-b border-t-0 border-x-0 py-3 pl-12 pr-4 text-white text-lg placeholder-gray-400 focus:outline-none transition-all duration-300 shadow-inner ${
          error ? 'border-red-500' : 'border-[#00E5FF]/40 focus:border-[#FF4170]'
        }`}
      />
    )}
    {/* Highlight for the focus state */}
    <div className={`absolute bottom-0 left-0 w-full h-[2px] pointer-events-none transition-all duration-300 transform scale-x-0 group-focus-within:scale-x-100 ${error ? 'bg-red-500' : 'bg-[#FF4170]'}`}></div>
  </div>
);

// Form for logging in (Player ID / Contact and Password)
const LoginForm = ({ onSwitch }) => {
  const [identifier, setIdentifier] = useState(''); // Player ID or Contact
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic - replace with actual Firebase Auth / API call
    console.log('Login attempt:', { identifier, password });
  };

  return (
    <div className="p-6 sm:p-8 w-full">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center tracking-wider uppercase">
        ACCESS DEPLOYMENT
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Identifier Input (Player ID or Contact) */}
        <AuthInput
          type="text"
          placeholder="Player ID or Contact Number"
          Icon={Hash}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        {/* Password */}
        <AuthInput
          type="password"
          placeholder="Secure Access Key"
          Icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r from-[#FF004D] to-[#FF4170] text-white font-extrabold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 uppercase tracking-widest text-lg border-2 border-red-800"
        >
          <LogIn className="inline w-5 h-5 mr-2" />
          Join Battle
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-400 text-center">
        New to the tournament?{' '}
        <button
          onClick={() => onSwitch('signup')}
          className="text-[#00E5FF] font-semibold hover:text-[#00B8E6] transition-colors duration-300"
        >
          Register Team
          <ArrowRight className="inline w-4 h-4 ml-1" />
        </button>
      </p>
    </div>
  );
};

// Form for signing up (Team Name, Player ID, Contact, Password)
const SignupForm = ({ onSwitch }) => {
  const [teamName, setTeamName] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic - replace with actual Firebase Auth / API call
    console.log('Registration attempt:', { teamName, playerId, contact, password });
  };

  return (
    <div className="p-6 sm:p-8 w-full">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center tracking-wider uppercase">
        TOURNAMENT REGISTRATION
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Team Name */}
        <AuthInput
          type="text"
          placeholder="Team Name"
          Icon={Users}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        {/* Player ID */}
        <AuthInput
          type="text"
          placeholder="Player ID"
          Icon={UserPlus}
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
        />
        {/* Contact Number */}
        <AuthInput
          type="tel"
          placeholder="Contact Number (Squad Leader)"
          Icon={Phone}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {/* Password */}
        <AuthInput
          type="password"
          placeholder="New Access Key"
          Icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r from-[#FF004D] to-[#FF4170] text-white font-extrabold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 uppercase tracking-widest text-lg border-2 border-red-800"
        >
          <UserPlus className="inline w-5 h-5 mr-2" />
          Authorize & Register
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-400 text-center">
        Already registered?{' '}
        <button
          onClick={() => onSwitch('login')}
          className="text-[#00E5FF] font-semibold hover:text-[#00B8E6] transition-colors duration-300"
        >
          <ArrowLeft className="inline w-4 h-4 mr-1" />
          Login
        </button>
      </p>
    </div>
  );
};

// --- Main Application Component ---
const App = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const isLogin = mode === 'login';

  const handleSwitch = (newMode) => {
    setMode(newMode);
  };

  return (
    <>
      {/* Custom CSS for the fixed background and glowing frame effect */}
      <style>
        {`
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 229, 255, 0.6), 0 0 5px rgba(255, 65, 112, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 229, 255, 0.8), 0 0 10px rgba(255, 65, 112, 0.8); }
          }
          .neon-glow-frame {
            animation: glow-pulse 5s infinite alternate;
            border: 2px solid;
            border-image: linear-gradient(to right, #00E5FF, #FF4170) 1;
            border-radius: 1rem; /* Rounded corners */
          }
        `}
      </style>

      {/* Main Container - Responsive Full Height */}
      <div 
        className="min-h-screen flex items-center justify-center p-4 antialiased relative overflow-hidden"
        style={{
          // FIXED: Now using the placeholder URL instead of the problematic import
          backgroundImage: `url(${rbImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Add fixed attachment for a better effect
        }}
      >
        {/* Dark Overlay to Enhance Readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        {/* Responsive Content Wrapper */}
        <div className="w-full max-w-lg mx-auto relative z-10 top-9">

          {/* Core Card Container */}
          <div className={`relative w-full neon-glow-frame bg-black/30 transition-all duration-500 ease-in-out rounded-xl ${
            // Adjust height based on mode
            isLogin ? 'h-[450px] sm:h-[480px]' : 'h-[630px] sm:h-[610px]'
          }`}>

            {/* Form Container for Animation */}
            <div className="relative w-full h-full overflow-hidden">
                {/* Login Form (Horizontal Slide Transition) */}
                <div
                className={`absolute top-0 w-full transition-all duration-700 ease-in-out ${
                    isLogin
                    ? 'opacity-100 translate-x-0' // Slips into view
                    : 'opacity-0 -translate-x-full pointer-events-none' // Slides out to the left
                }`}
                >
                <LoginForm onSwitch={handleSwitch} />
                </div>

                {/* Signup Form (Horizontal Slide Transition) */}
                <div
                className={`absolute top-0 w-full transition-all duration-700 ease-in-out ${
                    !isLogin
                    ? 'opacity-100 translate-x-0' // Slips into view
                    : 'opacity-0 translate-x-full pointer-events-none' // Slides out to the right
                }`}
                >
                <SignupForm onSwitch={handleSwitch} />
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;