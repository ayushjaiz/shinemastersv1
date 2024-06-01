import { createContext, Dispatch, SetStateAction } from 'react';

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

UserContext.displayName = 'UserContext';

export default UserContext;
