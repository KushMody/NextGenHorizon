import React from 'react';
import location from './images/location-pin.png';
import whatsapp from './images/whatsapp.png';
import email from './images/email.png';

function ContactFooter() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-100 pt-16 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <h2 className="text-5xl text-center mb-12">Contact Details</h2>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">

            {/* Address Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:scale-105 transform">
              <div className="bg-amber-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <img src={location} alt="Location" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-amber-600">
                Our Office
              </h3>
              <a
                href="https://maps.app.goo.gl/boQGP6sGRao554oU6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-amber-600 transition-colors duration-300 leading-relaxed hover:underline"
              >
                <span className="block">206, 2nd Floor, Milestone Vibrant,</span>
                <span className="block">B/s Reliance Mall,</span>
                <span className="block">Udhana Darwaja,</span>
                <span className="block font-medium">Surat - 395002</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:scale-105 transform">
              <div className="bg-amber-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-amber-600">
                Call or WhatsApp
              </h3>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a
                  href="https://wa.me/917777991104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:underline font-medium"
                >
                  +91 7777991104
                </a>
                <a
                  href="https://wa.me/916352331441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:underline font-medium"
                >
                  +91 6352331441
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:scale-105 transform md:col-span-2 lg:col-span-1">
              <div className="bg-amber-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <img src={email} alt="Email" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-amber-600">
                Email Us
              </h3>
              <a
                href="mailto:nextgenhorizon@outlook.com"
                className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-amber-600 transition-colors duration-300 hover:underline font-medium break-all sm:break-normal"
              >
                nextgenhorizon@outlook.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            &copy; {new Date().getFullYear()} NextGen Horizons Consultancy LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactFooter;