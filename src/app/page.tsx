import { motion } from "framer-motion";
import React from "react";

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, CupSoda, Sandwich, Cake, Leaf, Milk, Sugar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menu = [
  {
    category: 'Coffee',
    icon: <Coffee className="w-6 h-6 text-green-700" />,
    items: [
      {
        name: 'Caffè Latte',
        description: 'Rich, full-bodied espresso blended with steamed milk.',
        ingredients: [
          { icon: <Coffee className="w-4 h-4" />, label: 'Espresso' },
          { icon: <Milk className="w-4 h-4" />, label: 'Steamed Milk' },
        ],
      },
      {
        name: 'Caramel Macchiato',
        description: 'Espresso with vanilla-flavored syrup, milk and caramel drizzle.',
        ingredients: [
          { icon: <Coffee className="w-4 h-4" />, label: 'Espresso' },
          { icon: <Milk className="w-4 h-4" />, label: 'Milk' },
          { icon: <Sugar className="w-4 h-4" />, label: 'Vanilla Syrup' },
          { icon: <Sugar className="w-4 h-4" />, label: 'Caramel' },
        ],
      },
      {
        name: 'Americano',
        description: 'Espresso shots topped with hot water.',
        ingredients: [
          { icon: <Coffee className="w-4 h-4" />, label: 'Espresso' },
          { icon: <CupSoda className="w-4 h-4" />, label: 'Hot Water' },
        ],
      },
    ],
  },
  {
    category: 'Tea & Refreshers',
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    items: [
      {
        name: 'Matcha Latte',
        description: 'Smooth, creamy matcha with steamed milk.',
        ingredients: [
          { icon: <Leaf className="w-4 h-4" />, label: 'Matcha' },
          { icon: <Milk className="w-4 h-4" />, label: 'Milk' },
        ],
      },
      {
        name: 'Iced Passion Tango Tea',
        description: 'Tropical, herbal blend shaken over ice.',
        ingredients: [
          { icon: <Leaf className="w-4 h-4" />, label: 'Herbal Tea' },
          { icon: <CupSoda className="w-4 h-4" />, label: 'Ice' },
        ],
      },
    ],
  },
  {
    category: 'Bakery',
    icon: <Cake className="w-6 h-6 text-yellow-600" />,
    items: [
      {
        name: 'Blueberry Muffin',
        description: 'Moist muffin bursting with blueberries.',
        ingredients: [
          { icon: <Cake className="w-4 h-4" />, label: 'Blueberries' },
          { icon: <Sugar className="w-4 h-4" />, label: 'Sugar' },
        ],
      },
      {
        name: 'Croissant',
        description: 'Flaky, buttery pastry.',
        ingredients: [
          { icon: <Cake className="w-4 h-4" />, label: 'Butter' },
          { icon: <Sugar className="w-4 h-4" />, label: 'Flour' },
        ],
      },
    ],
  },
  {
    category: 'Sandwiches',
    icon: <Sandwich className="w-6 h-6 text-orange-800" />,
    items: [
      {
        name: 'Turkey &amp; Swiss',
        description: 'Oven-roasted turkey, Swiss cheese, and fresh greens.',
        ingredients: [
          { icon: <Sandwich className="w-4 h-4" />, label: 'Turkey' },
          { icon: <Milk className="w-4 h-4" />, label: 'Swiss Cheese' },
          { icon: <Leaf className="w-4 h-4" />, label: 'Greens' },
        ],
      },
      {
        name: 'Egg &amp; Cheddar',
        description: 'Fluffy eggs and cheddar cheese on artisan bread.',
        ingredients: [
          { icon: <Cake className="w-4 h-4" />, label: 'Egg' },
          { icon: <Milk className="w-4 h-4" />, label: 'Cheddar' },
          { icon: <Cake className="w-4 h-4" />, label: 'Bread' },
        ],
      },
    ],
  },
];

const LandingPage: React.FC = () => {
  return (
    <main className="font-sans min-h-screen bg-[#f5f5f5]">
      <section className="bg-green-700 text-white py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to Starbucks Café
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-6"
        >
          Savor your moment with our signature drinks and fresh bakery.
        </motion.p>
        <Button variant="secondary" className="text-green-700 font-semibold">
          Order Now
        </Button>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Menu</h2>
        <div className="space-y-10">
          {menu.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <span className="mr-2">{cat.icon}</span>
                <h3 className="text-xl font-semibold">{cat.category}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="border rounded-md p-4 bg-[#fafafa] hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-lg">{item.name}</h4>
                    </div>
                    <p className="text-gray-700 mt-1">{item.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      {item.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 rounded text-sm text-green-800"
                        >
                          {ing.icon}
                          {ing.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LandingPage;