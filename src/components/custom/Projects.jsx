import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Clip Crafter AI",
    description: "AI Short Video Generator",
    src: "/clipcrafter.png",
    ctaLink: "https://clip-crafter-ai.vercel.app/",
    icon: "🎬",
    size: "4.2 MB",
    type: "Web Application",
    content: "Built an AI-powered short video generator that transforms text input into fully rendered videos by automating the entire creation pipeline, including script generation, voiceovers, captions, images, and final video composition.",
  },
  {
    id: 2,
    title: "Voyage Tour",
    description: "AI Trip Planner",
    src: "/trip-planner.png",
    ctaLink: "https://ai-trip-planner-mu.vercel.app/",
    icon: "✈",
    size: "2.8 MB",
    type: "Web Application",
    content: "Built an AI-powered Trip Planner using React, integrating the Google Places Autocomplete API and the Gemini API to generate personalized, structured JSON-based travel itineraries with hotel recommendations.",
  },
  {
    id: 3,
    title: "Gallery Vault",
    description: "Photo Editing Website",
    src: "/gallery-vault.png",
    ctaLink: "https://gallery-vault-lake.vercel.app/",
    icon: "🖼",
    size: "5.1 MB",
    type: "Web Application",
    content: "Developed a Next.js and TypeScript-based photo editing web application with AI-powered image transformations, including generative fill, background removal, image enhancement, and advanced visual effects.",
  },
  {
    id: 4,
    title: "Chef Claude",
    description: "Recipe Generator",
    src: "/chef-claude.png",
    ctaLink: "https://chef-claude-smoky.vercel.app/",
    icon: "🍳",
    size: "1.4 MB",
    type: "Web Application",
    content: "Created a recipe generator web application using React that generates recipes through the Hugging Face API based on user-provided ingredients.",
  },
  {
    id: 5,
    title: "Meme Generator",
    description: "Meme Creation Website",
    src: "/meme-generator.png",
    ctaLink: "https://meme-generator-iota-liart.vercel.app/",
    icon: "😂",
    size: "0.9 MB",
    type: "Web Application",
    content: "Developed a simple and interactive Meme Generator using React that fetches trending meme templates from a public Meme API.",
  },
  {
    id: 6,
    title: "Savoneyy",
    description: "Expense Tracker",
    src: "/savoneyy.png",
    ctaLink: "https://savoneyy.vercel.app/",
    icon: "💰",
    size: "2.3 MB",
    type: "Web Application",
    content: "Developed Savoney, a personal finance management web application that enables users to track income, expenses, and budgets through an interactive dashboard.",
  },
];

