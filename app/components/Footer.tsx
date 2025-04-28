"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Elima</span>
              <Image
                src="elimacorner-logo.svg"
                alt="Elima Corner Logo"
                width={30}
                height={30}
              />
              <span className="text-2xl font-bold">Corner</span>
            </div>
            <p className="text-green-100 max-w-xs">
              Serving the Northern Bali region, Elima Corner brings local food
              and vehicle rental solutions. Our team ensures you get an easy and
              exciting journey in Bali, providing you with affordable but
              unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rentals"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Vehicle Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Food Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-300 mt-0.5" />
                <span className="text-green-100">
                  Jl. Singaraja, Bali, Indonesia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-300 mt-0.5" />
                <span className="text-green-100">+62 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-300 mt-0.5" />
                <span className="text-green-100">info@elimacorner.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-green-100">
              Subscribe to our newsletter for updates on new services and
              special offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
              />
              <button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-amber-500 hover:bg-amber-600"
                )}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-green-100 text-sm">
            &copy; {new Date().getFullYear()} Elima Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
