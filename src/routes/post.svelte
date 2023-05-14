<script>
    import marked from 'marked';
    import { readdirSync } from 'fs';
  
    async function loadPost(slug) {
      const res = await fetch(`/static/posts/${slug}.md`);
      const text = await res.text();
      const html = marked(text);
      console.log(`Content of ${slug}:`, html); // Log the content of the post
      return { html };
    }
  
    async function load({ params }) {
      const postFiles = readdirSync('static/posts');
      for (const file of postFiles) {
        const slug = file.replace(/\.md$/, ''); // Extract the post slug from the file name
        await loadPost(slug); // Load the post content and log it to the console
      }
    }
  </script>
  
  <div>
    <!-- Your HTML template here -->
  </div>
  