
import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "My sofa looked new again! Couldn't believe the transformation. These guys know their craft.",
    author: "Agnes",
    location: "Lang'ata",
    rating: 5,
    service: "Sofa Deep Clean"
  },
  {
    id: 2,
    text: "Booked on WhatsApp, came the same day. Professional, fast, and my carpet is spotless!",
    author: "Brian",
    location: "Ruaka",
    rating: 5,
    service: "Carpet Shampoo"
  },
  {
    id: 3,
    text: "Office cleaning that actually makes a difference. My team noticed immediately. Asante sana!",
    author: "Catherine",
    location: "Westlands",
    rating: 5,
    service: "Office Cleaning"
  },
  {
    id: 4,
    text: "Fair pricing, excellent results. No hidden costs, just quality service. Highly recommend!",
    author: "David",
    location: "Karen",
    rating: 5,
    service: "Window Cleaning"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            What Our <span className="text-emerald-600">Rafiki</span> Say
          </h2>
          <p className="text-xl text-gray-600">Real people, real results, real satisfaction</p>
        </div>

        {/* Testimonial display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  {/* Speech bubble card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl mx-auto max-w-3xl">
                    {/* Quote icon */}
                    <Quote className="absolute top-6 left-6 h-8 w-8 text-emerald-200" />
                    
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author info */}
                    <div className="text-center">
                      <p className="font-bold text-gray-900 text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">
                        {testimonial.location} • {testimonial.service}
                      </p>
                    </div>

                    {/* Speech bubble tail */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Ready to join our happy customers?
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};
