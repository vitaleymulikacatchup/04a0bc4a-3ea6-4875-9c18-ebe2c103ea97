import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BitNinjaLogo from './BitNinjaLogo';
import ReCaptcha from './ReCaptcha';

const SecurityCard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Russian');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ['Russian', 'English', 'Deutsch', 'Français'];

  return (
    <div className="security-card">
      {/* Header with Logo and Language Selector */}
      <div className="flex items-center justify-between mb-6">
        <BitNinjaLogo />
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-bitninja-red text-sm font-medium hover:text-bitninja-dark-red transition-colors"
          >
            {selectedLanguage}
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-bitninja-border rounded-md shadow-lg z-10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-bitninja-light-gray transition-colors"
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Уважаемый посетитель,
        </h1>
        
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Чтобы продолжать просмотр и нам помогать в борьбе с киберпреступностью просьба ввести код с картинки вы можете видеть ниже.
        </p>

        <div className="mb-4">
          <span className="text-sm text-gray-600">ваш IP-адрес: </span>
          <span className="ip-address">188.163.4.195</span>
        </div>

        {/* ReCAPTCHA */}
        <div className="recaptcha-container">
          <ReCaptcha />
        </div>

        {/* Submit Button */}
        <button className="bitninja-button">
          УДАЛИТЬ МОЙ IP-АДРЕС
        </button>
      </div>
    </div>
  );
};

export default SecurityCard;