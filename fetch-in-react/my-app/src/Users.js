/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import User from './User';
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!users.ok) {
          throw new Error(`Network response was not OK. Status Code: ${users.status}`);
        }
        const jsonData = await users.json();
        console.log(jsonData);
        setIsLoading(false);
        setUsers(jsonData);
      } catch (err) {
      console.error(err);
      setError(err);
      setIsLoading(false);
      }
    };
    getUsers();
  }, [])
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && <User userId={user.id} onCancel={() => setUser(undefined)} />}
    </div>
    );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) =>
        <li key={user.id}>
          <UserCard  user={user} onClick={onClick} />
        </li>
      )}
    </ul>
  );
}
