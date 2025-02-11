// src/components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black-200 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* <img src="logo/newkawanlogo_cropped_og.png" alt="Logo" className="w-12 h-12 mr-2" /> */}
            <h2 className="text-2xl font-semibold">Kawan Creative</h2>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Kawan Creative. All rights reserved.</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 justify-center">
              <Link href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f text-xl"></i>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/kawan.creative.intl/" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
                <span className="sr-only">Instagram</span>
              </Link>
              {/* <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
                <span className="sr-only">LinkedIn</span>
              </Link> */}
            </div>

            {/* Additional Links */}
            <div className="mt-4 md:mt-0">
              <Link href="/about" className="text-gray-300 hover:text-white mr-6">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
