import { BsGithub } from "react-icons/bs";

const WinBtn = ({ children, onClick, style = {} }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: '#d4d0c8',
      borderTop: '2px solid #ffffff',
      borderLeft: '2px solid #ffffff',
      borderRight: '2px solid #404040',
      borderBottom: '2px solid #404040',
      padding: '3px 12px',
      fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      fontSize: '11px',
      cursor: 'pointer',
      color: '#000',
      minWidth: '75px',
      ...style,
    }}
  >
    {children}
  </button>
);

const TitleBar = ({ title, icon }) => (
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
      {icon && <span style={{ fontSize: '12px' }}>{icon}</span>}
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

const DesktopIcon = ({ label, imgSrc, href }) => (
  <a
    href={href || '#'}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      padding: '6px',
      cursor: 'pointer',
      color: 'white',
      textDecoration: 'none',
      width: '72px',
    }}
  >
    <div style={{
      width: '40px',
      height: '40px',
      border: '1px solid rgba(255,255,255,0.3)',
      backgroundColor: 'rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {imgSrc ? (
        <img src={imgSrc} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #1084d0, #000082)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          📁
        </div>
      )}
    </div>
    <span style={{
      fontFamily: "'Tahoma', Arial, sans-serif",
      fontSize: '11px',
      color: 'white',
      textShadow: '1px 1px 1px #000000',
      textAlign: 'center',
      wordBreak: 'break-word',
      padding: '1px 2px',
    }}>
      {label}
    </span>
  </a>
);

const Header = () => {
  return (
    <main
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        padding: '20px 20px 60px 20px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
        position: 'relative',
      }}
    >
      {/* Desktop Icons - top left */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}>
        <DesktopIcon label="My Portfolio" href="#about" />
        <DesktopIcon label="Projects" href="#projects" />
        <DesktopIcon label="Contact" href="#contact" />
        <a
          href="https://github.com/priyacha123"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '6px',
            cursor: 'pointer',
            color: 'white',
            textDecoration: 'none',
            width: '72px',
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '1px solid rgba(255,255,255,0.3)',
            backgroundColor: 'rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <BsGithub size={24} color="white" />
          </div>
          <span style={{
            fontFamily: "'Tahoma', Arial, sans-serif",
            fontSize: '11px',
            color: 'white',
            textShadow: '1px 1px 1px #000000',
            textAlign: 'center',
          }}>
            GitHub
          </span>
        </a>
      </div>

      {/* Main Portfolio Window */}
      <div style={{
        marginLeft: '100px',
        marginTop: '20px',
        maxWidth: '700px',
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #ffffff',
        borderLeft: '2px solid #ffffff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
      }}>
        <TitleBar title="Priya Kumari - Portfolio.exe" icon="🖥" />

        {/* Menu bar */}
        <div style={{
          backgroundColor: '#d4d0c8',
          borderBottom: '1px solid #808080',
          padding: '2px 4px',
          display: 'flex',
          gap: '0px',
          fontSize: '11px',
        }}>
          {['File', 'Edit', 'View', 'Help'].map(item => (
            <div key={item} style={{
              padding: '2px 6px',
              cursor: 'pointer',
              fontFamily: "'Tahoma', Arial, sans-serif",
              fontSize: '11px',
            }}
              onMouseEnter={e => e.target.style.backgroundColor = '#000080'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
              onMouseEnterCapture={e => e.target.style.color = 'white'}
            >
              <span style={{ textDecoration: 'underline' }}>{item[0]}</span>{item.slice(1)}
            </div>
          ))}
        </div>

        {/* Window content */}
        <div style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>

          {/* Left: profile photo in inset box */}
          <div style={{
            flexShrink: 0,
            borderTop: '2px solid #808080',
            borderLeft: '2px solid #808080',
            borderRight: '2px solid #ffffff',
            borderBottom: '2px solid #ffffff',
            width: '130px',
            height: '160px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}>
            <img
              src="/about2.png"
              alt="Priya Kumari"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>

          {/* Right: text content */}
          <div style={{ flex: 1 }}>
            {/* Name display */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{
                fontSize: '22px',
                fontWeight: 'bold',
                fontFamily: "'Tahoma', Arial, sans-serif",
                color: '#000080',
                letterSpacing: '1px',
              }}>
                PRIYA KUMARI
              </div>
              <div style={{
                fontSize: '12px',
                color: '#444',
                fontFamily: "'Tahoma', Arial, sans-serif",
                marginTop: '2px',
              }}>
                Frontend Developer &amp; Python Enthusiast
              </div>
            </div>

            {/* Info in inset box */}
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
            }}>
              <p style={{ margin: '0 0 6px 0' }}>
                &quot;I build things at my own pace,<br />
                and it feels good when they finally come together.&quot;
              </p>
              <p style={{ margin: 0, color: '#666' }}>
                3rd Year Engineering Student | India
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <WinBtn>
                <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About Me</a>
              </WinBtn>
              <WinBtn>
                <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
              </WinBtn>
              <WinBtn>
                <a href="https://github.com/priyacha123" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>GitHub</a>
              </WinBtn>
            </div>
          </div>
        </div>

        {/* Status bar at bottom of window */}
        <div style={{
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #808080',
          padding: '2px 6px',
          fontSize: '11px',
          display: 'flex',
          gap: '8px',
        }}>
          <div style={{
            borderTop: '1px solid #808080',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
            borderBottom: '1px solid #ffffff',
            padding: '1px 6px',
            fontSize: '11px',
            fontFamily: "'Tahoma', Arial, sans-serif",
          }}>
            Ready
          </div>
          <div style={{
            borderTop: '1px solid #808080',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
            borderBottom: '1px solid #ffffff',
            padding: '1px 6px',
            fontSize: '11px',
            fontFamily: "'Tahoma', Arial, sans-serif",
          }}>
            1 object selected
          </div>
        </div>
      </div>

      {/* Marquee below the main window */}
      <div style={{
        marginLeft: '100px',
        marginTop: '12px',
        maxWidth: '700px',
        backgroundColor: '#000080',
        color: '#ffff00',
        fontFamily: "'Tahoma', Arial, sans-serif",
        fontSize: '11px',
        padding: '3px 8px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}>
        <marquee behavior="scroll" direction="left" scrollamount="3">
          &nbsp;&nbsp;&nbsp; Welcome to Priya&apos;s Portfolio! &nbsp;|&nbsp; Frontend Developer &nbsp;|&nbsp; React &bull; JavaScript &bull; Python &bull; Tailwind CSS &bull; Next.js &nbsp;|&nbsp; Available for opportunities! &nbsp;&nbsp;&nbsp;
        </marquee>
      </div>

      {/* "My Computer" style second window - skills */}
      <div style={{
        marginLeft: '100px',
        marginTop: '16px',
        width: '340px',
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #ffffff',
        borderLeft: '2px solid #ffffff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
      }}>
        <TitleBar title="Skills.txt - Notepad" icon="📄" />
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '2px solid #808080',
          borderLeft: '2px solid #808080',
          borderRight: '2px solid #ffffff',
          borderBottom: '2px solid #ffffff',
          margin: '6px',
          padding: '8px',
          fontFamily: 'Courier New, monospace',
          fontSize: '11px',
          minHeight: '80px',
        }}>
          <div style={{ color: '#000' }}>
            {'> React.js'}<br />
            {'> JavaScript (ES6+)'}<br />
            {'> Python'}<br />
            {'> Tailwind CSS'}<br />
            {'> Next.js'}<br />
            {'> HTML / CSS'}
          </div>
        </div>
      </div>

    </main>
  );
};

export default Header;
