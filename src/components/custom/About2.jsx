import React, { useState } from "react";
import { BsLinkedin, BsTwitter, BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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
    cursor: 'default',
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

const TabButton = ({ label, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: active ? '#d4d0c8' : '#b8b4ac',
      borderTop: '2px solid ' + (active ? '#ffffff' : '#b0acaa'),
      borderLeft: '2px solid ' + (active ? '#ffffff' : '#b0acaa'),
      borderRight: '2px solid ' + (active ? '#404040' : '#666'),
      borderBottom: active ? 'none' : '2px solid #404040',
      padding: '3px 14px',
      fontSize: '11px',
      fontFamily: "'Tahoma', Arial, sans-serif",
      cursor: 'pointer',
      marginRight: '2px',
      position: 'relative',
      top: active ? '2px' : '0px',
      zIndex: active ? 2 : 1,
    }}
  >
    {label}
  </div>
);

const About2 = () => {
  const [activeTab, setActiveTab] = useState('biography');

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        padding: '30px 20px 80px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      <div style={{ width: '100%', maxWidth: '860px' }}>

        {/* Section heading in style of a folder path */}
        <div style={{
          color: 'white',
          fontSize: '11px',
          fontFamily: "'Tahoma', Arial, sans-serif",
          marginBottom: '8px',
          textShadow: '1px 1px 1px #000',
        }}>
          C:\Portfolio\About\
        </div>

        {/* Main window */}
        <div style={{
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
        }}>
          <TitleBar title="About Priya Kumari - Properties" />

          {/* Menu bar */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '2px 4px',
            display: 'flex',
            gap: '0px',
            fontSize: '11px',
          }}>
            {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(item => (
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

          {/* Tab navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            padding: '8px 8px 0 8px',
            borderBottom: '2px solid #808080',
          }}>
            {[
              { id: 'biography', label: 'Biography' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' },
            ].map(tab => (
              <TabButton
                key={tab.id}
                label={tab.label}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: '16px', minHeight: '320px' }}>

            {activeTab === 'biography' && (
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

                {/* Photo */}
                <div style={{
                  flexShrink: 0,
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  width: '160px',
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                }}>
                  <img
                    src="/3.jpg"
                    alt="Priya Kumari"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                {/* Bio text */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>
                      Priya Kumari
                    </div>
                    <div style={{ fontSize: '11px', color: '#444' }}>
                      Frontend Developer &amp; Python Enthusiast
                    </div>
                  </div>

                  {/* Inset description box */}
                  <div style={{
                    borderTop: '2px solid #808080',
                    borderLeft: '2px solid #808080',
                    borderRight: '2px solid #ffffff',
                    borderBottom: '2px solid #ffffff',
                    backgroundColor: '#ffffff',
                    padding: '8px',
                    fontSize: '11px',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    marginBottom: '12px',
                    lineHeight: '1.6',
                  }}>
                    <p style={{ margin: '0 0 8px 0' }}>
                      Currently a 3rd-year engineering student, I bridge the gap between
                      design and code. I don&apos;t just build websites — I craft digital
                      experiences that feel seamless and intuitive.
                    </p>
                    <p style={{ margin: 0 }}>
                      My philosophy: <strong>clean code, purposeful motion, and
                      user-centric design.</strong> Whether it&apos;s React or Python, I focus on
                      scalability and performance.
                    </p>
                  </div>

                  {/* Properties-style info */}
                  <div style={{
                    borderTop: '2px solid #808080',
                    borderLeft: '2px solid #808080',
                    borderRight: '2px solid #ffffff',
                    borderBottom: '2px solid #ffffff',
                    backgroundColor: '#d4d0c8',
                    padding: '4px 8px',
                    fontSize: '11px',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '2px 8px 2px 0', color: '#444', fontWeight: 'bold', width: '100px' }}>Location:</td>
                          <td style={{ padding: '2px 0' }}>India</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '2px 8px 2px 0', color: '#444', fontWeight: 'bold' }}>Status:</td>
                          <td style={{ padding: '2px 0', color: '#008000' }}>Available for opportunities</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '2px 8px 2px 0', color: '#444', fontWeight: 'bold' }}>Year:</td>
                          <td style={{ padding: '2px 0' }}>3rd Year Engineering</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <div style={{ fontSize: '11px', marginBottom: '10px', fontWeight: 'bold' }}>
                  Installed Technologies:
                </div>
                <div style={{
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                }}>
                  {[
                    { name: 'React.js', level: 90 },
                    { name: 'JavaScript (ES6+)', level: 88 },
                    { name: 'Python', level: 80 },
                    { name: 'Tailwind CSS', level: 85 },
                    { name: 'Next.js', level: 75 },
                    { name: 'HTML / CSS', level: 95 },
                  ].map(skill => (
                    <div key={skill.name} style={{ marginBottom: '10px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                        marginBottom: '3px',
                      }}>
                        <span>{skill.name}</span>
                        <span style={{ color: '#666' }}>{skill.level}%</span>
                      </div>
                      {/* Progress bar in Win2K style */}
                      <div style={{
                        height: '14px',
                        borderTop: '2px solid #808080',
                        borderLeft: '2px solid #808080',
                        borderRight: '2px solid #ffffff',
                        borderBottom: '2px solid #ffffff',
                        backgroundColor: '#d4d0c8',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          backgroundColor: '#000080',
                          display: 'flex',
                          gap: '1px',
                          alignItems: 'center',
                        }}>
                          {Array.from({ length: Math.floor(skill.level / 8) }).map((_, i) => (
                            <div key={i} style={{
                              width: '6px',
                              height: '10px',
                              backgroundColor: '#5050d0',
                              flexShrink: 0,
                            }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>
                  Contact Information:
                </div>
                <div style={{
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  backgroundColor: '#ffffff',
                  padding: '12px',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: '4px 12px 4px 0', fontWeight: 'bold', width: '80px' }}>E-mail:</td>
                        <td style={{ padding: '4px 0' }}>
                          <a href="mailto:priya0903kumari@gmail.com" style={{ color: '#0000cc', textDecoration: 'underline' }}>
                            priya0903kumari@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '4px 12px 4px 0', fontWeight: 'bold' }}>LinkedIn:</td>
                        <td style={{ padding: '4px 0' }}>
                          <a href="https://www.linkedin.com/in/priyakumari21-frontend-developer/" target="_blank" rel="noreferrer" style={{ color: '#0000cc', textDecoration: 'underline' }}>
                            priyakumari21-frontend-developer
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '4px 12px 4px 0', fontWeight: 'bold' }}>Twitter/X:</td>
                        <td style={{ padding: '4px 0' }}>
                          <a href="https://x.com/textrovert_39" target="_blank" rel="noreferrer" style={{ color: '#0000cc', textDecoration: 'underline' }}>
                            @textrovert_39
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                  <a href="mailto:priya0903kumari@gmail.com" style={{ textDecoration: 'none' }}>
                    <div className="win-btn" style={{
                      backgroundColor: '#d4d0c8',
                      borderTop: '2px solid #ffffff',
                      borderLeft: '2px solid #ffffff',
                      borderRight: '2px solid #404040',
                      borderBottom: '2px solid #404040',
                      padding: '3px 12px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#000',
                    }}>
                      <MdEmail size={12} /> Send E-mail
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/priyakumari21-frontend-developer/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{
                      backgroundColor: '#d4d0c8',
                      borderTop: '2px solid #ffffff',
                      borderLeft: '2px solid #ffffff',
                      borderRight: '2px solid #404040',
                      borderBottom: '2px solid #404040',
                      padding: '3px 12px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#000',
                    }}>
                      <BsLinkedin size={12} /> LinkedIn
                    </div>
                  </a>
                  <a href="https://x.com/textrovert_39" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{
                      backgroundColor: '#d4d0c8',
                      borderTop: '2px solid #ffffff',
                      borderLeft: '2px solid #ffffff',
                      borderRight: '2px solid #404040',
                      borderBottom: '2px solid #404040',
                      padding: '3px 12px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#000',
                    }}>
                      <BsTwitter size={12} /> Twitter
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Dialog-style OK/Cancel buttons */}
          <div style={{
            borderTop: '1px solid #808080',
            padding: '8px 16px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '6px',
            backgroundColor: '#d4d0c8',
          }}>
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <div style={{
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
                textAlign: 'center',
              }}>
                OK
              </div>
            </a>
            <div style={{
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
              textAlign: 'center',
            }}>
              Cancel
            </div>
            <div style={{
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
              textAlign: 'center',
            }}>
              Apply
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
