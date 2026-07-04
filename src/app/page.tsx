import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the CafeScene component with no SSR, as it relies on browser APIs (WebGL)
// and client-side hooks from @react-three/fiber.
const CafeScene = dynamic(() => import('@/components/CafeScene'), {
  ssr: false, // Disable server-side rendering for the 3D scene
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white text-lg font-medium">
      Loading 3D Cafe...
    </div>
  ),
});

/**
 * The main home page component for the Aesthetic 3D Cafe application.
 * This page serves as the entry point to display the interactive 3D cafe model.
 * It uses Next.js dynamic imports to ensure the WebGL scene is rendered only on the client-side.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white relative overflow-hidden">
      {/* Header for the page */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-8 z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
        Aesthetic 3D Cafe
      </h1>

      {/* Container for the 3D scene */}
      <div className="w-full flex-grow relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-screen-xl mx-auto mb-8" style={{ height: 'calc(100vh - 200px)' }}>
        <Suspense fallback={
          <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white text-lg font-medium">
            Preparing 3D environment...
          </div>
        }>
          <CafeScene />
        </Suspense>
      </div>

      {/* Footer with interaction instructions */}
      <footer className="absolute bottom-4 text-sm text-gray-400 z-10 px-4 text-center">
        Explore the cafe using your mouse (click and drag to rotate, scroll to zoom) and keyboard (W, A, S, D for movement)!<br/>
        <span className="text-xs text-gray-500">Note: For a full walkthrough experience, ensure your browser allows pointer lock.</span>
      </footer>
    </main>
  );
}
