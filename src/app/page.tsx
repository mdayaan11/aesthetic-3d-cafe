import dynamic from 'next/dynamic';
import React from 'react';

/**
 * Dynamically import the Cafe3DViewer component to ensure it's client-side
 * and to potentially lazy-load it for performance. We disable Server-Side Rendering (SSR)
 * for this component as it directly interacts with the DOM (canvas) and browser APIs (WebGL).
 *
 * This approach ensures that the WebGL context is only initialized in the browser environment.
 */
const Cafe3DViewer = dynamic(() => import('../components/Cafe3DViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
      <p className="text-lg animate-pulse">Loading Aesthetic Cafe...</p>
    </div>
  ),
});

/**
 * The main page component for the Aesthetic 3D Cafe application.
 * This component serves as the entry point and hosts the 3D WebGL viewer.
 * It's a Server Component by default, but it renders a dynamically imported Client Component
 * for the interactive 3D experience.
 */
export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gray-900 font-sans">
      {/* The Cafe3DViewer component will render the WebGL canvas and manage the 3D scene */}
      <Cafe3DViewer />

      {/* Optional: Overlay UI elements for user instructions or branding */}
      <div className="absolute top-4 left-4 text-white text-sm p-3 bg-black bg-opacity-60 rounded-lg shadow-lg max-w-xs">
        <h1 className="text-xl font-bold mb-2">Welcome to the Aesthetic Cafe!</h1>
        <p className="mb-1">Use <kbd className="px-1 py-0.5 bg-gray-700 rounded">W</kbd><kbd className="px-1 py-0.5 bg-gray-700 rounded">A</kbd><kbd className="px-1 py-0.5 bg-gray-700 rounded">S</kbd><kbd className="px-1 py-0.5 bg-gray-700 rounded">D</kbd> to move.</p>
        <p className="mb-1">Click and drag your mouse to look around.</p>
        <p className="text-xs mt-2 text-gray-400">Explore multiple rooms and levels.</p>
      </div>
    </main>
  );
}
