import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaLinkedin,
  FaTimes
} from 'react-icons/fa';

function SideBar({ onClose }) {
  return (
    <div className="w-full md:w-74 bg-white p-6 border-r border-gray-200 flex flex-col items-center md:h-full">
      {/* Bouton fermer (visible uniquement en mobile) */}
      {onClose && (
        <button 
          onClick={onClose}
          className="md:hidden self-end mb-4 text-gray-500 hover:text-gray-700"
          aria-label="Fermer les informations de contact"
        >
          <FaTimes className="text-xl" />
        </button>
      )}

      {/* Contenu principal avec marge automatique en bas */}
      <div className="flex flex-col items-center flex-grow">
        {/* Photo avec marge en haut */}
        <div className="mt-8 mb-6">
          <img 
            src="/photo1.jpg" 
            alt="Profil" 
            className="w-36 h-36 rounded-full mx-auto object-cover border-2 border-gray-200"
          />
        </div>

        {/* Nom et titre centrés */}
        <h1 className="text-2xl font-bold text-center mb-2">Christophe Boli</h1>
        <h2 className="text-gray-600 text-center mb-8 text-lg">Développeur Web & Mobile</h2>

        {/* Informations contact avec icônes */}
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-3 text-xl" />
            <span>Kalabancoro Adeken, Bamako, Mali</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-gray-500 mr-3 text-xl" />
            <span>+223 99 57 11 96 <br/> +223 84 11 00 54</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-3 text-xl" />
            <span>christopheboli8@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Réseaux sociaux fixés en bas */}
      <div className="w-full space-y-4 mt-auto">
        <div className="flex items-center">
          <div className="bg-blue-800 text-white p-2 rounded-full mr-3">
            <FaFacebook className="text-xl" />
          </div>
          <a href="https://www.facebook.com/christophe.boli.7" className="hover:text-blue-800">Christophe Boli</a>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-800 text-white p-2 rounded-full mr-3">
            <FaLinkedin className="text-xl" />
          </div>
          <a href="https://www.linkedin.com/in/christophe-boli-b17277311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-800">Christophe Boli</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;