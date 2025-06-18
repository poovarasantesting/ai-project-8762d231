export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}