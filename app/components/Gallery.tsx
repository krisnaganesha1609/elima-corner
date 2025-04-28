"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = {
  vehicles: [
    { src: "/placeholder.svg?height=400&width=600", alt: "Car Rental" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Scooter Rental" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Bike Rental" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Premium Car" },
  ],
  food: [
    { src: "/placeholder.svg?height=400&width=600", alt: "Balinese Food" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Local Cuisine" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Fresh Drinks" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Desserts" },
  ],
  location: [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Elima Corner Exterior",
    },
    { src: "/placeholder.svg?height=400&width=600", alt: "Canteen Area" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Rental Office" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Singaraja Beach" },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("vehicles");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? galleryItems[activeTab as keyof typeof galleryItems].length - 1
        : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems[activeTab as keyof typeof galleryItems].length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Take a visual tour of our services, food offerings, and beautiful
            location in Singaraja, Bali.
          </p>
        </motion.div>

        <Tabs
          defaultValue="vehicles"
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value);
            setCurrentIndex(0);
          }}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="vehicles" className="text-sm">
                Vehicles
              </TabsTrigger>
              <TabsTrigger value="food" className="text-sm">
                Food & Drinks
              </TabsTrigger>
              <TabsTrigger value="location" className="text-sm">
                Our Location
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Image Carousel */}
          <div className="mb-8">
            <div className="relative max-w-3xl mx-auto">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={
                    galleryItems[activeTab as keyof typeof galleryItems][
                      currentIndex
                    ].src || "/placeholder.svg"
                  }
                  alt={
                    galleryItems[activeTab as keyof typeof galleryItems][
                      currentIndex
                    ].alt
                  }
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-medium">
                    {
                      galleryItems[activeTab as keyof typeof galleryItems][
                        currentIndex
                      ].alt
                    }
                  </p>
                </div>
              </motion.div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {galleryItems[activeTab as keyof typeof galleryItems].map(
                (_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentIndex === index ? "bg-green-600" : "bg-slate-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                )
              )}
            </div>
          </div>

          {/* Thumbnail Grid */}
          {Object.entries(galleryItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="relative h-32 w-full">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
                        className={`object-cover transition-transform duration-500 hover:scale-110 ${
                          currentIndex === index ? "ring-2 ring-green-500" : ""
                        }`}
                      />
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-medium text-slate-700 text-sm">
                        {item.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
