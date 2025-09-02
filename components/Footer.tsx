
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto py-6 px-4 md:px-8 text-center text-gray-400">
        <p>&copy; {currentYear} Karri Satya Laxmi Narasimha Murthy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
