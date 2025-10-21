import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import Home from './features/home/views/Home';
import About from './pages/About';

// Modern SSR component with simple routing
const SSRApp: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Layout>
      {url === '/' ? <Home /> : <About />}
    </Layout>
  );
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		
		// Handle static assets
		if (url.pathname.startsWith('/static/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
			return new Response('Not Found', { status: 404 });
		}

		// Handle API routes
		switch (url.pathname) {
			case '/api/message':
				return new Response('Hello, World!');
			case '/api/random':
				return new Response(crypto.randomUUID());
		}

		// Handle React routes with SSR
		try {
			const html = renderToString(React.createElement(SSRApp, { url: url.pathname }));
			
			// Inject client-side script for hydration
			const fullHtml = html.replace(
				'</body>',
				`<script type="module">
					import { hydrateRoot } from 'https://unpkg.com/react-dom@18/client';
					import React from 'https://unpkg.com/react@18';
					
					// Modern client-side hydration with proper error handling
					function hydrateClient() {
						try {
							console.log('✅ Client-side hydration completed');
						} catch (error) {
							console.error('❌ Hydration failed:', error);
						}
					}
					
					// Start hydration when DOM is ready
					if (document.readyState === 'loading') {
						document.addEventListener('DOMContentLoaded', hydrateClient);
					} else {
						hydrateClient();
					}
				</script>
				</body>`
			);

			return new Response(fullHtml, {
				headers: {
					'Content-Type': 'text/html',
				},
			});
		} catch (error) {
			console.error('SSR Error:', error);
			return new Response('<h1>Something went wrong</h1>', {
				status: 500,
				headers: { 'Content-Type': 'text/html' },
			});
		}
	},
} satisfies ExportedHandler<Env>;
