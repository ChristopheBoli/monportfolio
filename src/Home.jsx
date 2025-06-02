import React, { useState, useEffect } from "react";
import SideBar from "./pages/sidebar/SideBar";
import NavBar from "./pages/sidebar/NavBar";
import Competences from "./pages/Competences";
import Apropos from "./pages/Apropos";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import { Routes, Route, useLocation } from "react-router-dom";

function TypewriterEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Bienvenue sur mon portfolio",
    "Je suis Christophe Boli",
    "Développeur Web & Mobile",
    "Explorez mes compétences et projets",
  ];

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => fullText.substring(0, prev.length - 1));
      } else {
        setText((prev) => fullText.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-md text-center">
        Naviguez à travers les différentes sections pour découvrir mon travail.
      </p>
    </div>
  );
}

function Home() {
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar gauche (visible uniquement sur desktop) */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Section droite */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar horizontale */}
        <NavBar
          showSidebarContent={showSidebarContent}
          setShowSidebarContent={setShowSidebarContent}
        />

        {/* Contenu dynamique */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Afficher le contenu de la sidebar en mobile quand le bouton est cliqué */}
          {showSidebarContent ? (
            <div className="md:hidden bg-white p-6 rounded-lg shadow-md mb-6">
              <SideBar onClose={() => setShowSidebarContent(false)} />
            </div>
          ) : (
            <Routes>
              <Route path="/competences" element={<Competences />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/" element={<TypewriterEffect />} />
              <Route path="*" element={<TypewriterEffect />} />
            </Routes>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;
