/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState();
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`
  useEffect(() => {
    if (isLoading === undefined) {
      setIsLoading(true);
      readItems()
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
    };
  //   (async () => {
  //   try {
  //     const data = await readItems();
  //     setItems(data);
  //     setIsLoading(!isLoading);
  //   } catch (err) {
  //     setError(err);
  //   }
  // })()
  }, [isLoading])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
