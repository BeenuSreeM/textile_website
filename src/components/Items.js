import React,{useState} from 'react'
import FruitsCard from './FruitsCard';

const Items = () => {
    const [fruits,setFruits] = useState([
        {
          id: 8,
          image: '8',
          name: 'Shirt',
          price: 100
        },
        {
          id: 9,
          image: '9',
          name: 'Pomegranate',
          price: 200
        },
        {
          id: 10,
          image: '10',
          name: 'Black Grapes',
          price: 250
        },
        {
          id: 11,
          image: '11',
          name: 'Grape Fruit',
          price: 300
        },
        // {
        //   id: 5,
        //   image: '5',
        //   name: 'Berry',
        //   price: 250
        // },
        // {
        //   id: 6,
        //   image: '6',
        //   name: 'lemon',
        //   price: 150
        // }
      ])
  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
            fruits.map((fruit) => {
                return <FruitsCard key={fruit.id} fruit={fruit} />
            })
        }
    </section>
  )
}

export default Items