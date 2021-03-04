import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const myPlaces = [
    {
      id: 1,
      name: 'Mexico City',
      desc: 'Is a cool place and has tacos',
      img:
        'https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/jKF9zI9Z-1380x690.jpeg'
    },
    {
      id: 2,
      name: 'Leipzig',
      desc: 'Is a cool place and does not have tacos',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AMjcfJg7Au7VZLpYN5yBOtjUG-FfdjL_MA&usqp=CAU'
    }
  ];

  const [cards] = useState(myPlaces);

  return (
    <div className='container mt-5'>
      <div className='row'>
        {cards.map(({ id, ...rest }) => (
          <Card key={id} place={rest} />
        ))}
      </div>
    </div>
  );
};
// JS ES6 modules
export default App;
