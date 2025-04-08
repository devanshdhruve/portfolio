"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import "./IconOrbit.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitSuccess(true);
    } catch (error) {
      alert("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+91 9820660697";
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
    } else {
      navigator.clipboard.writeText(phoneNumber);
      setCopied("phone");
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText("dhruvedevansh@gmail.com");
    setCopied("email");
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "dhruvedevansh@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      action: handleEmailClick,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9820660697",
      color: "text-green-400",
      bg: "bg-green-500/20",
      action: handlePhoneClick,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Mumbai, Maharashtra",
      color: "text-purple-400",
      bg: "bg-purple-500/20",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="stars-contact" />
      {/* Copy Notification */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center z-50"
        >
          <Check className="w-5 h-5 mr-2" />
          {copied === "phone" ? "Phone number copied!" : "Email copied!"}
        </motion.div>
      )}

      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Connect
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Contact Methods Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <Card className="border border-gray-800 bg-black w-full h-full shadow-lg shadow-purple-500/10">
                <CardHeader className="px-8 pt-8 pb-6">
                  <CardTitle className="text-2xl font-bold text-white">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8 space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={method.action || undefined}
                      className={`flex items-center space-x-5 p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all ${
                        method.action ? "cursor-pointer" : "cursor-default"
                      } border border-gray-700`}
                    >
                      <div
                        className={`p-3 ${method.bg} rounded-xl ${method.color}`}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {method.title}
                        </h3>
                        <p className={method.color}>{method.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <Card className="border border-gray-800 bg-black w-full shadow-lg shadow-purple-500/10">
                <CardHeader className="px-8 pt-8 pb-6">
                  <CardTitle className="text-2xl font-bold text-white">
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 h-12"
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-white"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px] bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all h-12 text-md font-semibold shadow-lg hover:shadow-purple-500/20"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </div>

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
