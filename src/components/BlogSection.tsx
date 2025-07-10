import React, { useState, useRef } from 'react';

interface BlogPostProps {
  title: string;
  summary: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, summary, content }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <article className="mb-8 border rounded-lg p-6 bg-white shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div
        className={`text-gray-700 mb-4 transition-all duration-500 overflow-hidden ${expanded ? 'max-h-[1000px]' : 'max-h-[4.5em]'} relative`}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'unset' : 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
        aria-expanded={expanded}
        ref={contentRef}
      >
        {expanded ? content : summary}
        {!expanded && <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent" />}
      </div>
      <button
        onClick={handleToggle}
        className="text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 transition-colors"
        aria-expanded={expanded}
        aria-controls={`blog-content-${title.replace(/\s+/g, '-')}`}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </button>
    </article>
  );
};

const blogPosts = [
  {
    title: 'Building Scalable React Applications',
    summary: 'Learn the best practices for building maintainable and scalable React applications with modern tools and techniques.',
    content:
      `Scalability in React projects comes down to smart component architecture, consistent code practices, and performance optimization. Learn how to structure your folders, split logic with custom hooks, and manage state at scale using tools like Redux Toolkit or Zustand. Understand the role of lazy loading, code splitting, and effective dependency management to keep your app fast and modular — no matter how large your team or user base grows.\n\nThis blog also covers:\n- Large-scale routing with react-router-dom\n- Component libraries and Storybook\n- Testing with Jest and RTL\n- Feature flags and CI/CD`
  },
  {
    title: 'The Future of Web Development',
    summary: 'Exploring emerging trends and technologies that are shaping the future of web development in 2024 and beyond.',
    content:
      `From AI-powered developer tools to WebAssembly, the next wave of web development is focused on speed, intelligence, and seamless user experience. Frameworks like Next.js and SvelteKit are enabling faster builds and better performance. PWAs continue to rise, while AI-assisted coding, edge computing, and serverless architectures are redefining frontend-backend boundaries.\n\nAlso includes:\n- Web3 and dApp growth\n- Real-time collaboration using CRDTs\n- Figma-to-code design systems\n- Sustainable, carbon-conscious development`
  },
  {
    title: 'Mastering TypeScript for Better Code',
    summary: 'How TypeScript can improve your development workflow and help you write more robust, maintainable code.',
    content:
      `TypeScript enforces stricter contracts in your codebase, catching bugs early and improving team collaboration. Discover how to leverage advanced types like unions, intersections, and generics to write scalable APIs and flexible components.\n\nAlso learn:\n- JS → TS gradual migration\n- Typing props/state in React\n- Utility types and declaration files\n- Compiler options and strict mode\n- Type-safe APIs with Express or NestJS`
  }
];

const BlogSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
      <div className="grid gap-8 max-w-3xl mx-auto">
        {blogPosts.map((post, idx) => (
          <BlogPost key={idx} {...post} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
