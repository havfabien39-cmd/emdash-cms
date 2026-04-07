export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Default to index.html when visiting root
    if (path === "/" || path === "") {
      path = "/index.html";
    }

    try {
      // Serve static assets (HTML, CSS, JS, JSON, images)
      const asset = await env.ASSETS.fetch(new Request(path, request));
      if (asset.ok) {
        return asset;
      }
      return new Response("File not found", { status: 404 });
    } catch (err) {
      return new Response("Error serving file: " + err.message, { status: 500 });
    }
  }
};
