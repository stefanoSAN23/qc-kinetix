import './SuccessStoriesGrid.css';

const stories = [
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-336.jpg.webp',
    name: 'Lisa B.',
    condition: 'Knee Pain',
    quote:
      "I came to QC Kinetix because of pain in both of my knees which my orthopedic doctor told me there was nothing more they could do. They told me I just needed to limit my exercise I did not want to limit my exercise as I really loved my gym. So I decided to try QC Kinetix. After a series of shots, I can now say that I am back to doing my deep squats like I have always been.",
  },
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-337.jpg.webp',
    name: 'Tate P.',
    condition: 'Shoulder Pain',
    quote:
      "I went to an ortho doctor and decided surgery wasn't going to be my option. I took a chance and came to QC Kinetix. I had my last procedure today and I have no shoulder pain at the moment. I look forward to strengthening myself over the coming months.",
  },
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-340.jpg.webp',
    name: 'Dan N.',
    condition: 'Back Pain',
    quote:
      "I came in for hand and spine issues. I'm on my third treatment, and when I came today I was already 85 or 90% better.",
  },
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-521.jpg.webp',
    name: 'Boddy S.',
    condition: 'Knee Pain',
    quote:
      "I came to QC Kinetix about four or five months ago. At that time I could hardly walk; I couldn't walk up and down stairs, I couldn't ride a bike, and I couldn't dance. Last night I danced. I'm walking, I'm back on weight machines, and I've had about four or five treatments. I highly recommend this treatment to anybody who's having any issues.",
  },
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-771.jpg.webp',
    name: 'Donna',
    condition: 'Hip Pain',
    quote:
      "I was a patient at QC Kinetix, and I came in with hip issues. When I started, I was in a lot of pain. But now I'm walking, and I'm able to do more than I could do at the beginning. I highly recommend if you're having pain, come on in.",
  },
  {
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Rectangle-770.jpg.webp',
    name: 'Goldie',
    condition: 'Knee and Back Pain',
    quote:
      "QC Kinetix was my savior. I had issues with my L5 S1 disc, which I had injured back in 1999. I used to be a bodybuilder, lifting weights. I was a runner as well, I was always an athlete. I needed that rejuvenation, so I went into QC Kinetix and all of the representatives were extremely helpful. They helped heal my back, believe it or not.. I recommend it above surgery any day, because you don't have to wait three months to feel the difference, you really feel it pretty soon after.",
  },
];

const SuccessStoriesGrid = () => {
  return (
    <section className="success-stories-grid-section">
      <div className="success-stories-grid-container">
        {stories.map((s, idx) => (
          <article key={s.name + idx} className="success-story-card">
            <div className="success-card-media">
              <img
                src={s.image}
                alt={`${s.name} - ${s.condition}`}
                width="280"
                height="280"
                loading="lazy"
              />
              <div className="success-card-person">
                <h4 className="person-name">{s.name}</h4>
                <p className="person-role">{s.condition}</p>
              </div>
            </div>
            <div className="success-card-content">
              <div className="quote-icon" aria-hidden="true">
                <img 
                  src="https://qckinetix.com/wp-content/smush-webp/2025/03/Group-293.png.webp" 
                  alt="Quote icon" 
                  width="60" 
                  height="60"
                  loading="lazy"
                />
              </div>
              <p className="success-quote">{s.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesGrid;


