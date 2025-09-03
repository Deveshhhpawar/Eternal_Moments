import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            Begin Your Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-elegant">
            Ready to capture your eternal moments? Let's discuss your dream wedding 
            and create cinematic memories that will last forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-soft bg-gradient-card animate-fade-in-up">
            <h3 className="font-luxury text-2xl font-bold text-foreground mb-6">
              Share Your Vision
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Bride's Name
                  </label>
                  <Input placeholder="Enter bride's name" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Groom's Name
                  </label>
                  <Input placeholder="Enter groom's name" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input placeholder="+91 98765 43210" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input placeholder="your@email.com" type="email" className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Wedding Date
                  </label>
                  <Input type="date" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                    Wedding Venue
                  </label>
                  <Input placeholder="Venue name/city" className="h-12" />
                </div>
              </div>

              <div>
                <label className="text-sm font-elegant font-medium text-foreground mb-2 block">
                  Tell us about your dream wedding
                </label>
                <Textarea 
                  placeholder="Share your vision, traditions you want to include, specific moments you want captured..."
                  className="min-h-32"
                />
              </div>

              <Button variant="default" size="lg" className="w-full btn-luxury">
                Send Your Inquiry
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <Card className="p-8 border-0 shadow-soft bg-gradient-card">
              <h3 className="font-luxury text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@eternalmoments.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground">Studio</h4>
                    <p className="text-muted-foreground">Mumbai • Delhi • Bangalore</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* WhatsApp Quick Contact */}
            <Card className="p-6 border-0 shadow-soft bg-gradient-luxury text-background">
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8" />
                <div className="flex-1">
                  <h4 className="font-luxury text-lg font-semibold mb-1">
                    Quick WhatsApp Chat
                  </h4>
                  <p className="text-sm opacity-90">
                    Get instant replies to your queries
                  </p>
                </div>
                <Button variant="outline" size="sm" className="bg-background/10 backdrop-blur-sm text-background border-background/20 hover:bg-background/20">
                  Chat Now
                </Button>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 border-0 shadow-soft bg-gradient-card">
              <h4 className="font-luxury text-lg font-semibold text-foreground mb-4">
                Follow Our Journey
              </h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors">
                  <Instagram size={20} />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors">
                  <Youtube size={20} />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};