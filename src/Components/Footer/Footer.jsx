import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-lg h-12 w-12 flex items-center justify-center">
              <img src={logo} alt="Logo" />
            </div>
            <h2 className="text-xl font-bold">Cricket Dream Team </h2>
          </div>

          <p className="text-gray-400 text-sm">
            Assemble your ultimate dream cricket team and compete to win. Break
            boundaries and go beyond limits.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Fixture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Schedules
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Email Subscribe */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">
            Get latest updates and offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-white border-2 border-gray-300 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 px-4 py-1 rounded-lg font-semibold cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Dream11 Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
