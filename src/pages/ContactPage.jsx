import React from 'react';
import location from './images/location-pin.png';
import whatsapp from './images/whatsapp.png';
import email from './images/email.png';
import { motion } from 'framer-motion';
import RevealText from '../components/ui/RevealText';
import content from '../data/content.json';

function ContactFooter() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  const { contact } = content;

  return (
    <div id="contact" className="min-h-screen flex flex-col relative z-20 bg-white">
      <div className="flex-grow pt-16 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <div className="mb-12 flex justify-center">
            <RevealText text={contact.title} className="text-5xl font-serif font-bold tracking-tight text-gray-900" />
          </div>

          {/* Contact Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8 mb-16"
          >

            {/* Address Card */}
            <motion.div variants={item} className="group bg-white border border-gray-100 p-8 rounded-sm hover:border-[#c89434]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#c89434]/5 flex flex-col items-center text-center">
              <div className="bg-[#c89434]/10 p-4 rounded-full mb-6 group-hover:bg-[#c89434] group-hover:text-white transition-colors duration-300 text-[#c89434]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-tight font-serif">
                {contact.office.title}
              </h3>
              <a
                href={contact.office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#c89434] transition-colors duration-300 leading-relaxed hover:underline"
              >
                {contact.office.addressLines.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={item} className="group bg-white border border-gray-100 p-8 rounded-sm hover:border-[#c89434]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#c89434]/5 flex flex-col items-center text-center">
              <div className="bg-[#c89434]/10 p-4 rounded-full mb-6 group-hover:bg-[#c89434] group-hover:text-white transition-colors duration-300 text-[#c89434]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-tight font-serif">
                {contact.phone.title}
              </h3>
              <div className="flex flex-col gap-3">
                {contact.phone.numbers.map((phone, index) => (
                  <a
                    key={index}
                    href={phone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#c89434] transition-colors duration-300 hover:underline font-mono tracking-wide"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={item} className="group bg-white border border-gray-100 p-8 rounded-sm hover:border-[#c89434]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#c89434]/5 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <div className="bg-[#c89434]/10 p-4 rounded-full mb-6 group-hover:bg-[#c89434] group-hover:text-white transition-colors duration-300 text-[#c89434]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-tight font-serif">
                {contact.email.title}
              </h3>
              <a
                href={contact.email.link}
                className="text-gray-600 hover:text-[#c89434] transition-colors duration-300 hover:underline break-all sm:break-normal"
              >
                {contact.email.address}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <p className="text-sm text-gray-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} NextGen Horizons Consultancy LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactFooter;