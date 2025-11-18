import { useEffect, useRef } from 'react';
import './RegenerativeProcess.css';

const RegenerativeProcess = () => {
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const titleLargeRef = useRef(null);
  const introRef = useRef(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }
    if (titleLargeRef.current) {
      observer.observe(titleLargeRef.current);
    }
    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (titleLargeRef.current) observer.unobserve(titleLargeRef.current);
      if (introRef.current) observer.unobserve(introRef.current);
    };
  }, []);

  const processSteps = [
    {
      number: '1',
      title: 'Plasma Therapy',
      description: 'Most of our patients start the same day as their initial consultation with a plasma treatment to begin the healing process.'
    },
    {
      number: '2',
      title: 'A2M Treatment',
      description: 'A followup occurs after the initial appointment for Alpha 2 Macro-globulin, a protease inhibitor that helps slow arthritic degradation of a joint.'
    },
    {
      number: '3',
      title: 'BMAC Treatment',
      description: 'After visit 2, the patients undergo a "BMAC" treatment. Within BMAC are stem cells, PRP, and A2M. Damaged tissue can undergo significant healing.'
    },
    {
      number: '4',
      title: 'Platelet Rich Plasma',
      description: 'The 4th visit of the plan is PRP. Filled with growth factors and healing properties, the healing within the joint is accelerated.'
    }
  ];

  return (
    <section className="regenerative-process-section">
      <div className="regenerative-process-container">
        <div className="regenerative-process-header">
          <div className="regenerative-process-title-container">
            <div className="regenerative-process-header-top">
              <h2 className="animated fadeInDown" ref={titleRef}>What is the</h2>
              <img 
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp" 
                alt="Decorative divider" 
                width="177" 
                height="8"
                loading="lazy"
                className="regenerative-process-divider animated fadeInDown"
                ref={dividerRef}
              />
            </div>
            <h2 className="regenerative-process-title-large animated fadeInDown" ref={titleLargeRef}>
              Regenerative Therapy<br /> Process Like at QC<br /> Kinetix?
            </h2>
          </div>
          <p className="regenerative-process-intro animated fadeInDown" ref={introRef}>
            Regenerative medicine is powered by natural biologics derived from the individual patient's blood components. Orthobiologic therapies isolate specific biological materials, concentrate them, and then reintroduce them at the injured site to stimulate and support your body's own restorative processes.
          </p>
        </div>

        <div className="hex-row">
          {processSteps.map((step, index) => (
            <div key={index} className="hex-container">
              <div className="circle">{step.number}</div>
              <svg 
                className="hex-shape" 
                xmlns="http://www.w3.org/2000/svg" 
                width="445.891" 
                height="386.155" 
                viewBox="0 0 445.891 386.155"
              >
                <g className="hex-border">
                  <path 
                    id={`Path_227_${index}`}
                    d="M110.9,0,0,192.077,110.9,384.155H332.686l110.9-192.078L332.686,0Z"
                    transform="translate(1.155 1)" 
                    fill="none" 
                    stroke="#139a00" 
                    strokeWidth="2" 
                  />
                </g>
                <foreignObject x="0" y="10" width="447" height="387">
                  <div className="hex-content">
                    <h4>{step.title}</h4>
                    <hr />
                    <p>{step.description}</p>
                  </div>
                </foreignObject>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegenerativeProcess;


