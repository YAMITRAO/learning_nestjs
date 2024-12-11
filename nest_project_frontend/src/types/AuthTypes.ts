// login Purpose

// import SingUp from "../pages/Auth/SingUp";

export interface Login_Credentails {
  userEmail: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  data: {
    userName: string;
    userEmail: string;
    userId: string;
  };
}

// signup
export interface SignUp_Credentials extends Login_Credentails {
  userName: string;
  confirmPassword: string;
}

export interface SignUpResponse {
  message: string;
  data: {};
}
