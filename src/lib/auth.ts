import { User } from "@/types/auth";

// Demo users data
export const users: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john@example.com",
    password: "john123",
    role: "user",
  },
];

// Auth helper functions
export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};

// Local storage management
export const saveUserToLocalStorage = (user: User) => {
  // Remove password before saving to localStorage for security
  const { password, ...secureUser } = user;
  localStorage.setItem('currentUser', JSON.stringify(secureUser));
};

export const getUserFromLocalStorage = (): Omit<User, 'password'> | null => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem('currentUser');
};

export const isAuthenticated = (): boolean => {
  return getUserFromLocalStorage() !== null;
};

export const isAdmin = (): boolean => {
  const user = getUserFromLocalStorage();
  return user?.role === 'admin';
};