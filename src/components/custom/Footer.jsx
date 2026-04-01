import React from "react";

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#008080',
      paddingBottom: '30px',
      fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
    }}>
      {/* BSOD-style "copyright" panel */}
      <div style={{
        margin: '0 20px 12px 20px',
        backgroundColor: '#000080',
        color: '#ffffff',
        padding: '12px 16px',
        fontFamily: "'Tahoma', Arial, sans-serif",
        fontSize: '11px',
        lineHeight: '1.8',
      }}>
        <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px' }}>
          Priya Kumari Portfolio — Version 2000.1
        </div>
        <div>Copyright (C) 2024 Priya Kumari. All rights reserved.</div>
        <div style={{ color: '#c0c0c0', marginTop: '4px' }}>
          Built with React, Tailwind CSS, and JavaScript
        </div>
        <div style={{ marginTop: '8px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/priyacha123"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffff00', textDecoration: 'underline', fontSize: '11px' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/priyakumari21-frontend-developer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffff00', textDecoration: 'underline', fontSize: '11px' }}
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/textrovert_39"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffff00', textDecoration: 'underline', fontSize: '11px' }}
          >
            Twitter/X
          </a>
          <a
            href="mailto:priya0903kumari@gmail.com"
            style={{ color: '#ffff00', textDecoration: 'underline', fontSize: '11px' }}
          >
            E-mail
          </a>
        </div>
      </div>

      {/* Win2K-style bottom status strip */}
      <div style={{
        margin: '0 20px',
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #ffffff',
        borderLeft: '2px solid #ffffff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        padding: '3px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '11px',
      }}>
        <div style={{
          borderTop: '1px solid #808080',
          borderLeft: '1px solid #808080',
          borderRight: '1px solid #ffffff',
          borderBottom: '1px solid #ffffff',
          padding: '1px 8px',
          fontSize: '11px',
          flex: 1,
        }}>
          Made by Priya Kumari &nbsp;|&nbsp; priya0903kumari@gmail.com
        </div>
        <div style={{
          borderTop: '1px solid #808080',
          borderLeft: '1px solid #808080',
          borderRight: '1px solid #ffffff',
          borderBottom: '1px solid #ffffff',
          padding: '1px 8px',
          fontSize: '11px',
        }}>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </div>
        <div style={{
          borderTop: '1px solid #808080',
          borderLeft: '1px solid #808080',
          borderRight: '1px solid #ffffff',
          borderBottom: '1px solid #ffffff',
          padding: '1px 8px',
          fontSize: '11px',
        }}>
          India
        </div>
      </div>
    </div>
  );
};

export default Footer;
