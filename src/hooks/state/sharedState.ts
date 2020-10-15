import { useState } from 'react';

import { createContainer } from 'unstated-next';

import { UserData } from '../../models/Data/User';

interface SharedState {
  user: UserData | null;
}

const useSharedState = () => {
  const [sharedState, setSharedState] = useState<SharedState>({ user: null });

  const setUser = (user: UserData | null) => {
    setSharedState((prevState) => ({ ...prevState, user }));
  };

  return { state: sharedState, setUser };
};

export const SharedStateContainer = createContainer(useSharedState);
