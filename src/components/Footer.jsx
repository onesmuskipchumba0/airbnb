import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options']
    },
    {
      title: 'Community',
      links: ['Airbnb.org: disaster relief', 'Combating discrimination', 'Invite friends']
    },
    {
      title: 'Hosting',
      links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum']
    },
    {
      title: 'Airbnb',
      links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards']
    }
  ];

  return (
    <footer className="bg-base-200 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:underline text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm">© 2024 Airbnb, Inc.</span>
              <span className="text-sm">·</span>
              <a href="#" className="text-sm hover:underline">Terms</a>
              <span className="text-sm">·</span>
              <a href="#" className="text-sm hover:underline">Privacy</a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
