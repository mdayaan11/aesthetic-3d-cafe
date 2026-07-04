"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { isAuthenticated, logout } from "@/lib/auth";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status on component mount
    // This runs client-side, ensuring localStorage access is safe.
    setIsLoggedIn(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout(); // Remove authentication token from client storage
    setIsLoggedIn(false);
    router.push("/login"); // Redirect to login page after successful logout
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-200">
          Aesthetic Cafe
        </Link>

        {/* Navigation Links and Auth Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
            Home
          </Link>
          <Link href="/cafe" className="text-gray-300 hover:text-white transition-colors duration-200">
            Explore Cafe
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="text-gray-300 hover:text-white transition-colors duration-200">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
                Login
              </Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
