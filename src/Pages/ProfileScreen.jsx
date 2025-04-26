import React from 'react';
import './Style.css';

const ProfileScreen = () => {
  return (
    <div className="card">
      <div className='relative top-0 left-0 w-[375px] h-[68px] bg-white shadow-[0px_3px_6px_#00000007] opacity-100'>
        <div className='absolute top-[27px] left-[15px] w-[146px] h-[22px] text-left text-[18px] leading-[21px] font-semibold text-[#1D2226] capitalize opacity-100'>
          Account Settings
        </div>
      </div>

      <div className="flex items-top p-4 w-[375px]">
        <div className="relative">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={'Ellipse114.png'}
            alt="Profile"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
            <img
              src={'Group.png'}
              alt="Group Icon"
              className="w-4 h-4 text-white"
            />
          </div>
        </div>

        <div className="text-center mt-1 flex flex-col items-start pl-5">
          <h2 className="text-lg font-semibold text-gray-900 capitalize">
            Marry Doe
          </h2>
          <p className="text-sm text-gray-500 mt-1">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4 px-5 justify-evenly">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default ProfileScreen;
