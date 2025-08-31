import React from 'react';

export const GameImage: React.FC = () => {
  return (
    <div className="relative mb-12">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-purple-900/20 rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-3xl"></div>
      <img
        src="https://tr.rbxcdn.com/180DAY-4ef9328fdbb71e8368fb346d39963c75/256/256/Image/Webp/noFilter"
        alt="Hunty Zombies"
        className="w-full h-80 md:h-96 lg:h-[28rem] object-cover rounded-3xl shadow-2xl border-4 border-white/20"
      />
      <div className="absolute bottom-8 left-8 text-white">
        <div className="bg-black/50 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Hunty Zombies
          </h2>
          <p className="text-sm md:text-base opacity-90 text-purple-200 font-medium">
            Official Game Codes
          </p>
        </div>
      </div>
      
      <div className="absolute top-6 right-6">
        <div className="bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/50 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-sm">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};