"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BookingForm() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleModel: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  const nextStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setFormStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Booking Submitted Successfully!
          </h3>
          <p className="text-slate-600 mb-6">
            Thank you for your booking. We will confirm your reservation within
            24 hours via email or phone.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormStep(0);
              setFormData({
                vehicleType: "",
                vehicleModel: "",
                startDate: undefined,
                endDate: undefined,
                fullName: "",
                email: "",
                phone: "",
                address: "",
                specialRequests: "",
              });
            }}
          >
            Make Another Booking
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          {formStep === 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">Vehicle Selection</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1">
                  <div>
                    <Label htmlFor="vehicleType" className="mb-2">
                      Vehicle Type
                    </Label>
                    <Select
                      value={formData.vehicleType}
                      onValueChange={(value) =>
                        handleSelectChange("vehicleType", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                        <SelectItem value="motorcycle">Motorcycle</SelectItem>
                        <SelectItem value="equipment">
                          Beach Equipment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  {formData.vehicleType && (
                    <div>
                      <Label htmlFor="vehicleModel" className="mb-2">
                        Vehicle Model
                      </Label>
                      <Select
                        value={formData.vehicleModel}
                        onValueChange={(value) =>
                          handleSelectChange("vehicleModel", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.vehicleType === "car" && (
                            <>
                              <SelectItem value="toyota-avanza">
                                Toyota Avanza
                              </SelectItem>
                              <SelectItem value="honda-brio">
                                Honda Brio
                              </SelectItem>
                              <SelectItem value="toyota-fortuner">
                                Toyota Fortuner
                              </SelectItem>
                            </>
                          )}
                          {formData.vehicleType === "scooter" && (
                            <>
                              <SelectItem value="honda-vario">
                                Honda Vario 125
                              </SelectItem>
                              <SelectItem value="yamaha-nmax">
                                Yamaha NMAX
                              </SelectItem>
                            </>
                          )}
                          {formData.vehicleType === "motorcycle" && (
                            <>
                              <SelectItem value="kawasaki-klx">
                                Kawasaki KLX 150
                              </SelectItem>
                            </>
                          )}
                          {formData.vehicleType === "equipment" && (
                            <>
                              <SelectItem value="beach-umbrella">
                                Beach Umbrella Set
                              </SelectItem>
                              <SelectItem value="snorkeling-gear">
                                Snorkeling Gear
                              </SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2">Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.startDate ? (
                            format(formData.startDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) =>
                            handleDateChange("startDate", date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="mb-2">End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.endDate ? (
                            format(formData.endDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.endDate}
                          onSelect={(date) => handleDateChange("endDate", date)}
                          initialFocus
                          disabled={(date) =>
                            formData.startDate
                              ? date < formData.startDate
                              : false
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.vehicleType ||
                    !formData.vehicleModel ||
                    !formData.startDate ||
                    !formData.endDate
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  Next Step
                </Button>
              </div>
            </motion.div>
          )}

          {formStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="mb-2">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="mb-2">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="mb-2">
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special requests or requirements"
                    rows={3}
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous Step
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.fullName || !formData.email || !formData.phone
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  Review Booking
                </Button>
              </div>
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">Review Your Booking</h3>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-500">
                        Vehicle Details
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <p className="text-sm text-slate-500">Vehicle Type</p>
                          <p className="font-medium">
                            {formData.vehicleType.charAt(0).toUpperCase() +
                              formData.vehicleType.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">
                            Vehicle Model
                          </p>
                          <p className="font-medium">
                            {formData.vehicleModel
                              .split("-")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(" ")}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Start Date</p>
                          <p className="font-medium">
                            {formData.startDate
                              ? format(formData.startDate, "PPP")
                              : ""}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">End Date</p>
                          <p className="font-medium">
                            {formData.endDate
                              ? format(formData.endDate, "PPP")
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-slate-500">
                        Personal Information
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <p className="text-sm text-slate-500">Full Name</p>
                          <p className="font-medium">{formData.fullName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Address</p>
                          <p className="font-medium">{formData.address}</p>
                        </div>
                      </div>
                    </div>

                    {formData.specialRequests && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-slate-500">
                          Special Requests
                        </h4>
                        <p className="mt-2">{formData.specialRequests}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous Step
                </Button>
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Confirm Booking
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      )}
    </div>
  );
}
