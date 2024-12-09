import { ReactNode } from "react";

// for children props
export interface ChildrenProps {
  children: ReactNode;
}

export interface User {
  userName: string;
  userEmail: string;
  userId: string;
  isAuth: boolean;
}

type UserAction =
  | { type: "USER_LOGIN"; payload: User }
  | { type: "USER_UPDATE"; payload: Partial<User> }
  | { type: "USER_LOGOUT" };

export interface ContextValues {
  state: User;
  dispatch: React.Dispatch<UserAction>;
}

export const initialValues: User = {
  userName: "",
  userEmail: "",
  userId: "",
  isAuth: false,
};

export const Reducer_usercontext = (state: User, action: UserAction) => {
  console.log("User action is calleddd...");
  console.log("state(before update) and action is", state, action);
  switch (action.type) {
    case "USER_LOGIN":
      return { ...action.payload };

    case "USER_UPDATE":
      return { ...state, ...action };

    case "USER_LOGOUT":
      return { ...initialValues };
  }

  // return state;
};
