import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from './Loading';

export const UserProfile: React.FC<{}> = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <div>Wylogowany</div>;
  }

  return (
    <div>
      <div>Zalogowany</div>

      <div>
        <h3>User Attributes</h3>
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
