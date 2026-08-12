import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import EmploymentHistory from './components/EmploymentHistory';
import Qualifications from './components/Qualifications';

function Home() {
  return (
    <>
      <title>Travis Wylie - Home</title>
      <div className="page">
        <h1 className="mb-4">Hello, world!</h1>
        <p>My name is Travis Wylie, I am a software developer currently seeking a new opportunity.</p>

        <br />
        <p>With 7 years of professional software development experience on top of having completed freelance work and mentoring, I have contributed to the development of many kinds of different applications while still finding time to continue with my own projects.</p>
        <p>In my previous employment, I have been responsible for aiding the training of new staff members both locally and remote, while creating additional applications to help colleagues with timekeeping. As a result, time logs were more accurate and less time was taken to keep these logs as the software integrated with company systems by API.</p>
        <p>I have also had experience working remotely using time management skills and communication to assist collegues with various tasks while working on projects in varying timezones.</p>
        <p>I am currently seeking an employment opportunity that would allow me to utilize my current experience and continue to grow as a developer while allowing me to follow my passion of creating new and exciting software.</p>

        <br />
        <br />
        <p><i className="text-muted">A self hosted AI model running through copilot was $\dots$</i></p>
        <br />
        <br />

        <h2 className="mb-3">CV:</h2>
        <p>You can view my paper CV through the following link:</p>
        
        <br />
        <div className="text-center m-4">
          <Button 
            variant="primary" 
            href="https://drive.google.com/file/d/1tDHiBeaDQXg8N4GZfSC6oSyP4ae8egjP/view?usp=sharing"
            download
            className="download-cv-btn"
          >
            <i className="bi bi-download"></i> CV as PDF
          </Button>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <title>Travis Wylie - Experience</title>
      <div className="page">
        <h1 className="mb-4">Experience</h1>
        <p className="mb-5">Professional journey and skills.</p>
        <EmploymentHistory />
        <Qualifications />
      </div>
    </>
  );
}

function Projects() {
  return (
    <div className="page">
      <h1 className="mb-4">Projects</h1>
      <p>My recent work and projects.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1 className="mb-4">Contact Me</h1>
      <p>Get in touch with me.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container d-flex">
          <nav className="sidebar p-3 border-end vh-100" style={{ minWidth: '200px' }}>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link text-dark">Home</Link></li>
              <li className="nav-item"><Link to="/experience" className="nav-link text-dark">Experience</Link></li>
              <li className="nav-item"><Link to="/projects" className="nav-link text-dark">Projects</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link text-dark">Contact</Link></li>
            </ul>
          </nav>

          <main className="content-area p-5 flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
