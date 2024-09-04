import React from 'react';
import './Blog.css';  // Link to the CSS file
import BlogHeroImage from '../../assets/bloghero.png';  // Import the blog hero image

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero-section">
        <div className="blog-hero-text">
          <h1>Explore Our Blog</h1>
          <p>Discover the latest insights, tips, and stories on love, relationships, and dating.</p>
        </div>
        <img src={BlogHeroImage} alt="Blog" className="blog-hero-image" />
      </div>

      {/* Blog Content Section */}
      <section className="blog-content">
        <div className="blog-post">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour</p>
          <p>
            Ma rencontre avec mon âme sœur sur Internet. Je ne l'ai jamais cru aux rencontres amoureuses sur Internet,
            jusqu'au jour où j'ai moi-même rencontré mon époux sur la toile. Dans ce témoignage, je vais vous raconter
            notre histoire, comment nous avons réussi à construire une relation à distance.
          </p>
          <button className="cta-button">Continue Reading</button>
        </div>
        {/* Repeat the blog-post div for multiple posts */}
        <div className="blog-post">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour</p>
          <p>
            Ma rencontre avec mon âme sœur sur Internet. Je ne l'ai jamais cru aux rencontres amoureuses sur Internet,
            jusqu'au jour où j'ai moi-même rencontré mon époux sur la toile. Dans ce témoignage, je vais vous raconter
            notre histoire, comment nous avons réussi à construire une relation à distance.
          </p>
          <button className="cta-button">Continue Reading</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;