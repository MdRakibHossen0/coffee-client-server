import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../coffeeCard';

const Home = () => {
    const initialCoffees= useLoaderData();

    const [coffees,setCoffees] = useState(initialCoffees);


    console.log(initialCoffees)
    return (
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {coffees.map((initialCoffee) => (
            <CoffeeCard
              key={initialCoffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              initialCoffee={initialCoffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    );
};

export default Home;