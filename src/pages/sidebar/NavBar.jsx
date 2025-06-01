import { NavLink } from 'react-router-dom'

export default function NavBar({ showSidebarContent, setShowSidebarContent }) {
  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="flex flex-wrap justify-center gap-2 px-2 sm:gap-6 sm:px-0">
        {/* Bouton Me contacter - visible uniquement en mobile */}
        <button 
          onClick={() => setShowSidebarContent(!showSidebarContent)}
          className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md text-lg sm:text-xl font-bold ${
            showSidebarContent ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
          } md:hidden`}
        >
          Me contacter
        </button>

        {/* Liens de navigation - adaptation responsive */}
        <NavLink 
          to="/apropos" 
          className={({ isActive }) => 
            `px-3 py-2 sm:px-4 sm:py-3 rounded-md text-lg sm:text-xl font-bold ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            }`
          }
        >
          À propos
        </NavLink>
        <NavLink 
          to="/competences" 
          className={({ isActive }) => 
            `px-3 py-2 sm:px-4 sm:py-3 rounded-md text-lg sm:text-xl font-bold ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            }`
          }
        >
          Compétences
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `px-3 py-2 sm:px-4 sm:py-3 rounded-md text-lg sm:text-xl font-bold ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            }`
          }
        >
          Projets
        </NavLink>
        <NavLink 
          to="/blog" 
          className={({ isActive }) => 
            `px-3 py-2 sm:px-4 sm:py-3 rounded-md text-lg sm:text-xl font-bold ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            }`
          }
        >
          Mon blog
        </NavLink>
      </div>
    </nav>
  )
}