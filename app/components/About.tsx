"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-lg z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-lg z-0" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Elima Corner Location"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  About Elima Corner
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-amber-500 rounded-full mb-6" />
              </div>

              <p className="text-slate-700">
                Nestled in the heart of Singaraja, Bali, Elima Corner was
                established with a vision to provide visitors with convenient
                access to both transportation and authentic local cuisine. Our
                name "Elima" draws inspiration from the Balinese culture,
                representing our deep connection to the island's rich heritage.
              </p>

              <p className="text-slate-700">
                What started as a small vehicle rental service has now grown
                into a beloved establishment offering a variety of services to
                both locals and tourists. Our canteen serves delicious Balinese
                dishes made with locally-sourced ingredients, giving you a true
                taste of the island's culinary traditions.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-700 text-lg mb-2">
                    Our Mission
                  </h3>
                  <p className="text-slate-700 text-sm">
                    To provide exceptional service that enhances the Bali
                    experience for every visitor.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-amber-700 text-lg mb-2">
                    Our Vision
                  </h3>
                  <p className="text-slate-700 text-sm">
                    To become the premier service provider in Northern Bali,
                    known for quality and authenticity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
