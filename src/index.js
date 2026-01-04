export default {
  async fetch(request, env, ctx) {
    // You can modify this to serve your HTML/CSS files
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>ZeroPlay</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
        }
      </style>
    </head>
    <body>
      <h1>Hello from ZeroPlay!</h1>
      <p>Cloudflare Worker is running successfully.</p>
    </body>
    </html>
    `;
    
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }
};
