import React from 'react';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineFileUpload } from 'react-icons/md';
const About = () => {
  return (
    <>
      <div className="mb-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white space-y-6">
        <div className="w-full h-[500px] mb-4 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8954002125583!2d69.27701777593383!3d41.31113907130969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1731485305386!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg space-y-2">
          <span className="flex items-center space-x-2">
            <FcAbout className="w-6 h-6" />
            <h2 className="text-lg font-semibold">Biz haqimizda</h2>
          </span>
          <textarea
            className="w-full h-24 border border-gray-300 dark:border-gray-700 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Biz haqimizda"
          />
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg flex items-center space-x-10">
          <div className="">
            <h2 className="text-lg font-semibold mb-2">Biz haqimizda rasmi</h2>
            <label className="w-[500px] flex items-center py-2 px-4 rounded-lg cursor-pointer bg-transparent border border-gray-100 text-white font-semibold transition">
              <span className="mr-2">
                <MdOutlineFileUpload />
              </span>
              Yuklash
              <input
                type="file"
                className="hidden"
                accept=".jpg, .png, .jpeg"
              />
            </label>
          </div>
          <ul className="text-lg text-gray-500 dark:text-gray-100 space-y-1">
            <li>Rasm jpg, png, jpeg formatda bo'lsa shaffof ko'rinadi</li>
            <li>420x84 px</li>
            <li>Maksimal o'lcham: 10MB</li>
          </ul>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg space-y-4">
          <h2 className="text-lg font-semibold">Ijtimoiy tarmoqlar</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="https://www.facebook.com/botcommerce.io"
            />
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="https://www.instagram.com/botcommerce.io"
            />
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="https://t.me/botcommerce.io"
            />
          </div>
        </div>

        <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg space-y-4 pb-16">
          <h2 className="text-lg font-semibold">Kontaktlar</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="email"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="info@botcommerce.io"
            />
            <input
              type="tel"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="+99871 100 00 00"
            />
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-400"
              placeholder="Shayhontohur tumani, Zulfiya xonim 19, 21-uy"
            />
          </div>
          <span className="flex justify-end">
            <button className="w-[200px] bg-blue-500 dark:bg-blue-600 p-3 rounded-lg font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition">
              Yangilash
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
