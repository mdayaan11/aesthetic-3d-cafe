/**
 * Global application types.
 * This file defines common data structures used across the Aesthetic 3D Cafe application.
 */

// --- API Related Types ---

/**
 * Represents a user object as returned from the API, excluding sensitive information like passwords.
 */
export type User = {
  id: string;
  email: string;
  // Add other user profile fields here if they exist in the database schema
  // e.g., name: string; avatarUrl?: string;
};

/**
 * Request payload for user login.
 */
export type LoginRequest = {
  email: string;
  password: string;
};

/**
 * Request payload for user registration.
 */
export type RegisterRequest = {
  email: string;
  password: string;
};

/**
 * Response payload for successful authentication (login or registration).
 */
export type AuthResponse = {
  user: User;
  token: string;
};

/**
 * Response payload for fetching user profile.
 */
export type UserProfileResponse = {
  user: User;
};

/**
 * Generic structure for API responses.
 * @template T The type of the data payload.
 */
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string; // Optional message for user feedback
};

// --- 3D Cafe Related Types ---

/**
 * Represents a 3D vector with X, Y, Z components.
 * Useful for positions, rotations (Euler angles), scales, or directions.
 */
export type Vector3 = {
  x: number;
  y: number;
  z: number;
};

/**
 * Represents a 3D quaternion for rotations.
 */
export type Quaternion = {
  x: number;
  y: number;
  z: number;
  w: number;
};

/**
 * Represents the state of the camera in the 3D scene.
 */
export type CameraState = {
  position: Vector3;
  rotation: Quaternion; // Or Euler angles if preferred for controls
};

/**
 * Represents a room or distinct area within the 3D cafe model.
 */
export type Room = {
  id: string;
  name: string;
  position: Vector3; // World position of the room's origin/center
  dimensions: Vector3; // Width, height, depth of the room's bounding box
  // Potentially add other properties like: 
  // entryPoints: Vector3[];
  // interactableObjects: string[]; // IDs of objects within this room
};

// --- Other General Types ---

// Add any other general types here as the project evolves.
// For example, types for UI components, utility functions, etc.
