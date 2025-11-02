"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h5 className="text-2xl font-bold text-yellow-400 mb-3">
            Abdur Rouf
          </h5>
          <p className="mb-4">
            Feel free to reach out if you want to collaborate with us.
          </p>
          <h6 className="text-sm font-semibold uppercase mb-3">Follow Us</h6>
          <div className="flex space-x-4 text-yellow-400 text-xl">
            <Link href="#"><FaFacebook className="hover:text-white transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-white transition" /></Link>
            <Link href="#"><FaTwitter className="hover:text-white transition" /></Link>
            <Link href="#"><FaLinkedin className="hover:text-white transition" /></Link>
          </div>
        </div>

        {/* Service Links */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Service</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Store Directory
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Top Hotels
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Knowledge Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Contact Info</h6>
          <p className="mb-2">
            <span className="font-semibold">Dhaka:</span> rouf2025s@gmail.com
          </p>
          <p>
            <span className="font-semibold">Chattogram:</span>{" "}
            raufabdurr009@gmail.com
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Developed by{" "}
        <span className="text-yellow-400 font-semibold">Abdur Rouf</span>. ThemeMascot Agency.
      </div>
    </footer>
  );
};

export default Footer;
