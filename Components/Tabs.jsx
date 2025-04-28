import React from "react";

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => onTabClick("movies")}
        className={`${
          activeTab === "movies" ? "bg-blue-500 text-white" : "bg-gray-200"
        } p-2 rounded-md`}
      >
        Películas
      </button>
    </div>
  );
};

export default Tabs;



