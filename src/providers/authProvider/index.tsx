import { useReducer, useContext, useEffect } from "react";
import {
  INITIAL_STATE,
  AuthStateContext,
  AuthActionContext,
  IUser,
} from "./context";
import { AuthReducer } from "./reducer";
import {
  loginPending,
  loginSuccess,
  loginError,
  logoutAction,
  registerPending,
  registerSuccess,
  registerError,
} from "./actions";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(
        loginSuccess({
          token,
          user: JSON.parse(user),
        })
      );
    }
  }, []);

  const login = async (email: string, password: string) => {
    dispatch(loginPending());

    try {
      // Mock login
      if (email && password) {
        const mockUser: IUser = {
          id: 1,
          name: "John Doe",
          email,
          role: "user",
        };

        const mockToken = "mock-jwt-token";

        localStorage.setItem("token", mockToken);
        localStorage.setItem("user", JSON.stringify(mockUser));

        dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      } else {
        throw new Error("Invalid credentials");
      }
    } catch {
      dispatch(loginError());
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    dispatch(registerPending());

    try {
      const mockUser: IUser = {
        id: Date.now(),
        name,
        email,
        role: "user"
      };

      const mockToken = "mock-jwt-token";

      localStorage.setItem("token", mockToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      dispatch(registerSuccess({ user: mockUser, token: mockToken }));
    } catch {
      dispatch(registerError());
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logoutAction());
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider value={{ login, logout, register }}>
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within AuthProvider");
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionContext);
  if (!context) {
    throw new Error("useAuthActions must be used within AuthProvider");
  }
  return context;
};
