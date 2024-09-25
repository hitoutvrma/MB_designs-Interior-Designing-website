'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit_contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-2.5">
            <Input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                name="message"
                placeholder="Type Your Message Here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              Let's Talk
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
