import React from 'react';

function Input({ type = "text", floatText = "", value, setValue }) {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative w-[335px]">
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="peer w-full h-[46px] px-4 text-base bg-[#F7F8F9] border-2 rounded-lg border-[#d7d7d7b8] outline-none focus:border-blue-500"
          placeholder=" "
        />
        <label
          className="absolute left-3 top-[-10px] bg-[#F7F8F9] px-1 text-sm text-gray-500 peer-focus:text-blue-500"
        >
          {floatText}
        </label>
      </div>
    </div>
  );
}

export default Input;
