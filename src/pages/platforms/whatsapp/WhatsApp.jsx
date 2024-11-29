import { useState } from 'react';

const WhatsApp = () => {
  const [token, setToken] = useState('');
  const [phoneNumberId, setPhoneNumberId] = useState('');
  const [tokenError, setTokenError] = useState('');
  const [phoneNumberIdError, setPhoneNumberIdError] = useState('');

  const handleSubmit = () => {
    if (!token) {
      setTokenError('Iltimos, tokenni to\'ldiring');
    } else {
      setTokenError('');
    }

    if (!phoneNumberId) {
      setPhoneNumberIdError('Iltimos, telefon raqam ID sini to\'ldiring');
    } else {
      setPhoneNumberIdError('');
    }

    // If all fields are filled, you can proceed with form submission (e.g., API call)
    if (token && phoneNumberId) {
      // Submit the form (for example, call an API)
    }
  };

  return (
    <div className="items-center mb-16 p-6 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">WhatsApp Bot</h2>
      <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <label htmlFor="botfather-token" className="block font-medium mb-2 text-gray-800 dark:text-gray-200">
            Token
          </label>
          <input 
            type="text" 
            id="botfather-token" 
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400" 
          />
          {tokenError && <p className="text-red-500 text-sm mt-1">{tokenError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="phone-number-id" className="block font-medium mb-2 text-gray-800 dark:text-gray-200">
            Phone Number ID
          </label>
          <input 
            type="text" 
            id="phone-number-id" 
            value={phoneNumberId}
            onChange={(e) => setPhoneNumberId(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400" 
          />
          {phoneNumberIdError && <p className="text-red-500 text-sm mt-1">{phoneNumberIdError}</p>}
        </div>

        <div className="flex items-center justify-end">
          <button 
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg" 
            onClick={handleSubmit}
          >
            Jo'natish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
