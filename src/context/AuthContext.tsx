import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, loginUser, logoutUser, setCurrentUser } from '@/lib/auth';
import { AuthState, LoginCredentials, User } from '@/types/auth';
import { toast } from "@/components/ui/use-toast";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });

  // Check for existing user on load
  useEffect(() => {
    const user = getCurrentUser();
    setAuthState({
      user,
      isAuthenticated: !!user,
      isLoading: false,
      error: null
    });
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const user = await loginUser(credentials);
      setCurrentUser(user);
      
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name}`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to login";
      
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: errorMessage
      });
      
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive"
      });
    }
  };

  const logout = () => {
    logoutUser();
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};