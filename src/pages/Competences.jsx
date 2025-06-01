import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCode, FiCpu, FiSmartphone, FiDatabase, FiTool, FiUsers } from 'react-icons/fi';

const competences = [
  {
    id: 1,
    title: "Compétences Techniques",
    categories: [
      {
        name: "Langages",
        icon: <FiCode className="text-blue-500 text-xl md:text-2xl" />,
        items: ["Java", "JavaScript", "PHP", "HTML/XML/CSS", "SQL", "Python"]
      },
      {
        name: "Frameworks & Bibliothèques",
        icon: <FiCpu className="text-green-500 text-xl md:text-2xl" />,
        items: ["Spring Boot", "React.js", "Laravel", "Symfony", "Ionic", "Electron Js"]
      },
      {
        name: "Développement Mobile",
        icon: <FiSmartphone className="text-purple-500 text-xl md:text-2xl" />,
        items: ["Android (Java)", "Ionic (Angular ou React.js)"]
      }
    ]
  },
  {
    id: 2,
    title: "Compétences Techniques (Suite)",
    categories: [
      {
        name: "Bases de Données",
        icon: <FiDatabase className="text-red-500 text-xl md:text-2xl" />,
        items: ["MySQL", "PostgreSQL", "SQLite", "Oracle"]
      },
      {
        name: "Outils",
        icon: <FiTool className="text-yellow-500 text-xl md:text-2xl" />,
        items: ["CMS - Wordpress", "Git", "GitHub", "Postman", "Docker", "Android Studio", "IntelliJ"]
      },
      {
        name: "Modélisation",
        icon: <FiCode className="text-indigo-500 text-xl md:text-2xl" />,
        items: ["UML", "Merise"]
      }
    ]
  },
  {
    id: 3,
    title: "Compétences Transversales",
    categories: [
      {
        name: "Savoir-être",
        icon: <FiUsers className="text-pink-500 text-xl md:text-2xl" />,
        items: ["Adaptabilité et autonomie", "Travail en équipe et communication"]
      },
      {
        name: "Autres Compétences",
        icon: <FiTool className="text-teal-500 text-xl md:text-2xl" />,
        items: ["Rédaction technique et documentation", "Maintenance informatique"]
      }
    ]
  }
];

function Competences() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === competences.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? competences.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-[calc(100vh-6rem-20px)] bg-gray-50 p-4 overflow-auto">
      <div className="max-w-6xl mx-auto h-full">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-xl overflow-hidden h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={competences[currentSlide].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="p-4 md:p-6 lg:p-8 h-full flex flex-col"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                {competences[currentSlide].title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 flex-grow">
                {competences[currentSlide].categories.map((category, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-3 md:p-4 lg:p-6 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center mb-2 md:mb-3">
                      {category.icon}
                      <h2 className="text-lg md:text-xl font-semibold ml-2 md:ml-3">{category.name}</h2>
                    </div>
                    <ul className="space-y-1 md:space-y-2">
                      {category.items.map((item, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-sm md:text-base">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Navigation améliorée */}
              <div className="flex flex-col sm:flex-row justify-between items-center p-3 md:p-4 border-t border-gray-200 gap-2 md:gap-0 mt-4">
                <button 
                  onClick={prevSlide}
                  className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm md:text-base w-full sm:w-auto justify-center"
                >
                  <FiChevronLeft className="mr-1 md:mr-2" />
                  Précédent
                </button>
                
                <div className="flex space-x-2 order-first sm:order-none my-2 sm:my-0">
                  {competences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                      aria-label={`Aller à la slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base w-full sm:w-auto justify-center"
                >
                  Suivant
                  <FiChevronRight className="ml-1 md:ml-2" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Competences;