import React from "react";
import DOMPurify from 'dompurify';
import './App.css';

const App = () => {

  const websiteDefacement = `<div><img src='https://c.tenor.com/K2VcFLiyC5YAAAAC/greetings-f-society.gif' /><img src='https://c.tenor.com/e73LQkmBbcUAAAAS/mr-robot-happy.gif' /></div>`

  const data = `
  <h3>Welcome to this page</h3>
  <p>Hope you keep coding</p>
  <img src=??? onerror="alert('XSS')" />
  `;
  //1-  Open Redirection-location.replace('https://medium.com/me/stories/drafts')
  //2- Website Defacement -  <img src=??? onerror="alert(document.body.background='https://c.tenor.com/K2VcFLiyC5YAAAAC/greetings-f-society.gif')" />

  //we need to sanetize it before we trust the above html - eg use library - dompurify

  return (
    <div className="App">
    <h2>Understanding dangerouslySetInnerHTML</h2>
    {/* Below code will give error - Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`. */}
    {/* <div style={{padding:"10px", fontSize:'17px', textAlign:'center'}} innerHTML={data}></div> */}
    <div
    style={{padding:"10px", fontSize:'17px', textAlign:'center'}}
      dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data)}}
    ></div>
    {/* dompurify knows that onerror event on an image is a common attack method so it remove it automatically - you can check in elements in dev tools*/}
    </div>
  );
}

export default App;