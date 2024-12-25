import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
            <footer className="bg-gray-900 text-gray-200 py-10">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  
                  {/* About Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-sm">
                      Welcome to <span className="font-bold">Dine Divine</span>, where we serve the finest dishes crafted with fresh ingredients. Join us for an unforgettable dining experience.
                    </p>
                  </div>
        
                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
                      <li><a href="#menu" className="hover:text-yellow-500">Menu</a></li>
                      <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                      <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                  </div>
        
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                      <li><span className="font-medium">Address:</span> 123 Food Street, Dhaka City</li>
                      <li>
                        <span className="font-medium">Phone:</span>{' '}
                        <a href="tel:+1234567890" className="hover:text-yellow-500">+1 234 567 890</a>
                      </li>
                      <li>
                        <span className="font-medium">Email:</span>{' '}
                        <a href="mailto:info@restaurant.com" className="hover:text-yellow-500">info@restaurant.com</a>
                      </li>
                    </ul>
                  </div>
        
                  {/* Opening Hours */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                    <ul className="space-y-2">
                      <li>Mon-Fri: 10:00 AM - 10:00 PM</li>
                      <li>Sat-Sun: 12:00 PM - 11:00 PM</li>
                    </ul>
                  </div>
        
                </div>
        
                {/* Social Media and Copyright */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                  <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-yellow-500">
                      <FaFacebook/> {/* Facebook */}
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                      <FaTwitter/> {/* Twitter */}
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                      <FaInstagram></FaInstagram> {/* Instagram */}
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                      <FaYoutube/> {/* YouTube */}
                    </a>
                  </div>
                  <p className="text-sm">
                    &copy; {new Date().getFullYear()} <span className="font-bold">Dine Divine</span>. All Rights Reserved.
                  </p>
                </div>
              </div>
            </footer>
    );
};

export default Footer;