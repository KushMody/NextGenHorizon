import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 fixed bottom-0 left-0 w-full border-t border-gray-300 pt-6 text-center">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} NH Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;