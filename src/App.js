import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <img src={`${process.env.PUBLIC_URL}/oxtalogobest.png`} alt="OxTTA Logo" className="logo" />
        <h1>The Oxford Technical Talent<br />Accelerator.</h1>
      </div>
      <h2>Oxford needs more great technology companies.</h2>
      <div className="paragraphs">
        <p>We believe there are undiscovered founders throughout Oxford that never consider starting a company as a career choice because they are not surrounded by a peer group as equally as ambitious and talented as they are.</p>
        <p>We want to bring together the hackers, builders, and scientists that need such a peer group and support them with an ambitious and earnest community on their journey to founding a company.</p>
        <p>We are interested in speaking to talented technologists at any stage of their founding journey from freshers who put off that problem set to work on their side project to PhDs who are ready to start right now!</p>
        <p>If this idea resonates with you and you would like to be part of such a community, apply to be part of one of our pilot events here - <em>google docs form</em>.</p>
        <p>Event details - <em>coming soon</em></p>
      </div>
      <h3>FAQs</h3>
      <div className="faq">
        <ul>
          <li><strong>Can OxTTA invest in my startup? </strong>
            <p>Currently no. But we may be able to connect you with people who can help you with this depending on what stage you are at. Come along to our event if you want to discuss it and include details of your company/idea/situation in the application form.</p>
          </li>
          <li><strong>What does the OxTTA want to do? </strong>
            <p>We want to build small groups of highly technical and ambitious students who are driven to acquire the skills and knowledge to build innovative companies. These initial events are to gauge interest and find out what the builders of Oxford want and need!</p>
          </li>
          <li><strong>Who is backing OxTTA? </strong>
            <p>Currently, the OxTTA is supported by the VC firm Entrepreneur First’s Polaris Fellowship and Vassili Phillipov (Co-Founder of MEL Science). We would be excited to speak to any other potential backers.</p>
          </li>
        </ul>
      </div>
      <div className="footer">
        <hr />
        contact - info@oxtta.com
      </div>
    </div>
  );
}

export default App;




