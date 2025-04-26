import React from 'react';

function Button({ text = "Login", color = "bg-blue-600", disable = true, textColor = "text-white",onClick }) {
  return (
    <div className="flex justify-center items-center mt-[20px]">
      <button
        className={`w-[335px] h-[46px] border rounded-[6px] ${disable ? "bg-gray-400" : color} ${textColor} flex justify-center items-center font-medium text-base cursor-pointer border-none`}
        onClick={onClick}
        disabled={disable}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
