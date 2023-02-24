import { useEffect } from 'react';
import { useContextValue } from '../context/ContextProvider';
import { ActionType } from '../types/context';

const About = () => {
  const { dispatch } = useContextValue();
  useEffect(() => {
    dispatch({ type: ActionType.UPDATE_PAGE_TAB, payload: 3 });
  }, [dispatch]);
  return <div>About</div>;
};

export default About;
