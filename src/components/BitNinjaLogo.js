import React from 'react';

const BitNinjaLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-bitninja-red rounded flex items-center justify-center">
        <div className="w-3 h-2 bg-white rounded-sm relative">
          <div className="absolute top-0 left-1 w-1 h-1 bg-bitninja-red rounded-full"></div>
          <div className="absolute top-0 right-1 w-1 h-1 bg-bitninja-red rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold text-gray-900">
          <span className="text-bitninja-red">BIT</span>NINJA
        </div>
        <div className="text-xs text-bitninja-gray uppercase tracking-wide">
          SERVER SECURITY
        </div>
      </div>
    </div>
  );
};

export default BitNinjaLogo;