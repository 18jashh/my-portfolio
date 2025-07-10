
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building maintainable and scalable React applications with modern tools and techniques.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "JavaScript", "Best Practices"],
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development in 2024 and beyond.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Web Development", "Trends", "Future"],
      slug: "future-of-web-development"
    },
    {
      id: 3,
      title: "Mastering TypeScript for Better Code",
      excerpt: "How TypeScript can improve your development workflow and help you write more robust, maintainable code.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      slug: "mastering-typescript"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
          Latest Blog Posts
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-scale-in hover:border-primary/50" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-all duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary/10 transition-all duration-300"
                  onClick={() => {
                    // In a real app, this would navigate to the blog post
                    console.log(`Navigate to blog post: ${post.slug}`);
                  }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
