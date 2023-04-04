/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!users.ok) {
          throw new Error(`Network response was not OK. Status Code: ${users.status}`);
        }
        const jsonData = await users.json();
        console.log(jsonData);
        setUser(jsonData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
        setIsLoading(false);
      }
    };
    getUsers();
  }, [userId])
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
