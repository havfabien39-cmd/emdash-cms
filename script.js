async function loadBlog() {
  const postsContainer = document.createElement('div');
  postsContainer.className = 'posts';

  // Example: load 2 posts
  const postFiles = ['posts/post1.json', 'posts/post2.json'];

  for (const file of postFiles) {
    const response = await fetch(file);
    const post = await response.json();

    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <h2>${post.title}</h2>
      <small>${post.date} by ${post.author}</small>
      <div>${post.content}</div>
    `;
    postsContainer.appendChild(card);
  }

  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <div class="widget">
      <h3>Categories</h3>
      <p>Intro, CMS, Updates</p>
    </div>
    <div class="widget">
      <h3>Recent Posts</h3>
      <p>First Blog Post</p>
      <p>Second Blog Post</p>
    </div>
  `;

  const blogLayout = document.createElement('div');
  blogLayout.className = 'blog-container';
  blogLayout.appendChild(postsContainer);
  blogLayout.appendChild(sidebar);

  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(blogLayout);
}
