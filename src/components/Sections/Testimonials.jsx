import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button } from '../Common';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);
  const testimonials = [
    {
      quote: "I came to QC Kinetics because of pain in both of my knees which my orthopedic doctor told me there was nothing more they could do. They told me I just needed to limit my exercise. I did not want to limit my exercise as I really loved my gym. So I decided to try QC Kinetix. After a series of shots, I can now say that I am back to doing my deep squats like I have always been.",
      name: "Lisa B.",
      condition: "Knee Pain",
      image: "https://qckinetix.com/wp-content/smush-webp/2025/03/Lisa.jpg.webp"
    },
    {
      quote: "I went to an ortho doctor and decided surgery wasn't going to be my option. I took a chance and came to QC Kinetix. I had my last procedure today and I have no shoulder pain at the moment. I look forward to strengthening myself over the coming months.",
      name: "Tate P.",
      condition: "Shoulder Pain",
      image: "https://qckinetix.com/wp-content/smush-webp/2025/03/Tate.jpg.webp"
    },
    {
      quote: "I came in for hand and spine issues. I'm on my third treatment, and when I came today I was already 85 or 90% better.",
      name: "Dan N.",
      condition: "Back Pain",
      image: "https://qckinetix.com/wp-content/smush-webp/2025/03/Dan.jpg.webp"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header fade-in-down">
          <div className="testimonials-header-top animated fadeInDown" ref={headerRef}>
            <h2>Success Stories</h2>
            <img 
              src="https://qckinetix.com/wp-content/uploads/2025/03/Group-331.svg" 
              alt="Decorative divider line" 
              width="176" 
              height="7"
              loading="lazy"
            />
          </div>
        </div>

        <div className="testimonials-carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-content-wrapper">
                    <div className="testimonial-left">
                      <div className="testimonial-image">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name}, ${testimonial.condition} patient`}
                          width="276"
                          height="276"
                          loading="lazy"
                        />
                      </div>
                      <div className="testimonial-footer">
                        <cite className="testimonial-cite">
                          <span className="testimonial-name">{testimonial.name}</span>
                          <span className="testimonial-title">{testimonial.condition}</span>
                        </cite>
                      </div>
                    </div>
                    <div className="testimonial-right">
                      <div className="testimonial-quote-icon">
                        <img 
                          src="https://qckinetix.com/wp-content/smush-webp/2025/03/Group-293.png.webp" 
                          alt="Quote icon" 
                          width="60" 
                          height="60"
                          loading="lazy"
                        />
                      </div>
                      <div className="testimonial-text">
                        {testimonial.quote}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="testimonials-button animated fadeInUp" ref={buttonRef}>
          <Button 
            text="View All Success Stories"
            href="/success-stories/"
            variant="primary"
            size="medium"
            className="qc-btn"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

