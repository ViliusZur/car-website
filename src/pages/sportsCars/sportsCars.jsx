import React from 'react';

import Container from '../../components/container';
import Car from '../../components/car/car';
import Background from './background';

const cars = [
  {
    title: 'Ferrari 458',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/sportsCars/ferrari-458.png'
  },
  {
    title: 'Lamborghini Huracan',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/sportsCars/lamborghini-huracan-orange.png'
  },
  {
    title: 'Audi R8',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/sportsCars/audi-r8.png'
  },
  {
    title: 'McLaren 720S',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/sportsCars/mclaren-720s.png'
  },
];

const SportsCarsPage = () => {
  return (
    <>
      <Background title='sports cars' />
      <Container size='large' center gutter spacious>
      {
        cars.map((car, i) => (
          <Car key={`Car-${i}-${car.title}`} title={car.title} body={car.body} image={car.image}/>
        ))
      }
      </Container>
    </>
  )
}

export default SportsCarsPage