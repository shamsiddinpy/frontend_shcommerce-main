import React, { useState } from 'react';

const Design = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [sections, setSections] = useState({
    popularProducts: true,
  });

  // const tabs = ['Umumiy', 'Biz haqimizda', 'Dizayn'];
  const colors = [
    { name: 'blue', code: '#3b82f6' },
    { name: 'slate', code: '#64748b' },
    { name: 'gray', code: '#6b7280' },
    { name: 'red', code: '#ef4444' },
    { name: 'orange', code: '#f97316' },
    { name: 'yellow', code: '#facc15' },
    { name: 'green', code: '#10b981' },
    { name: 'violet', code: '#8b5cf6' },
    { name: 'zinc', code: '#71717a' },
    { name: 'stone', code: '#78716c' },
    { name: 'neutral', code: '#737373' },
    { name: 'rose', code: '#f43f5e' },
  ];

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => URL.createObjectURL(file));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDeleteFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleSection = (sectionName) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <>
      <div className="mb-10 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">Settings</h1>

        {/* 
      <div className="flex gap-8 border-b border-slate-700 pb-2">
      {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer pb-2 ${
              tab === 'Design'
                ? 'border-b-2 border-blue-500 text-blue-500 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
              >
              {tab}
              </div>
              ))}
      </div> */}

        <div className="mt-8">
          <div className="dark:bg-gray-900 p-5 rounded-lg mb-5 border border-gray-600">
            <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
              Choose Template Colors
            </h2>
            <div className="grid grid-cols-2 gap-4 max-w-md mb-12">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`flex items-center justify-between px-4 py-2 rounded-md border ${
                    selectedColor === color.name
                      ? 'bg-opacity-90 text-white border-opacity-90'
                      : ' border-slate-700 hover:ring-2 hover:ring-offset-2 dark:bg-gray-700 dark:border-gray-600'
                  }`}
                  style={{
                    backgroundColor:
                      selectedColor === color.name ? color.code : '',
                    borderColor: color.code,
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <span className="capitalize dark:text-gray-200">
                    {color.name}
                  </span>
                  {selectedColor === color.name && (
                    <span className="text-xl font-bold dark:text-gray-200">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="text-gray-700 p-6 rounded-lg border border-slate-700 dark:bg-gray-900 dark:border-gray-600">
            <h2 className="text-lg  font-semibold mb-4 dark:text-gray-400">
              E-commerce Images
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Images for Home Page Slider
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
              />
              <div className="grid grid-cols-3 gap-4 mt-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={file}
                      alt="Uploaded"
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      onClick={() => handleDeleteFile(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Logo
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Favicon Image
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800"
              />
            </div>
            <div className="flex justify-end">
              <button className="mt-8 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Update
              </button>
            </div>
          </div>

          <div className=" text-gray-700  p-6 rounded-lg border border-slate-700 mt-5 dark:bg-gray-900 dark:border-gray-600">
            <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
              E-commerce Sections
            </h2>
            <div className="flex justify-between items-center mb-4">
              <span className="dark:text-gray-300">
                Show 'New Products' page
              </span>
              <button
                onClick={() => toggleSection('newProducts')}
                className={`w-12 h-6 flex items-center rounded-full p-1 ${
                  sections.newProducts ? 'bg-blue-500' : 'bg-gray-500'
                }`}
              >
                <div
                  className={`h-4 w-4 bg-white rounded-full transform ${
                    sections.newProducts ? 'translate-x-6' : ''
                  }`}
                ></div>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-300">
                Show 'Popular Products' page
              </span>
              <button
                onClick={() => toggleSection('popularProducts')}
                className={`w-12 h-6 flex items-center rounded-full p-1 ${
                  sections.popularProducts ? 'bg-blue-500' : 'bg-gray-500'
                }`}
              >
                <div
                  className={`h-4 w-4 bg-white rounded-full transform ${
                    sections.popularProducts ? 'translate-x-6' : ''
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
