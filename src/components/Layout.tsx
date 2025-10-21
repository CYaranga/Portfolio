import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR Portfolio</title>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          nav {
            background: #2c3e50;
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
            margin: 0;
            padding: 0;
          }
          nav a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background-color 0.3s ease;
            font-weight: 500;
          }
          nav a:hover {
            background-color: #34495e;
          }
          nav a.active {
            background-color: #3498db;
          }
          main {
            padding: 2rem 0;
            min-height: calc(100vh - 200px);
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-size: 2.5rem;
            font-weight: 700;
          }
          h2 {
            color: #34495e;
            margin-bottom: 1rem;
            font-size: 2rem;
            font-weight: 600;
          }
          p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
            line-height: 1.7;
          }
          .feature-card {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
            border-left: 4px solid #3498db;
          }
          .tech-stack {
            background: #e8f5e8;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 2rem;
            border-left: 4px solid #27ae60;
          }
          .tech-stack ul {
            margin: 0;
            padding-left: 1.5rem;
          }
          .tech-stack li {
            margin-bottom: 0.5rem;
          }
          .tech-stack strong {
            color: #27ae60;
          }
        `}</style>
      </head>
      <body>
        <nav>
          <div className="container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
