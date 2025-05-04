
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Clients.css'; // Custom CSS for marquee animations

const platforms = [
  { name: 'Shopify', img: '/assests/images/shopsy.png' },
  { name: 'WooCommerce', img: '/assests/images/amzon.png' },
  { name: 'Vinculum', img: '/assests/images/urbn.png' },
  { name: 'Ezyslips', img: '/assests/images/openai.png' },
  { name: 'Clickpost', img: '/assests/images/tata.png' },
  { name: 'Magento', img: '/assests/images/urbn.png' },
  { name: 'Opencart', img: '/assests/images/wipro.png' },
  { name: 'Unicommerce', img: '/assests/images/flipkart.png' },
  { name: 'Amazon', img: '/assests/images/amzon.png' },
  { name: 'Etsy', img: '/assests/images/shopsy.png' },
  { name: 'BigCommerce', img: '/assests/images/flipkart.png' },
  { name: 'Wix', img: '/assests/images/amzon.png' },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
        
        {/* Left Section */}
        <div className="md:w-2/5 h-full p-6" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-white mb-6">
            Trusted <span className="text-blue-200 typing-effect">Integrations</span> with Leading E-commerce Platforms
          </h2>
          
          {/* Auto-playing video */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <video
              src="/assests/images/6.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 h-full mt-12 p-6 overflow-hidden bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Our Trusted E-commerce Integrations
          </h3>

          {/* Marquee Row 1 */}
          <div className="marquee-container mb-4">
            <div className="marquee-content scroll-left">
              {[...platforms, ...platforms].map((platform, idx) => (
                <div key={`row1-${idx}`} className="marquee-item">
                  <img
                    src={platform.img}
                    alt={platform.name}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 */}
          <div className="marquee-container">
            <div className="marquee-content scroll-right">
              {[...platforms, ...platforms].map((platform, idx) => (
                <div key={`row2-${idx}`} className="marquee-item">
                  <img
                    src={platform.img}
                    alt={platform.name}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
