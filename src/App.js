import { useState, useEffect } from 'react';
import Card from './components/Card';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // useEffect with a populated array of dependencies will run whenever any of the dependecies is updated
  /*   useEffect(() => {
    console.log('Cards or counter were updated');
  }, [cards, counter]); */

  // useEffect with empty array of dependencies runs on first mount
  /* useEffect(() => {
    const id = setInterval(() => console.log('On first mount'), 5000);
    return () => clearInterval(id);
  }, [counter]); */
  // useEffect without array of dependencies runs on every render
  /*  useEffect(() => {
    const id = setInterval(() => console.log('Every render'), 5000);
    return () => clearInterval(id);
  }); */

  useEffect(() => {
    const getUsers = () => {
      setLoading(true);
      setError();
      fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(({ results }) => {
          setUsers(results);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    };
    getUsers();
    const id = setInterval(() => getUsers(), 15000);
    return () => clearInterval(id);
  }, []);

  if (loading)
    return (
      <div className='d-flex justify-content-center'>
        <img
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/afb8cb36197347.5713616457ee5.gif'
          alt=''
        />
      </div>
    );
  if (error) return <div>Ooops, something went wrong: {error}</div>;
  return (
    <div className='container mt-5'>
      <div className='row'>
        {users.map((user, i) => (
          <Card key={i} user={user} />
        ))}
      </div>
      {/* https://reactjs.org/docs/hooks-reference.html#functional-updates */}
      {/*  <button onClick={() => setCounter(prev => prev + 1)}>{counter}</button> */}
    </div>
  );
};
// JS ES6 modules
export default App;
