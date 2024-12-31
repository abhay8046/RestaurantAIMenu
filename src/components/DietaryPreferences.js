import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DietaryPreferences = ({ selectedAllergies, setSelectedAllergies, allergensList }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          {allergensList.map((allergen) => (
            <motion.button
              key={allergen.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedAllergies(prev =>
                  prev.includes(allergen.id)
                    ? prev.filter(a => a !== allergen.id)
                    : [...prev, allergen.id]
                );
              }}
              className={`px-4 py-2 rounded-full text-sm border ${
                selectedAllergies.includes(allergen.id)
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200'
              }`}
            >
              {allergen.icon} {allergen.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DietaryPreferences;
