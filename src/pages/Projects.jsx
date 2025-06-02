import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import infhonnete from '/src/assets/infhonnete.png'
import sciencesdecheznous from '/src/assets/sciencesdecheznous.png'
import dagaba from '/src/assets/dagaba.png'
import gstore from '/src/assets/gstore.png'
import emobili from '/src/assets/emobili.png'

const projects = [
  {
    id: 1,
    title: "Infhonnete.com",
    description: "Plateforme de vérification d'informations et de lutte contre les fake news au Mali.",
    technologies: ["WordPress", "HTML", "JavaScript", "CSS"],
    image: infhonnete, // Remplacez par votre image
    links: [
      { icon: <FiExternalLink />, url: "https://infhonnete.com" }
    ]
  },
  {
    id: 2,
    title: "Sciencesdecheznous.com",
    description: "Plateforme d'informations scientifiques et technologiques pour le public malien.",
    technologies: ["WordPress", "HTML", "JavaScript", "CSS"],
    image: sciencesdecheznous, // Remplacez par votre image
    links: [
      { icon: <FiExternalLink />, url: "https://sciencesdecheznous.com" }
    ]
  },
  {
    id: 3,
    title: "Gestion de Stock - Pharmacie DAGABA",
    description: "Solution complète de gestion de stock pour pharmacie avec alertes et rapports.",
    technologies: ["Spring Boot", "JavaScript", "SQLite", "Electron Js"],
    image: dagaba, // Remplacez par votre image
    links: [
      { icon: <FiGithub />, url: "#" } // Ajoutez votre lien GitHub si disponible
    ]
  },
  {
    id: 3,
    title: "Gestion de Stock - Web et mobile",
    description: "Solution complète de gestion de stock pour petites et moyennes entreprises avec alertes et rapports.",
    technologies: ["Spring Boot", "JavaScript", "SQLite", "Electron Js"],
    image: gstore, // Remplacez par votre image
    links: [
      { icon: <FiGithub />, url: "#" } // Ajoutez votre lien GitHub si disponible
    ]
  },
  {
    id: 4,
    title: "E-mobili",
    description: "Application de gestion de parc automobile avec suivi des véhicules.",
    technologies: ["React JS", "Spring Boot", "En cours de développement"],
    image: emobili, // Remplacez par votre image
    links: [
      { icon: <FiGithub />, url: "#" }, // Ajoutez votre lien GitHub si disponible
      { icon: <FiExternalLink />, url: "#" } // Ajoutez le lien de démo si disponible
    ]
  },
  {
    id: 5,
    title: "Partage de fichiers en réseau local",
    description: "Solution de partage de fichiers sécurisée en réseau local sans internet.",
    technologies: ["Java", "Socket Programming", "En cours de développement"],
    image: "./fileshare.jpg", // Remplacez par votre image
    links: [
      { icon: <FiGithub />, url: "#" } // Ajoutez votre lien GitHub si disponible
    ]
  },
  {
    id: 5,
    title: "Application de suivi parental",
    description: "Application de suivi permettant la surveillance en temps réel des mineurs par leur parents.",
    technologies: ["Java", "XML", "En cours de développement"],
    image: "./fileshare.jpg", // Remplacez par votre image
    links: [
      { icon: <FiGithub />, url: "#" } // Ajoutez votre lien GitHub si disponible
    ]
  }
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto h-full">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-xl overflow-hidden h-full flex flex-col">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={projects[currentProject].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex-1 flex flex-col lg:flex-row p-4 md:p-6"
            >
              {/* Capture d'écran du projet */}
              <div className="lg:w-1/2 h-64 md:h-96 lg:h-auto flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-4 lg:mb-0 lg:mr-6">
                <motion.img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>

              {/* Détails du projet */}
              <div className="lg:w-1/2 p-2 md:p-4 flex flex-col">
                <motion.h2 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {projects[currentProject].title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[currentProject].description}
                </motion.p>

                <motion.div
                  className="mb-4 md:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">Technologies utilisées :</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="mt-auto flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {projects[currentProject].links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center px-3 md:px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm md:text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      <span className="ml-2">
                        {link.icon.type === FiGithub ? 'Code Source' : 'Voir le Projet'}
                      </span>
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation améliorée */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-3 md:p-4 border-t border-gray-200 gap-2">
            <button 
              onClick={prevProject}
              className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm md:text-base w-full sm:w-auto justify-center order-2 sm:order-1"
            >
              <FiChevronLeft className="mr-1 md:mr-2" />
              Précédent
            </button>
            
            <div className="flex space-x-2 order-1 sm:order-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentProject ? 1 : -1);
                    setCurrentProject(index);
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentProject === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Projet ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextProject}
              className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base w-full sm:w-auto justify-center order-3"
            >
              Suivant
              <FiChevronRight className="ml-1 md:ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;