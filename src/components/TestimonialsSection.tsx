import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  relation: string;
  wedding: string;
  rating: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Arjun',
    relation: 'Bride & Groom',
    wedding: 'Rajasthani Royal Wedding',
    rating: 5,
    review: "The team captured our wedding with such artistry and emotion. Every photograph tells our story beautifully. The cinematic quality of their work is simply outstanding.",
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: '2',
    name: 'Meera Sharma',
    relation: 'Mother of the Bride',
    wedding: 'Traditional Punjabi Wedding',
    rating: 5,
    review: "Professional, creative, and so respectful of our traditions. They made everyone comfortable and captured moments we'll treasure forever.",
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: '3',
    name: 'Vikram & Kavya',
    relation: 'Couple',
    wedding: 'Destination Wedding - Goa',
    rating: 5,
    review: "From our mehendi to reception, every ceremony was documented with such care and creativity. The quality exceeds all expectations.",
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    id: '4',
    name: 'Rajesh Gupta',
    relation: 'Father of the Groom',
    wedding: 'Bengali Traditional Wedding',
    rating: 5,
    review: "They understood our cultural nuances perfectly and delivered photographs that preserve our memories with elegance and grace.",
    image: '/placeholder.svg?height=100&width=100'
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Families Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-elegant">
            The greatest honor is earning the trust of families on their most precious day. 
            Here are heartfelt words from couples who trusted us with their eternal moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`p-8 border-0 shadow-soft hover:shadow-luxury transition-all duration-500 bg-gradient-card animate-fade-in-up group hover-lift`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>

              {/* Review Text */}
              <p className="text-foreground font-elegant leading-relaxed mb-6 text-base">
                "{testimonial.review}"
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center text-background font-luxury font-semibold">
                  {testimonial.name.split(' ')[0][0]}
                  {testimonial.name.includes('&') && testimonial.name.split('&')[1].trim()[0]}
                </div>
                <div>
                  <h4 className="font-luxury font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.relation} • {testimonial.wedding}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-luxury text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground font-elegant">Weddings Captured</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="font-luxury text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground font-elegant">Years Experience</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="font-luxury text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground font-elegant">Precious Moments</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="font-luxury text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground font-elegant">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
};