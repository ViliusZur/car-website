import React from 'react';

import Container from '../../components/container';
import Car from '../../components/car/car';
import Background from '../../components/background/background';

const cars = [
  {
    title: 'dodge',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/muscleCars/dodge-challenger.webp'
  },
  {
    title: 'Chevrolet',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/muscleCars/camaro.webp'
  },
  {
    title: 'Ford',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/muscleCars/mustang.webp'
  },
  {
    title: 'cadillac',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
    image: '/cars/muscleCars/cadillac.webp'
  },
];

const MuscleCarsPage = () => {
  return (
    <>
      <Background title='muslce cars' Muscle />
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

export default MuscleCarsPage;
