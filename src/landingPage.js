import React, { useState, useEffect, useRef } from 'react';
import { Wine, MessageCircle, ChevronDown, ChevronUp, Search, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AIChat from './components/AIChat';

import { 
  menuData, 
  allergensList, 
  dietaryPreferences, 
  moodPairings, 
  aiResponses,
  winePairings,
  ingredientDetails 
} from './menu';

const Dashboard = () => {
  // State management
  const [activeSection, setActiveSection] = useState('cocktails');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to The Wine Country Way! I can help you discover dishes, check ingredients, suggest wine pairings, or find the perfect match for your mood. What can I help you with?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Filter menu items based on search, allergies, and mood
  const filterMenuItems = (items) => {
    if (!items) return [];
    
    return items.filter(item => {
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const passesAllergyFilter = selectedAllergies.length === 0 || 
        !selectedAllergies.some(allergy => item.allergens?.includes(allergy));

      const passesMoodFilter = !selectedMood ||
        item.moodPairings?.includes(selectedMood);

      return matchesSearch && passesAllergyFilter && passesMoodFilter;
    });
  };

  // Enhanced AI Chat handling
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');

    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let response;

      // Wine-related queries
      if (lowerMessage.includes('wine') || lowerMessage.includes('pairing')) {
        if (lowerMessage.includes('rosé') || lowerMessage.includes('rose')) {
          response = aiResponses.wine_knowledge('rosé');
        } else if (lowerMessage.includes('red')) {
          response = aiResponses.wine_knowledge('red');
        } else {
          const menuItem = Object.values(menuData)
            .flatMap(category => category.items)
            .find(item => lowerMessage.includes(item.name.toLowerCase()));
          
          response = menuItem ? 
            aiResponses.wine_pairing(menuItem) : 
            "I'd be happy to suggest wine pairings. Which dish are you interested in?";
        }
      }
      // Ingredient queries
      else if (lowerMessage.includes('ingredient') || lowerMessage.includes('what')) {
        const menuItem = Object.values(menuData)
          .flatMap(category => category.items)
          .find(item => lowerMessage.includes(item.name.toLowerCase()));
        
        response = menuItem ? 
          aiResponses.dish_details(menuItem) : 
          "I can tell you about any dish's ingredients. Which dish would you like to know about?";
      }
      // Allergen queries
      else if (lowerMessage.includes('allerg') || lowerMessage.includes('dietary')) {
        const menuItem = Object.values(menuData)
          .flatMap(category => category.items)
          .find(item => lowerMessage.includes(item.name.toLowerCase()));
        
        response = menuItem ? 
          aiResponses.allergies(menuItem) : 
          "I can help you find dishes that match your dietary needs. Do you have any specific restrictions?";
      }
      // Mood-based recommendations
      else if (lowerMessage.includes('mood') || lowerMessage.includes('feel')) {
        const matchedMood = moodPairings.find(mood => 
          lowerMessage.includes(mood.id)
        );
        
        response = matchedMood ? 
          aiResponses.mood(matchedMood.id) : 
          "Tell me what mood you're in - relaxed, celebratory, romantic? I'll suggest the perfect dishes!";
      }
      else {
        response = `I can help you with:
• Dish ingredients and preparations
• Wine pairings and recommendations
• Dietary restrictions and allergens
• Mood-based recommendations

What would you like to know more about?`;
      }

      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="w-full mx-auto px-4 ">
          <div className="h-16 flex items-center justify-between">
            <h1 className="font-serif text-xl font-bold tracking-wide" style={{ color: 'black' }}>Sixty Vines</h1>
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search menu or inquire about dishes..."
            className="w-full px-4 py-3 pl-10 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>

        {/* Allergens & Dietary Preferences */}
        <div className="mb-4">
          <h2 className="font-serif text-xs mb-3 text-gray-600 uppercase tracking-wider">Dietary Preferences</h2>
          <div className="flex flex-wrap  justify-center gap-2">
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
          </div>
        </div>

        {/* Mood Selection */}
        <div className="mb-20">
          <h2 className="font-serif text-xs mb-3 text-gray-600 uppercase tracking-wider">What's Your Mood?</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {moodPairings.map((mood) => (
              <motion.button
                key={mood.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  selectedMood === mood.id
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-200'
                }`}
              >
                {mood.icon} {mood.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            {Object.entries(menuData).map(([key, category]) => (
              <motion.button
                key={key}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 text-sm rounded-full whitespace-nowrap ${
                  activeSection === key
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {menuData[activeSection]?.items && filterMenuItems(menuData[activeSection].items).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg">{item.name}</h3>
                    <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
                    {item.dietary?.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {item.dietary.map(diet => (
                          <span key={diet} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs">
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="font-serif ml-4">${item.price}</span>
                </div>
                <button 
                  onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                  className="mt-2 text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
                >
                  Learn more {expandedItem === item.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {expandedItem === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 text-sm text-gray-600 overflow-hidden"
                    >
                      {item.ingredients && (
                        <div className="mt-2">
                          <strong>Ingredients:</strong>
                          <p>{item.ingredients.join(', ')}</p>
                          {ingredientDetails[item.type]?.[item.name] && (
                            <p className="mt-1 text-xs italic">
                              {ingredientDetails[item.type][item.name].description}
                            </p>
                          )}
                        </div>
                      )}
                      {item.allergens?.length > 0 && (
                        <div className="mt-2">
                          <strong>Contains:</strong>
                          <p>{item.allergens.join(', ')}</p>
                        </div>
                      )}
                      {item.origin && (
                        <div className="mt-2">
                          <strong>Origin:</strong>
                          <p>{item.origin}</p>
                        </div>
                      )}
                      {item.pairings && (
                        <div className="mt-2">
                          <strong>Recommended Pairings:</strong>
                          <p>{item.pairings.join(', ')}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Chat Button */}
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setShowChat(!showChat)}
  className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-gray-800"
>
  {showChat ? (
    <X className="w-6 h-6" />
  ) : (
    <MessageCircle className="w-6 h-6" />
  )}
</motion.button>

      {/* Chat Interface */}
      <AIChat
           showChat={showChat}
           setShowChat={setShowChat}
           chatMessages={chatMessages}
           setChatMessages={setChatMessages}
         />
     

      {/* Wine Pairing Tooltip */}
<AnimatePresence>
  {showChat && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      {/* ... rest of the tooltip content ... */}
    </motion.div>
  )}
</AnimatePresence>

      {/* Loading States */}
      <AnimatePresence>
        {/* Add any loading states here */}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;