"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "SJ",
    role: "Tourist from Australia",
    content:
      "Renting a scooter from Elima Corner made exploring Singaraja so convenient! The staff was friendly and the process was hassle-free. Their local food recommendations were spot on too!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    role: "Digital Nomad",
    content:
      "I've been working remotely from Bali for a month and Elima Corner's canteen became my go-to spot for lunch. Fresh, delicious food at great prices. Their vehicle rental service was excellent too.",
    rating: 5,
  },
  {
    name: "Putu Wiradjaja",
    avatar: "PW",
    role: "Local Resident",
    content:
      "As a local, I can confidently say that Elima Corner serves some of the most authentic Balinese food in Singaraja. Their rental prices are fair and the equipment is always well-maintained.",
    rating: 4,
  },
  {
    name: "Emma Rodriguez",
    avatar: "ER",
    role: "Travel Blogger",
    content:
      "I discovered Elima Corner during my Bali trip and it was a game-changer! Rented a car for 3 days to explore Northern Bali and enjoyed their delicious local dishes every evening. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what visitors and locals
            have to say about their experience with Elima Corner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`placeholder.svg?text=${testimonial.avatar}`}
                      />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
