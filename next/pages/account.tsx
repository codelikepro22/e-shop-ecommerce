import React, { useEffect } from 'react';
import { useContextValue } from '../context/ContextProvider';
import { ActionType } from '../types/context';

const Account = () => {
  const { dispatch } = useContextValue();
  useEffect(() => {
    dispatch({ type: ActionType.UPDATE_PAGE_TAB, payload: 2 });
  }, [dispatch]);
  return <div>Account</div>;
};

export default Account;
