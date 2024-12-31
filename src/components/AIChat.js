import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { menuData } from '../menu';
const AIChat = ({ showChat, setShowChat, chatMessages, setChatMessages }) => {
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Function to check if query is menu-related
  const isMenuRelatedQuery = (query) => {
    const menuKeywords = [
      'menu', 'food', 'drink', 'dish', 'wine', 'cocktail', 'beer',
      'ingredient', 'allergy', 'dietary', 'price', 'pairing',
      'vegetarian', 'vegan', 'gluten', 'spicy', 'recommendation',
      'dessert', 'appetizer', 'meal', 'pizza', 'cheese', 'board',
      'all the dishes', 'hummus', 'FROZÉ', 'Tequila', 'Fix', 'THE', 'DREAMSICLE', 'Beekeep', 'PINKY', 'PROMISE', 'SCARLET', 'LETTER', 'SANGRITA', 'GUNS', 'ROSÉ', 'LA', 'VIE', 'BY', 'LVE', 'MERF', 'COASTAL', 'ROSÉ', 'NOMADICA', 'BEARDED', 'IRIS', 'BREWING', 'HOMESTYLE', 'IPA', 'BLACK', 'ABBEY', 'BREWING', 'THE', 'ROSE', 'YAZOO', 'BREWING', 'COMPANY', 'GERST', 'COPPA', 'PROSCIUTTO', 'DI', 'PARMA', 'FINOCCHIONA', 'SPECK', 'COWGIRL', 'CREAMERY', 'MT', 'TAM', 'ROGUE', 'SMOKEY', 'BLUE', 'CITRUS', 'OLIVES', 'HUMMUS', 'GRILLED', 'GOLDEN', 'BEETS', 'SHRIMP', 'SMOKED', 'BACON', 'FIG', 'PROSCIUTTO', 'MARGHERITA', 'SPICY', 'SAUSAGE', 'BROCCOLINI', 'POTATO', 'OLIVE', 'OIL', 'CITRUS', 'CAKE', 'STICKY', 'TOFFEE', 'BASQUE', 'CHEESECAKE', 'DEVILED', 'AFFOGATO', 'Nitro', 'Cold', 'Brew', 'Fresh', 'Brewed', 'Coffee', 'Espresso', 'Cappuccino', 'Latte', 'WALKER', 'BROTHERS', 'KOMBUCHA'
    ];
    
    return menuKeywords.some(keyword => 
      query.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Function to create context from menu data
  const createMenuContext = () => {
    return `You are an AI assistant for "The Wine Country Way" restaurant. Stick to menu related questions as much as possible. Use the following menu data to answer questions:

    Categories: Cocktails, Canned Rosé, Beers, Boards, Shared Plates, Pizzas, Desserts, and Café items.
    
    Our specialties include:
    - Handcrafted cocktails like FROZÉ and Tequila Fix
    - Curated wine selection with focus on rosé
    - Artisanal cheese and charcuterie boards
    - Gourmet pizzas including vegetarian and vegan options
    - Local craft beers
    Below is our menu, treat this as source of data and truth for this rag model:
    ${JSON.stringify(menuData)}
`;
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    setIsLoading(true);

    try {
      if (!isMenuRelatedQuery(userMessage)) {
        setChatMessages(prev => [...prev, {
          role: 'assistant',
          content: "I can only assist with questions about our menu, food, drinks, and dining experience. How can I help you with our offerings?"
        }]);
        setIsLoading(false);
        return;
      }
      console.log(createMenuContext())
      const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: createMenuContext() },
            ...chatMessages,
            { role: 'user', content: userMessage },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }]);

    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing your request. Please try again or ask our staff for assistance."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 w-96 h-[70vh] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col mb-20"
        >
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-serif">Menu Assistant</h3>
            <button onClick={() => setShowChat(false)}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.content}
                </div>
               { console.log(menuData)}
              </div>
       
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-900">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask about dishes, wine pairings, or ingredients..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                disabled={isLoading}
              >
                Send
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChat;


