import { createContext, useReducer } from "react";
import {
  ChildrenProps,
  ContextValues,
  initialValues,
  Reducer_usercontext,
} from "../types/UserContext";

const UserContext = createContext<ContextValues>({
  state: initialValues,
  dispatch: () => {},
});

export const UserContexProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_usercontext, initialValues);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContext;
