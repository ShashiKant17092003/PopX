import React from 'react';

function Radio({ name, options = [], selected, setSelected }) {
  return (
    <div className="flex gap-4 mt-2 pl-6">
      {options.map((option, idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
            className="w-4 h-4 accent-[#6C25FF]"
          />
          <span className="text-gray-700 text-base">{option}</span>
        </label>
      ))}
    </div>
  );
}

export default Radio;
