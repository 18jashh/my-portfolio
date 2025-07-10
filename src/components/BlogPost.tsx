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

export default BlogPost;
