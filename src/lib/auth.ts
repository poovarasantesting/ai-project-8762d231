import { create } from 'zustand';
import { AuthState, User } from './types';

// Test users with their credentials
const testUsers: User[] = [
  {
    id: '1',
    email: 'user1@example.com',
    password: 'password1',
    name: 'Test User 1',
    role: 'user',
  },
  {
    id: '2',
    email: 'user2@example.com',
    password: 'password2',
    name: 'Test User 2',
    role: 'user',
  },
  {
    id: '3',
    email: 'admin@example.com',
    password: 'adminpass',
    name: 'Admin User',
    role: 'admin',
  },
];

export const useAuthStore = create<AuthState & {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  login: async (email: string, password: string) => {
    // Find user by email
    const user = testUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      set({
        user: { ...user, password: '******' }, // Don't expose password
        isAuthenticated: true,
        error: null,
      });
      return true;
    } else {
      set({
        user: null,
        isAuthenticated: false,
        error: 'Invalid email or password',
      });
      return false;
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false, error: null });
  },
}));