import React from 'react';
import '../styles/splash-light.css';

export default function SplashLight() {
  // বাংলা অক্ষর
  const banglaLetters = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'এ', 'ঐ', 'ও', 'ঔ', 'ক', 'খ', 'গ', 'ঘ', 'চ', 'ছ', 'জ', 'ঝ', 'ট', 'ঠ'];
  // বাংলা সংখ্যা
  const banglaNumbers = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০'];
  // ইংরেজি অক্ষর
  const englishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  // ইংরেজি সংখ্যা
  const englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  // সব অক্ষর একসাথে
  const allCharacters = [...banglaLetters, ...banglaNumbers, ...englishLetters, ...englishNumbers];

  // র‍্যান্ডম পজিশনে অক্ষর তৈরি করার জন্য
  const generateFloatingChars = () => {
    const chars = [];
    for (let i = 0; i < 40; i++) {
      const char = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      const left = Math.random() * 100;
      const animationDuration = 15 + Math.random() * 10;
      const animationDelay = -(Math.random() * animationDuration); // নেগেটিভ ডিলে দিলে ইন্সট্যান্ট শুরু হবে
      const fontSize = 20 + Math.random() * 30;
      
      // বিভিন্ন ধরনের অ্যানিমেশন
      const animationType = ['float-up', 'float-down', 'float-left', 'float-right'][Math.floor(Math.random() * 4)];
      
      chars.push(
        <div
          key={i}
          className={`floating-char ${animationType}`}
          style={{
            left: `${left}%`,
            fontSize: `${fontSize}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          }}
        >
          {char}
        </div>
      );
    }
    return chars;
  };

  return (
    <div className="splash-screen light-mode">
      {/* ব্যাকগ্রাউন্ড অ্যানিমেটেড অক্ষর */}
      <div className="floating-chars-container">
        {generateFloatingChars()}
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="splash-content">
        {/* লোগো */}
        <div className="logo-container">
          <div className="logo-outer-circle">
            <div className="logo-inner">
              <img 
                src="figma:asset/8f0a7fe7b6f91f20dc61d8e0bbf2df2d066e3bc5.png" 
                alt="School Logo" 
                className="logo-image"
              />
            </div>
          </div>
        </div>

        {/* স্কুলের নাম */}
        <h1 className="school-name">মিনা রাজু হাই স্কুল</h1>
        
        {/* ট্যাগলাইন */}
        <p className="tagline">শিক্ষার মাধ্যমে ভবিষ্যৎ গড়ুন</p>

        {/* লোডিং ডট */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* ফুটার */}
      <div className="footer">
        <p className="from-text">from</p>
        <p className="company-name">&lt;index Inc&gt;</p>
      </div>
    </div>
  );
}