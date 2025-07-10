import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Error", 
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // Send to backend instead of EmailJS
      const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: result.error || 'Failed to send message. Please try again or contact me directly.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact me directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 animate-glow">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a
                    href="mailto:jashgohil1804@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2563eb', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    jashgohil1804@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group transition-all duration-300 hover:transform hover:scale-105" style={{ animationDelay: '0.2s' }}>
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <a
                    href="tel:+919309012041"
                    style={{ color: '#2563eb', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    +91 93090 12041
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group transition-all duration-300 hover:transform hover:scale-105" style={{ animationDelay: '0.4s' }}>
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <a
                    href="https://www.google.com/maps?q=Nashik,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#2563eb', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    Nashik, Maharashtra, India
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="animate-fade-in-right bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
