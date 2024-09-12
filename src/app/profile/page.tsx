"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ProfileData {
  id: string;
  user_id: string;
  mail: string;
  name: string;
  alias: string;
  country_id: string;
  address: string;
  phone_prefix_id: string;
  phone: string;
  photo: string;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<ProfileData>({
    id: "",
    user_id: "",
    mail: "",
    name: "",
    alias: "",
    country_id: "",
    address: "",
    phone_prefix_id: "",
    phone: "",
    photo: "",
  });

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los datos del perfil
    // Simulamos con datos de ejemplo
    setProfile({
      id: "123",
      user_id: "456",
      mail: "example@mail.com",
      name: "John Doe",
      alias: "johndoe",
      country_id: "US",
      address: "123 Main St",
      phone_prefix_id: "+1",
      phone: "555-1234",
      photo: "/path/to/photo.jpg",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer una llamada a la API para guardar los datos editados
    console.log("Profile updated:", profile);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Edit Profile
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="mail"
              value={profile.mail}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Alias
            </label>
            <input
              type="text"
              name="alias"
              value={profile.alias}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              value={profile.photo}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
