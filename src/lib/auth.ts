import { LoginCredentials, User } from "@/types/auth";

// Mock database of users
const users: (User & { password: string })[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin"
  },
  {
    id: "2",
    email: "user1@example.com",
    password: "user123",
    name: "Regular User 1",
    role: "user"
  },
  {
    id: "3",
    email: "user2@example.com",
    password: "user456",
    name: "Regular User 2",
    role: "user"
  }
];

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = users.find(
    u => u.email === credentials.email && u.password === credentials.password
  );
  
  if (!user) {
    throw new Error("Invalid email or password");
  }
  
  // Don't return the password to the client
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;
  
  try {
    return JSON.parse(userJson) as User;
  } catch (e) {
    return null;
  }
};

export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const logoutUser = (): void => {
  localStorage.removeItem('currentUser');
};