import React, { useState } from "react";

const TitleBar = ({ title }) => (
  <div style={{
    background: 'linear-gradient(to right, #000082, #1084d0)',
    color: 'white',
    fontFamily: "'Tahoma', Arial, sans-serif",
    fontWeight: 'bold',
    fontSize: '11px',
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    flexShrink: 0,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '14px', height: '14px', background: 'linear-gradient(135deg, #6090d0, #000082)', border: '1px solid rgba(255,255,255,0.4)' }} />
      <span>{title}</span>
    </div>
    <div style={{ display: 'flex', gap: '2px' }}>
      {['_', '□', '✕'].map((sym, i) => (
        <div key={i} style={{
          backgroundColor: '#d4d0c8',
          borderTop: '1px solid #ffffff',
          borderLeft: '1px solid #ffffff',
          borderRight: '1px solid #404040',
          borderBottom: '1px solid #404040',
          width: '16px',
          height: '14px',
          fontSize: '9px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#000',
          fontWeight: 'bold',
        }}>
          {sym}
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        padding: '30px 20px 80px 20px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>

        {/* Path */}
        <div style={{
          color: 'white',
          fontSize: '11px',
          fontFamily: "'Tahoma', Arial, sans-serif",
          marginBottom: '8px',
          textShadow: '1px 1px 1px #000',
        }}>
          C:\Portfolio\Contact\
        </div>

        {/* Success dialog */}
        {submitted && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              backgroundColor: '#d4d0c8',
              borderTop: '2px solid #ffffff',
              borderLeft: '2px solid #ffffff',
              borderRight: '2px solid #404040',
              borderBottom: '2px solid #404040',
              width: '360px',
            }}>
              <TitleBar title="Message Sent - Notepad" />
              <div style={{ padding: '20px 16px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                {/* Info icon */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#0000cc',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}>
                  i
                </div>
                <div style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif", lineHeight: '1.6' }}>
                  <strong>Message sent successfully!</strong><br /><br />
                  Thank you for reaching out. Priya will get back to you as soon as possible.<br /><br />
                  Click OK to continue.
                </div>
              </div>
              <div style={{
                borderTop: '1px solid #808080',
                padding: '8px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    backgroundColor: '#d4d0c8',
                    borderTop: '2px solid #ffffff',
                    borderLeft: '2px solid #ffffff',
                    borderRight: '2px solid #404040',
                    borderBottom: '2px solid #404040',
                    padding: '3px 24px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    color: '#000',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    minWidth: '75px',
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main contact window */}
        <div style={{
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
        }}>
          <TitleBar title="New Message - Outlook Express" />

          {/* Menu bar */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '2px 4px',
            display: 'flex',
            gap: '0px',
            fontSize: '11px',
          }}>
            {['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Message', 'Help'].map(item => (
              <div key={item} style={{
                padding: '2px 6px',
                cursor: 'pointer',
                fontFamily: "'Tahoma', Arial, sans-serif",
                fontSize: '11px',
              }}>
                <span style={{ textDecoration: 'underline' }}>{item[0]}</span>{item.slice(1)}
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '3px 4px',
            display: 'flex',
            gap: '2px',
          }}>
            {[
              { label: 'Send', icon: '📤' },
              { label: 'Cut', icon: '✂' },
              { label: 'Copy', icon: '📋' },
              { label: 'Paste', icon: '📌' },
            ].map(btn => (
              <div key={btn.label} style={{
                backgroundColor: '#d4d0c8',
                borderTop: '2px solid #ffffff',
                borderLeft: '2px solid #ffffff',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                padding: '2px 8px',
                fontSize: '11px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: "'Tahoma', Arial, sans-serif",
              }}>
                <span style={{ fontSize: '12px' }}>{btn.icon}</span>
                {btn.label}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Header info rows */}
            <div style={{ padding: '0 8px' }}>
              {/* To: */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #808080',
                gap: '8px',
                padding: '4px 0',
              }}>
                <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif", width: '50px', textAlign: 'right', color: '#666' }}>
                  From:
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    borderTop: '2px solid #808080',
                    borderLeft: '2px solid #808080',
                    borderRight: '2px solid #ffffff',
                    borderBottom: '2px solid #ffffff',
                    padding: '2px 6px',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    fontSize: '11px',
                    outline: 'none',
                    color: '#000',
                  }}
                />
              </div>

              {/* Email: */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #808080',
                gap: '8px',
                padding: '4px 0',
              }}>
                <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif", width: '50px', textAlign: 'right', color: '#666' }}>
                  E-mail:
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    borderTop: '2px solid #808080',
                    borderLeft: '2px solid #808080',
                    borderRight: '2px solid #ffffff',
                    borderBottom: '2px solid #ffffff',
                    padding: '2px 6px',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    fontSize: '11px',
                    outline: 'none',
                    color: '#000',
                  }}
                />
              </div>

              {/* To: fixed */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #808080',
                gap: '8px',
                padding: '4px 0',
              }}>
                <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif", width: '50px', textAlign: 'right', color: '#666' }}>
                  To:
                </span>
                <div style={{
                  flex: 1,
                  backgroundColor: '#d4d0c8',
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  padding: '2px 6px',
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  fontSize: '11px',
                  color: '#000080',
                }}>
                  priya0903kumari@gmail.com
                </div>
              </div>

              {/* Subject: */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '2px solid #808080',
                gap: '8px',
                padding: '4px 0',
              }}>
                <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif", width: '50px', textAlign: 'right', color: '#666' }}>
                  Subject:
                </span>
                <div style={{
                  flex: 1,
                  backgroundColor: '#d4d0c8',
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  padding: '2px 6px',
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  fontSize: '11px',
                  color: '#000',
                }}>
                  Hello from Portfolio Visitor
                </div>
              </div>
            </div>

            {/* Message body */}
            <div style={{ padding: '0 8px 8px 8px' }}>
              <textarea
                name="message"
                placeholder="Type your message here..."
                required
                rows={8}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  padding: '6px',
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  fontSize: '11px',
                  outline: 'none',
                  color: '#000',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  marginTop: '6px',
                }}
              />
            </div>

            {/* Footer buttons */}
            <div style={{
              borderTop: '1px solid #808080',
              padding: '8px 16px',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '6px',
              backgroundColor: '#d4d0c8',
            }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#d4d0c8',
                  borderTop: '2px solid #ffffff',
                  borderLeft: '2px solid #ffffff',
                  borderRight: '2px solid #404040',
                  borderBottom: '2px solid #404040',
                  padding: '3px 16px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  color: '#000',
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  minWidth: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>📤</span> Send
              </button>
              <button
                type="button"
                onClick={() => setForm({ name: '', email: '', message: '' })}
                style={{
                  backgroundColor: '#d4d0c8',
                  borderTop: '2px solid #ffffff',
                  borderLeft: '2px solid #ffffff',
                  borderRight: '2px solid #404040',
                  borderBottom: '2px solid #404040',
                  padding: '3px 16px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  color: '#000',
                  fontFamily: "'Tahoma', Arial, sans-serif",
                  minWidth: '75px',
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* "Got questions" helper box */}
        <div style={{
          marginTop: '12px',
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
          padding: '8px 12px',
          fontSize: '11px',
          fontFamily: "'Tahoma', Arial, sans-serif",
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#0000cc',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            flexShrink: 0,
          }}>
            ?
          </div>
          <div>
            <strong>Got suggestions or just want to say hello?</strong><br />
            <span style={{ color: '#444' }}>Fill in the form above and click Send — Priya reads every message!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
