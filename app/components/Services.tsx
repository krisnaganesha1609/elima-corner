"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, Utensils, Bike, Coffee, Umbrella, Map } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Travelima",
    description:
      "Explore Bali with our premium travel and vehicle rental services. Experience the island with comfort and style.",
    icon: Car,
    href: "/rentals",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Scooter & Bike Rental",
    description:
      "Navigate through Bali's scenic routes with our scooters and bikes.",
    icon: Bike,
    href: "/rentals/bikes",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Local Cuisine",
    description:
      "Taste authentic Balinese dishes prepared with fresh local ingredients.",
    icon: Utensils,
    href: "/menu/food",
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Beverages & Coffee",
    description:
      "Refresh yourself with our selection of drinks and Balinese coffee.",
    icon: Coffee,
    href: "/menu/drinks",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Beach Equipment",
    description:
      "Rent beach essentials for a perfect day at Bali's beautiful beaches.",
    icon: Umbrella,
    href: "/rentals/beach",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Tour Guidance",
    description:
      "Get insider tips and guidance for exploring the best of Singaraja and beyond.",
    icon: Map,
    href: "/services/tours",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Elima Corner offers a variety of services to make your stay in
            Singaraja, Bali comfortable and memorable. From vehicle rentals to
            delicious local food, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0"
                  >
                    <Link href={service.href}>Learn more →</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
