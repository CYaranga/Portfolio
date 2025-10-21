import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>About This Application</h1>
      <p>This is a modern Hello World application built with the latest web technologies and best practices.</p>
      
      <div className="tech-stack">
        <h2>Technology Stack:</h2>
        <ul>
          <li><strong>React 18+</strong> - Modern JavaScript library for building user interfaces</li>
          <li><strong>TypeScript</strong> - JavaScript with static type checking and better developer experience</li>
          <li><strong>React Router v6+</strong> - Modern declarative routing with createBrowserRouter</li>
          <li><strong>Cloudflare Workers</strong> - Serverless platform for running code at the edge</li>
          <li><strong>SSR</strong> - Server-Side Rendering for better performance and SEO</li>
          <li><strong>Modern React Patterns</strong> - Functional components, hooks, and context</li>
        </ul>
      </div>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        This page demonstrates modern React patterns working seamlessly with server-side rendering and client-side routing.
      </p>
    </div>
  );
};

export default About;
