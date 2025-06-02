import React from "react";

function Blog() {
  return (
    <div
      className="flex flex-col bg-gray-50 overflow-hidden"
      style={{ height: "calc(100vh - navbarHeight)" }}
    >
      <div className="flex-1 flex overflow-hidden">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl mx-auto my-4 flex flex-col md:flex-row" 
             style={{ height: 'calc(100% - 2rem)' }}>
          <h2 className="text-xl text-blue-600 mb-6 text-center">Il n'y a rien ici pour l'instant !</h2>
        </div>
      </div>
    </div>
  );
}

export default Blog;
