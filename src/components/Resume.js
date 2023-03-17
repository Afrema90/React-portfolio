// import React from 'react';

const Resume = () => {
    const downloadResume = () => {
      const link = document.createElement('a');
      link.href = '/resume (0035) 2.pdf';
      link.download = 'my_resume.pdf';
      link.click();
    };
  
    return (
      <div>
        <h1>My Resume</h1>
        <button onClick={downloadResume}>Download</button>
      </div>
    );
  };
  
  export default Resume;