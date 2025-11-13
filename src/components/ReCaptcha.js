import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ReCaptcha = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-gray-50 border border-gray-300 rounded p-4 w-full max-w-sm">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <button
            onClick={() => setIsChecked(!isChecked)}
            className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-colors ${
              isChecked 
                ? 'bg-green-500 border-green-500 text-white' 
                : 'border-gray-400 bg-white hover:border-gray-500'
            }`}
          >
            {isChecked && <Check className="w-4 h-4" />}
          </button>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-900 mb-1">
            Я не робот
          </div>
          <div className="text-xs text-gray-500">
            Конфиденциальность - Условия
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="text-xs text-gray-400">
            reCAPTCHA
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mt-1">
            <div className="w-4 h-4 bg-white rounded-full relative">
              <div className="absolute inset-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReCaptcha;