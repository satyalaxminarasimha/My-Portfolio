import React, { useState, useEffect, useRef } from 'react';

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const recipientEmail = "k.sathyam2003@gmail.com";
  const subject = `Contact from Portfolio: ${name || 'No Name Provided'}`;
  const body = `${message}\n\nFrom: ${name} (${email || 'No Email Provided'})`;
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 md:py-28 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-8 mb-10 text-lg">
          I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
        </p>

        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 transition"
                    placeholder="John Doe"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 transition"
                    placeholder="john.doe@example.com"
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 transition"
                    placeholder="Let's connect!"
                    required
                ></textarea>
            </div>
            <div className="text-center pt-4">
                <a
                    href={mailtoLink}
                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Send Message
                </a>
            </div>
        </form>
        <p className="text-xs text-gray-500 mt-4">Note: This will open your default email client.</p>

        <div className="flex justify-center space-x-6 pt-10 mt-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
            <LinkedInIcon className="h-9 w-9" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
            <GitHubIcon className="h-9 w-9" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
