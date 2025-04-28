"use client";

import { motion } from "framer-motion";
import { LandingNav } from "../components/LandingNav";
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
import { Utensils, Coffee, Cake, Leaf, Star } from "lucide-react";
import Footer from "../components/Footer";

const menuItems = {
  mainDishes: [
    {
      id: "dish-1",
      name: "Nasi Campur Bali",
      description:
        "Traditional Balinese mixed rice with various side dishes including meat, vegetables, and sambal.",
      price: 45000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Signature", "Spicy"],
      rating: 4.8,
      category: "Traditional",
    },
    {
      id: "dish-2",
      name: "Ayam Betutu",
      description:
        "Balinese spiced chicken dish slow-cooked in banana leaves with traditional herbs and spices.",
      price: 65000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Signature", "Spicy"],
      rating: 4.9,
      category: "Traditional",
    },
    {
      id: "dish-3",
      name: "Babi Guling",
      description:
        "Balinese-style roasted suckling pig served with rice and traditional accompaniments.",
      price: 75000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Popular", "Signature"],
      rating: 4.7,
      category: "Traditional",
    },
    {
      id: "dish-4",
      name: "Mie Goreng",
      description:
        "Indonesian fried noodles with vegetables, egg, and choice of chicken, seafood, or tofu.",
      price: 35000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Popular"],
      rating: 4.6,
      category: "Noodles",
    },
    {
      id: "dish-5",
      name: "Gado-Gado",
      description:
        "Indonesian salad of slightly boiled vegetables, eggs, and peanut sauce.",
      price: 30000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vegetarian"],
      rating: 4.5,
      category: "Salad",
    },
    {
      id: "dish-6",
      name: "Sate Lilit",
      description:
        "Balinese minced seafood satay on lemongrass skewers with rich spices.",
      price: 50000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Signature"],
      rating: 4.7,
      category: "Appetizer",
    },
  ],
  drinks: [
    {
      id: "drink-1",
      name: "Es Daluman",
      description:
        "Traditional Balinese green jelly drink made from Daluman leaves, coconut milk, and palm sugar.",
      price: 20000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Traditional", "Refreshing"],
      rating: 4.6,
      category: "Cold Drinks",
    },
    {
      id: "drink-2",
      name: "Kopi Bali",
      description:
        "Strong Balinese coffee traditionally brewed and served black or with condensed milk.",
      price: 15000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Signature"],
      rating: 4.8,
      category: "Coffee",
    },
    {
      id: "drink-3",
      name: "Es Jeruk",
      description:
        "Fresh squeezed orange juice with ice, a refreshing tropical drink.",
      price: 18000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Refreshing"],
      rating: 4.5,
      category: "Juice",
    },
    {
      id: "drink-4",
      name: "Jamu Kunyit Asam",
      description:
        "Traditional Indonesian herbal drink made from turmeric and tamarind, known for health benefits.",
      price: 22000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Healthy", "Traditional"],
      rating: 4.7,
      category: "Herbal",
    },
  ],
  desserts: [
    {
      id: "dessert-1",
      name: "Klepon",
      description:
        "Sweet rice cake balls filled with palm sugar and coated in grated coconut.",
      price: 15000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Traditional", "Sweet"],
      rating: 4.7,
      category: "Traditional",
    },
    {
      id: "dessert-2",
      name: "Pisang Goreng",
      description:
        "Fried bananas served with palm sugar syrup and a scoop of vanilla ice cream.",
      price: 25000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Popular"],
      rating: 4.6,
      category: "Fried",
    },
    {
      id: "dessert-3",
      name: "Dadar Gulung",
      description:
        "Green pandan crepes filled with sweet coconut and palm sugar filling.",
      price: 18000,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Traditional"],
      rating: 4.5,
      category: "Traditional",
    },
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elima Corner Canteen
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Experience authentic Balinese cuisine and refreshing beverages in
              our cozy canteen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mainDishes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white shadow-md">
                <TabsTrigger
                  value="mainDishes"
                  className="flex items-center gap-2"
                >
                  <Utensils className="h-4 w-4" />
                  <span>Main Dishes</span>
                </TabsTrigger>
                <TabsTrigger value="drinks" className="flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  <span>Drinks</span>
                </TabsTrigger>
                <TabsTrigger
                  value="desserts"
                  className="flex items-center gap-2"
                >
                  <Cake className="h-4 w-4" />
                  <span>Desserts</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(menuItems).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-3 right-3 flex flex-wrap gap-2 justify-end">
                            {item.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                className={
                                  tag === "Spicy"
                                    ? "bg-red-500"
                                    : tag === "Vegetarian" || tag === "Healthy"
                                    ? "bg-green-500"
                                    : tag === "Signature"
                                    ? "bg-amber-500"
                                    : "bg-blue-500"
                                }
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{item.name}</CardTitle>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="ml-1 text-sm">
                                {item.rating}
                              </span>
                            </div>
                          </div>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <div>
                            <p className="text-2xl font-bold text-amber-600">
                              Rp {item.price.toLocaleString()}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-slate-600">
                            {item.category}
                          </Badge>
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

      {/* Special Offers */}
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
              Special Offers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Enjoy our special promotions and combo deals for a complete dining
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Lunch Special",
                description:
                  "Get a main dish, drink, and dessert for a special price between 11 AM and 2 PM.",
                price: 75000,
                originalPrice: 95000,
                image: "/placeholder.svg?height=300&width=500",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Family Package",
                description:
                  "4 main dishes, 4 drinks, and 2 desserts to share with your family or friends.",
                price: 250000,
                originalPrice: 320000,
                image: "/placeholder.svg?height=300&width=500",
                color: "from-amber-500 to-amber-600",
              },
              {
                title: "Balinese Tasting Menu",
                description:
                  "Sample 5 different traditional Balinese dishes in smaller portions.",
                price: 120000,
                originalPrice: 150000,
                image: "/placeholder.svg?height=300&width=500",
                color: "from-red-500 to-red-600",
              },
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${offer.color} opacity-80`}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">
                          Rp {offer.price.toLocaleString()}
                        </span>
                        <span className="text-sm line-through opacity-70">
                          Rp {offer.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600">{offer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Food */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Culinary Philosophy
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-6" />
                <p className="text-slate-700">
                  At Elima Corner Canteen, we believe in preserving the
                  authentic flavors of Balinese cuisine while ensuring the
                  highest quality ingredients. Our dishes are prepared using
                  traditional methods passed down through generations.
                </p>
                <p className="text-slate-700">
                  We source our ingredients locally, supporting Balinese farmers
                  and ensuring the freshest produce for our dishes. Our spices
                  are ground fresh daily, creating the complex and aromatic
                  flavors that Balinese cuisine is known for.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-700 text-lg">
                        Fresh Ingredients
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Locally sourced produce and spices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Utensils className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-700 text-lg">
                        Traditional Methods
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Authentic cooking techniques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-lg z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-200 rounded-lg z-0" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Balinese Cuisine"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
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
              Dietary Information
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We cater to various dietary needs. Please inform our staff about
              any allergies or dietary restrictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vegetarian Options",
                description:
                  "We offer a variety of vegetarian dishes that don't compromise on flavor.",
                icon: "🥗",
              },
              {
                title: "Gluten-Free",
                description:
                  "Many of our traditional dishes are naturally gluten-free or can be adapted.",
                icon: "🌾",
              },
              {
                title: "Spice Levels",
                description:
                  "We can adjust the spice level of most dishes according to your preference.",
                icon: "🌶️",
              },
              {
                title: "Allergen Information",
                description:
                  "Our staff can provide detailed information about allergens in our dishes.",
                icon: "ℹ️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none bg-amber-50 shadow-sm">
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
      <Footer />
    </div>
  );
}
