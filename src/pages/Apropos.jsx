import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUser, FiBriefcase, FiAward, FiMapPin, FiBook, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import photo1 from '/src/assets/photo1.jpg';
import photo2 from '/src/assets/photo2.jpg';
const slides = [
  {
    id: 1,
    title: "Christophe Boli",
    subtitle: "Développeur Full-Stack",
    description: "Développeur passionné par les technologies Web et mobiles, je suis à la recherche d’un poste stimulant en tant que développeur full-stack ou mobile. Mon objectif est de contribuer activement à des projets innovants tout en consolidant mes compétences techniques sur le terrain, dans le but d’évoluer vers des postes à responsabilité.",
    image: photo1
  },
  {
    id: 2,
    title: "Expériences Professionnelles",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold">Responsable Informatique – Science de chez nous</h3>
          <p className="text-gray-500 text-sm flex items-center"><FiMapPin className="mr-1" /> Bamako | 2022 – Présent</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Développement et gestion de plateformes web éducatives</li>
            <li>Conception d'outils internes sur mesure (stock, contenu)</li>
            <li>Maintenance et amélioration continue des systèmes</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold">Stagiaire Développeur Web et Mobile – EPIM Bamako</h3>
          <p className="text-gray-500 text-sm flex items-center"><FiMapPin className="mr-1" /> Bamako | 2022 – 2023</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Création d'applications Android et sites web dynamiques</li>
            <li>Encadrement de débutants en développement</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold">Développeur Junior – SEVOB SARL</h3>
          <p className="text-gray-500 text-sm flex items-center"><FiMapPin className="mr-1" /> En ligne | 2021</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Développement de solutions web en PHP et JavaScript</li>
            <li>Collaboration en équipe agile</li>
          </ul>
        </div>
      </div>
    ),
    image: photo2
  },
  {
    id: 3,
    title: "Formation",
    content: (
      <div className="space-y-6">
        <div className="flex items-start">
          <FiBook className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">INTEC SUP</h3>
            <p className="text-gray-600">Licence en Programmation et Développement Informatique | 2024</p>
          </div>
        </div>

        <div className="flex items-start">
          <FiBook className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Institut LUCAS Bamako</h3>
            <p className="text-gray-600">DUT en Informatique de Gestion | 2023</p>
          </div>
        </div>

        <div className="flex items-start">
          <FiBook className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Orange Digital Center</h3>
            <p className="text-gray-600">Formation en Internet des Objets (IoT) | 2024</p>
          </div>
        </div>
      </div>
    ),
    image: photo1
  },
  {
    id: 4,
    title: "Langues & Références",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Langues</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <FiGlobe className="text-blue-500 mr-2" />
              <span>Français : <span className="text-gray-600">Courant</span></span>
            </div>
            <div className="flex items-center">
              <FiGlobe className="text-blue-500 mr-2" />
              <span>Anglais : <span className="text-gray-600">Intermédiaire</span></span>
            </div>
            <div className="flex items-center">
              <FiGlobe className="text-blue-500 mr-2" />
              <span>Bambara : <span className="text-gray-600">Notions de base</span></span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Référence</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">Mardochée Ani BOLI</p>
            <p className="text-gray-600 text-sm">Journaliste scientifique – Pesacheck Africa</p>
            <div className="flex items-center mt-1">
              <FiPhone className="text-gray-500 mr-2 text-sm" />
              <span className="text-gray-600 text-sm">+223 79 26 95 77</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-gray-500 mr-2 text-sm" />
              <span className="text-gray-600 text-sm">mardocheboli@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    image: photo2
  }
];

function Apropos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col bg-gray-50 overflow-hidden" style={{ height: 'calc(100vh - navbarHeight)' }}>
      {/* Conteneur principal */}
      <div className="flex-1 flex overflow-hidden">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl mx-auto my-4 flex flex-col md:flex-row" 
             style={{ height: 'calc(100% - 2rem)' }}>
          
          {/* Colonne de gauche avec image (40% de hauteur sur mobile) */}
          <div className="md:w-1/2 p-4 flex items-center justify-center bg-gray-100 h-[40vh] md:h-full">
            <AnimatePresence mode='wait'>
              <motion.div
                key={slides[currentSlide].id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full h-full relative overflow-hidden rounded-lg"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Colonne de droite avec contenu */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col h-[60vh] md:h-full">
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={slides[currentSlide].id + "content"}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h1>
                  {slides[currentSlide].subtitle && (
                    <h2 className="text-xl text-blue-600 mb-6">{slides[currentSlide].subtitle}</h2>
                  )}
                  {slides[currentSlide].description ? (
                    <p className="text-gray-600 mb-6 leading-relaxed">{slides[currentSlide].description}</p>
                  ) : (
                    slides[currentSlide].content
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Contrôles de navigation - TOUJOURS VISIBLES */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between w-full mb-2">
                <button 
                  onClick={prevSlide}
                  className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  <FiChevronLeft className="mr-2" />
                  Précédent
                </button>
                <button 
                  onClick={nextSlide}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Suivant
                  <FiChevronRight className="ml-2" />
                </button>
              </div>

              <div className="flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;