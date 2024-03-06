import React from "react";

export const allIngredients = [
  {
    icon: "🌐",
    label: "Landing Page",
    items: [
      "  Free Site Management",
      "Responsive Custom Design",
      "Basic SEO Optimization",
      "User-Friendly CMS",
      "Contact Form Integration",
      "Social Media Connectivity",
      "Basic Security Measures",
      "Gallery/Portfolio",
      "Reviews Page",
      "Service List page",
    ],
  },
  {
    icon: "🌐",
    label: "E-commerce",
    items: [
      "Secure Online Transactions",
      "Product Showcase",
      "Shopping Cart Functionality",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Customized Checkout Process",
      "Mobile Commerce Compatibility",
      "Product Reviews and Ratings",
      "E-commerce Analytics",
      "24/7 Customer Support",
    ],
  },
  {
    icon: "🌐",
    label: "Booking site",
    items: [
      "Appointment Scheduling",
      "Calendar Integration",
      "Service Showcase",
      "Online Reservation System",
      "Booking Confirmation Notifications",
      "Customizable Booking Forms",
      "Customer Account Management",
      "Mobile-Friendly Booking",
      "Real-Time Availability Updates",
      "Secure Payment Options",
      "24/7 Customer Support",
    ],
  },
  // Add other packages here with their respective items
];

const [a, b, c] = allIngredients;
export const initialTabs = [a, b, c];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
