// CategoryIcon.jsx (Versão sem link)

import React from "react";


const CategoryIcon = ({ iconSrc, label, isActive = false, onClick }) => {

  const borderClass = isActive
    ? "border-primary" // Borda primária quando ATIVO
    : "border-transparent"; // Borda transparente quando INATIVO

  const textClass = isActive ? "text-primary" : "text-dark-gray2";

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick} 
    >
      <div
        className={`
          bg-white w-[104px] h-[104px] rounded-full 
          flex justify-center items-center 
          border-2 transition-all duration-300 ${borderClass}                
          shadow-md                     
      `}
      >
        <img src={iconSrc} alt={label} className="w-14 h-14 object-contain" />
      </div>
      <h5
        className={`
          mt-4 font-semibold text-[14px]
          transition-colors duration-300
          ${textClass}
      `}
      >
        {label}
      </h5>
    </div>
  );
};

export default CategoryIcon;
