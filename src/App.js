import React from "react";
import DOMPurify from 'dompurify';
import './App.css';

const App = () => {

  const data = `
  <h3>Welcome to this page</h3>
  <p>May the code be with you</p>
  <img src=??? onerror="alert('XSS')" />
  `;

  return (
    <div className="App">
      <h2>Understanding dangerouslySetInnerHTML</h2>
      <div
        style={{ padding: "10px", fontSize: '17px', textAlign: 'center' }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}
      ></div>
    </div>
  );
}

export default App;
