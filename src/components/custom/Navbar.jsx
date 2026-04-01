import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #ffffff',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '0 2px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
        fontSize: '11px',
      }}
    >
      {/* Start Button */}
      <a
        href="#home"
        style={{
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
          padding: '1px 8px 1px 4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '11px',
          textDecoration: 'none',
          color: '#000',
          height: '22px',
        }}
      >
        {/* Windows flag icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="7" height="7" fill="#ff0000" />
          <rect x="9" y="0" width="7" height="7" fill="#00aa00" />
          <rect x="0" y="9" width="7" height="7" fill="#0000cc" />
          <rect x="9" y="9" width="7" height="7" fill="#ffcc00" />
        </svg>
        Start
      </a>

      {/* Separator */}
      <div style={{
        width: '2px',
        height: '22px',
        borderLeft: '1px solid #808080',
        borderRight: '1px solid #ffffff',
        margin: '0 2px',
      }} />

      {/* Nav Items as open windows in taskbar */}
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          style={{
            backgroundColor: '#d4d0c8',
            borderTop: '2px solid #ffffff',
            borderLeft: '2px solid #ffffff',
            borderRight: '2px solid #404040',
            borderBottom: '2px solid #404040',
            padding: '1px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            textDecoration: 'none',
            color: '#000',
            height: '22px',
            minWidth: '80px',
          }}
        >
          {/* Mini window icon */}
          <div style={{
            width: '10px',
            height: '10px',
            background: 'linear-gradient(to right, #000082, #1084d0)',
            flexShrink: 0,
          }} />
          {item}
        </a>
      ))}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* System Tray */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        borderTop: '1px solid #808080',
        borderLeft: '1px solid #808080',
        borderRight: '1px solid #ffffff',
        borderBottom: '1px solid #ffffff',
        padding: '2px 6px',
        height: '22px',
        backgroundColor: '#d4d0c8',
      }}>
        {/* Volume icon */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4H4L7 2V10L4 8H2V4Z" fill="#000000" />
          <path d="M8.5 3.5C9.5 4.2 9.5 7.8 8.5 8.5" stroke="#000000" strokeWidth="1" />
          <path d="M9.5 2.5C11 3.5 11 8.5 9.5 9.5" stroke="#000000" strokeWidth="1" />
        </svg>
        {/* Network icon */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0" y="7" width="6" height="5" fill="#000080" />
          <rect x="8" y="2" width="8" height="5" fill="#000080" opacity="0.4" />
          <rect x="0" y="7" width="6" height="5" fill="none" stroke="#000" strokeWidth="0.5"/>
          <rect x="8" y="2" width="8" height="5" fill="none" stroke="#000" strokeWidth="0.5"/>
        </svg>
        <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif" }}>
          {formatTime(time)}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
