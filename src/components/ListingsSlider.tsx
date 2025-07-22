import React from "react";
import { motion } from "framer-motion";

const listings = [
  {
    title: "Modern Back Bay Condo",
    price: "$2,450,000",
    image: "/assets/listings/back-bay-condo.jpg",
    location: "Back Bay, Boston",
    description: "Elegant 3-bed, 2-bath with skyline views and private terrace.",
  },
  {
    title: "Beacon Hill Brownstone",
    price: "$3,100,000",
    image: "/assets/listings/beacon-hill-brownstone.jpg",
    location: "Beacon Hill, Boston",
    description: "Stunning historic brownstone with top-tier modern upgrades.",
  },
  {
    title: "Cambridge Riverside Loft",
    price: "$1,785,000",
    image: "/assets/listings/cambridge-loft.jpg",
    location: "Cambridge, MA",
    description: "Bright, open-plan loft with river views and high ceilings.",
  },
];

const ListingsSlider: React.FC = () => (
  <div className="flex flex-col items-center gap-8">
    <h3 className="text-3xl md:text-4xl font-bold text-autumn-dark mb-2 text-center">
      Featured Properties
    </h3>
    <div className="flex gap-8 flex-wrap justify-center">
      {listings.map((listing, idx) => (
        <motion.div
          key={listing.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * idx, duration: 0.7, type: "spring" }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden w-80 hover:scale-105 group transition"
        >
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-56 object-cover group-hover:opacity-90 transition"
            loading="lazy"
          />
          <div className="p-5">
            <h4 className="text-2xl font-bold text-autumn-dark mb-1">{listing.title}</h4>
            <p className="text-autumn-dark mb-1">{listing.location}</p>
            <p className="text-lg text-autumn mb-3">{listing.price}</p>
            <p className="text-autumn-dark">{listing.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ListingsSlider;
