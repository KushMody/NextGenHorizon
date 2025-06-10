import React from 'react';
import img1 from './images/img1.avif';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-blue-50/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px] lg:min-h-[700px]">
          
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Professional Excellence
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Management
                <span className="block text-amber-600">Consultancy</span>
                <span className="block">Services</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Transform your business with expert strategic guidance. We provide comprehensive management consulting solutions tailored to your unique challenges and goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-full text-lg font-semibold hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NavLink>
              
              <NavLink
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-amber-600 hover:text-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300"
              >
                Our Services
              </NavLink>
            </div>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-80 sm:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="Professional management consultancy team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Success Rate</div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Growth Rate</div>
                    <div className="text-2xl font-bold text-amber-600">+150%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;