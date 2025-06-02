'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'John D.',
    role: 'Former Client',
    text: "Garry's expertise in federal sentencing was invaluable. His strategic approach and dedication led to a significant reduction in my sentence.",
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah M.',
    role: 'Client',
    text: "The team at Garry Payton Law provided exceptional support throughout my case. Their attention to detail and commitment to justice made all the difference.",
    rating: 5
  },
  {
    id: 3,
    name: 'Michael R.',
    role: 'Former Client',
    text: "Professional, knowledgeable, and truly dedicated to their clients. I couldn't have asked for better representation during such a difficult time.",
    rating: 5
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-sandBeige">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-midnight/70 p-6 rounded-lg border-2 border-warmGold/30 hover:border-warmGold transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-warmGold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sandBeige">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-warmGold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Controls */}
        <div className="flex justify-center mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                activeIndex === index ? 'bg-warmGold' : 'bg-warmGold/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 