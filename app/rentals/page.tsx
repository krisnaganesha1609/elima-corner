"use client";

import { motion } from "framer-motion";
import { LandingNav } from "../components/LandingNav";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Car, Bike, Umbrella, Star, Check } from "lucide-react";
import BookingForm from "./BookingForm";
import Footer from "../components/Footer";

const vehicles = {
  cars: [
    {
      id: "car-1",
      name: "Toyota Avanza",
      description:
        "Comfortable 7-seater MPV, perfect for family trips around Bali.",
      price: 500000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["7 Seats", "Air Conditioning", "Automatic", "Fuel Efficient"],
      rating: 4.8,
      category: "Economy",
    },
    {
      id: "car-2",
      name: "Honda Brio",
      description:
        "Compact and fuel-efficient car, ideal for couples or solo travelers.",
      price: 350000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["5 Seats", "Air Conditioning", "Automatic", "Compact"],
      rating: 4.7,
      category: "Economy",
    },
    {
      id: "car-3",
      name: "Toyota Fortuner",
      description:
        "Spacious SUV with excellent performance for exploring Bali's varied terrain.",
      price: 1200000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["7 Seats", "Air Conditioning", "Automatic", "4x4 Available"],
      rating: 4.9,
      category: "Premium",
    },
  ],
  bikes: [
    {
      id: "bike-1",
      name: "Honda Vario 125",
      description:
        "Popular scooter with good power and comfort for daily rides.",
      price: 100000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["125cc", "Automatic", "Fuel Efficient", "Storage Space"],
      rating: 4.8,
      category: "Scooter",
    },
    {
      id: "bike-2",
      name: "Yamaha NMAX",
      description:
        "Premium scooter with excellent stability and comfort for longer rides.",
      price: 150000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["155cc", "Automatic", "ABS", "Digital Dashboard"],
      rating: 4.9,
      category: "Scooter",
    },
    {
      id: "bike-3",
      name: "Kawasaki KLX 150",
      description:
        "Off-road motorcycle perfect for exploring Bali's hidden trails.",
      price: 200000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["150cc", "Manual", "Off-road", "Lightweight"],
      rating: 4.7,
      category: "Motorcycle",
    },
  ],
  equipment: [
    {
      id: "equip-1",
      name: "Beach Umbrella Set",
      description: "Complete set with umbrella, mat, and beach chairs.",
      price: 50000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Large Umbrella", "2 Chairs", "Beach Mat", "Carry Bag"],
      rating: 4.6,
      category: "Beach",
    },
    {
      id: "equip-2",
      name: "Snorkeling Gear",
      description:
        "Quality snorkeling equipment to explore Bali's underwater beauty.",
      price: 75000,
      priceUnit: "day",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Mask", "Snorkel", "Fins", "Carry Bag"],
      rating: 4.7,
      category: "Water Sports",
    },
  ],
};

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travelima Rental Services
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore Bali with comfort and convenience. Choose from our wide
              range of vehicles and equipment.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => {
                document
                  .getElementById("booking-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cars" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white shadow-md">
                <TabsTrigger value="cars" className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  <span>Cars</span>
                </TabsTrigger>
                <TabsTrigger value="bikes" className="flex items-center gap-2">
                  <Bike className="h-4 w-4" />
                  <span>Scooters & Bikes</span>
                </TabsTrigger>
                <TabsTrigger
                  value="equipment"
                  className="flex items-center gap-2"
                >
                  <Umbrella className="h-4 w-4" />
                  <span>Beach Equipment</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(vehicles).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((vehicle) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-3 right-3 bg-amber-500">
                            {vehicle.category}
                          </Badge>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{vehicle.name}</CardTitle>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="ml-1 text-sm">
                                {vehicle.rating}
                              </span>
                            </div>
                          </div>
                          <CardDescription>
                            {vehicle.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-2">
                            {vehicle.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <Check className="h-4 w-4 text-green-600 mr-1" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <div>
                            <p className="text-2xl font-bold text-green-700">
                              Rp {vehicle.price.toLocaleString()}
                            </p>
                            <p className="text-xs text-slate-500">
                              per {vehicle.priceUnit}
                            </p>
                          </div>
                          <Button
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => {
                              document
                                .getElementById("booking-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            Book Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Rental
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Fill out the form below to book your preferred vehicle or
              equipment. We'll confirm your booking within 24 hours.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Travelima
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide the best rental experience in Bali with quality
              vehicles and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Well-Maintained Vehicles",
                description:
                  "All our vehicles undergo regular maintenance checks to ensure safety and reliability.",
                icon: "🔧",
              },
              {
                title: "Flexible Rental Options",
                description:
                  "Choose from hourly, daily, or weekly rentals to suit your travel plans.",
                icon: "🗓️",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is available around the clock to assist with any issues or questions.",
                icon: "🛎️",
              },
              {
                title: "Free Delivery",
                description:
                  "We offer free delivery and pickup within Singaraja area for your convenience.",
                icon: "🚚",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none bg-white shadow-md">
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our rental services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What documents do I need to rent a vehicle?",
                answer:
                  "You'll need a valid driver's license, passport, and a credit card for the security deposit. International driving permits are recommended for non-Indonesian licenses.",
              },
              {
                question: "Is insurance included in the rental price?",
                answer:
                  "Basic insurance is included in all our rental prices. Additional comprehensive insurance is available for an extra fee.",
              },
              {
                question: "Can I extend my rental period?",
                answer:
                  "Yes, you can extend your rental period subject to availability. Please inform us at least 24 hours before your scheduled return.",
              },
              {
                question: "What happens if the vehicle breaks down?",
                answer:
                  "We provide 24/7 roadside assistance. In case of a breakdown, call our emergency number and we'll arrange for assistance or a replacement vehicle.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