const TitleBar = ({ title, onClose }) => (
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
        <div
          key={i}
          onClick={i === 2 ? onClose : undefined}
          style={{
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openProject = (project, idx) => {
    setSelectedProject(project);
    setSelectedIndex(idx);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        padding: '30px 20px 80px 20px',
        fontFamily: "'Tahoma', 'MS Sans Serif', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Path bar */}
        <div style={{
          color: 'white',
          fontSize: '11px',
          fontFamily: "'Tahoma', Arial, sans-serif",
          marginBottom: '8px',
          textShadow: '1px 1px 1px #000',
        }}>
          C:\Portfolio\Projects\
        </div>

        {/* Main explorer window */}
        <div style={{
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          borderLeft: '2px solid #ffffff',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
        }}>
          <TitleBar title="My Projects - Windows Explorer" />

          {/* Toolbar */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
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

          {/* Address bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '3px 6px',
            borderBottom: '1px solid #808080',
            gap: '6px',
            backgroundColor: '#d4d0c8',
          }}>
            <span style={{ fontSize: '11px', fontFamily: "'Tahoma', Arial, sans-serif" }}>Address:</span>
            <div style={{
              flex: 1,
              borderTop: '2px solid #808080',
              borderLeft: '2px solid #808080',
              borderRight: '2px solid #ffffff',
              borderBottom: '2px solid #ffffff',
              backgroundColor: '#ffffff',
              padding: '2px 6px',
              fontSize: '11px',
              fontFamily: "'Tahoma', Arial, sans-serif",
            }}>
              C:\Portfolio\Projects
            </div>
            <div style={{
              backgroundColor: '#d4d0c8',
              borderTop: '2px solid #ffffff',
              borderLeft: '2px solid #ffffff',
              borderRight: '2px solid #404040',
              borderBottom: '2px solid #404040',
              padding: '2px 10px',
              fontSize: '11px',
              cursor: 'pointer',
            }}>
              Go
            </div>
          </div>

          {/* Content area with sidebar */}
          <div style={{ display: 'flex', minHeight: '400px' }}>

            {/* Left sidebar (folders panel) */}
            <div style={{
              width: '160px',
              flexShrink: 0,
              borderRight: '2px solid #808080',
              backgroundColor: '#d4d0c8',
              padding: '8px',
              fontSize: '11px',
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '6px', fontSize: '11px' }}>Folders</div>
              {[
                { label: 'Desktop', indent: 0 },
                { label: 'My Computer', indent: 0 },
                { label: 'My Portfolio', indent: 1 },
                { label: 'Projects', indent: 2, active: true },
                { label: 'About', indent: 2 },
                { label: 'Contact', indent: 2 },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    paddingLeft: `${item.indent * 12}px`,
                    padding: `2px 2px 2px ${item.indent * 12 + 2}px`,
                    cursor: 'pointer',
                    fontSize: '11px',
                    backgroundColor: item.active ? '#000080' : 'transparent',
                    color: item.active ? '#ffffff' : '#000000',
                    fontFamily: "'Tahoma', Arial, sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>{item.indent > 0 ? '📁' : '🖥'}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Right content area - file icons */}
            <div style={{
              flex: 1,
              backgroundColor: '#ffffff',
              borderTop: '2px solid #808080',
              borderLeft: '2px solid #808080',
              borderRight: '2px solid #ffffff',
              borderBottom: '2px solid #ffffff',
              margin: '4px',
              padding: '8px',
              overflowY: 'auto',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '4px',
              }}>
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    onDoubleClick={() => openProject(project, idx)}
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 4px',
                      cursor: 'pointer',
                      backgroundColor: selectedIndex === idx ? '#000080' : 'transparent',
                      border: selectedIndex === idx ? '1px dotted #000' : '1px solid transparent',
                      borderRadius: 0,
                    }}
                  >
                    {/* Thumbnail */}
                    <div style={{
                      width: '80px',
                      height: '60px',
                      border: '1px solid #808080',
                      overflow: 'hidden',
                      backgroundColor: '#d4d0c8',
                      flexShrink: 0,
                    }}>
                      <img
                        src={project.src}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      />
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontFamily: "'Tahoma', Arial, sans-serif",
                      color: selectedIndex === idx ? '#ffffff' : '#000000',
                      textAlign: 'center',
                      wordBreak: 'break-word',
                      maxWidth: '120px',
                    }}>
                      {project.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div style={{
            backgroundColor: '#d4d0c8',
            borderTop: '2px solid #808080',
            padding: '2px 6px',
            fontSize: '11px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}>
            <div style={{
              borderTop: '1px solid #808080',
              borderLeft: '1px solid #808080',
              borderRight: '1px solid #ffffff',
              borderBottom: '1px solid #ffffff',
              padding: '1px 6px',
              fontSize: '11px',
              fontFamily: "'Tahoma', Arial, sans-serif",
              flex: 1,
            }}>
              {projects.length} objects &nbsp;|&nbsp; Double-click to open
            </div>
          </div>
        </div>

        {/* Project detail popup window */}
        {selectedProject && (
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
              width: '560px',
              maxWidth: '95vw',
              maxHeight: '80vh',
            }}>
              <TitleBar title={`${selectedProject.title} - Properties`} onClose={closeProject} />

              <div style={{ padding: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0,
                  borderTop: '2px solid #808080',
                  borderLeft: '2px solid #808080',
                  borderRight: '2px solid #ffffff',
                  borderBottom: '2px solid #ffffff',
                  width: '180px',
                  height: '130px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                }}>
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {selectedProject.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#444', marginBottom: '8px' }}>
                    {selectedProject.description}
                  </div>
                  <div style={{
                    borderTop: '2px solid #808080',
                    borderLeft: '2px solid #808080',
                    borderRight: '2px solid #ffffff',
                    borderBottom: '2px solid #ffffff',
                    backgroundColor: '#ffffff',
                    padding: '6px 8px',
                    fontSize: '11px',
                    marginBottom: '10px',
                    lineHeight: '1.6',
                  }}>
                    {selectedProject.content}
                  </div>
                  <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: '2px 8px 2px 0', fontWeight: 'bold', width: '60px' }}>Type:</td>
                        <td>{selectedProject.type}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '2px 8px 2px 0', fontWeight: 'bold' }}>Size:</td>
                        <td>{selectedProject.size}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{
                borderTop: '1px solid #808080',
                padding: '8px 16px',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '6px',
                backgroundColor: '#d4d0c8',
              }}>
                <a href={selectedProject.ctaLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                    Open Website
                  </div>
                </a>
                <div
                  onClick={closeProject}
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
                    textAlign: 'center',
                  }}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
