import React, { useEffect } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { UserProfile } from './components/UserProfile';
import { LogoutButton } from './components/LogoutButton';
import { Loading } from './components/Loading';

const App: React.FC<{}> = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setTimeout(() => loginWithRedirect(), 1000);
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <LogoutButton />
      <UserProfile />
    </div>
  );
};

export default App;
