// pages/ContactUs.js
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="container mx-auto px-4 my-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 text-center  text-primaryColor">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-6">Our Information</h2>

                    <div className="space-y-4">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="w-6 h-6 text-primaryColor mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium">Address</h3>
                                <p className="text-gray-600">123 Restaurant Street<br />Food City, FC 12345</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaPhone className="w-6 h-6 text-primaryColor mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p className="text-gray-600">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaEnvelope className="w-6 h-6 text-primaryColor mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-gray-600">contact@restaurant.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <FaClock className="w-6 h-6 text-primaryColor mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium">Opening Hours</h3>
                                <p className="text-gray-600">
                                    Mon-Fri: 9:00 AM - 10:00 PM<br />
                                    Sat-Sun: 10:00 AM - 11:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryColor focus:ring-primaryColor"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryColor focus:ring-primaryColor"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryColor focus:ring-primaryColor"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryColor focus:ring-primaryColor"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primaryColor text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Find Us on Map</h2>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        title="Restaurant Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7821881301985!2d89.7003162149813!3d24.450178484240554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdc803f109ec2f%3A0x7bca3aebc9534c76!2sSirajganj%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1684302350435!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;