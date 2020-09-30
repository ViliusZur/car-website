import React from 'react';

import Container from '../../components/container';
import Car from '../../components/car/car';
import Background from '../../components/background/background';

const cars = [
  {
    title: 'Ferrari',
    body: `Ferrari was founded by Enzo Ferrari in 1939 and has become the best known sports car company in history. <br></br>
    With such premium sports cars as F40, F50, Enzo and La Ferrari, the company became an icon for speed, luxury and engineering innovation.  <br></br>
    The car in the picture is my favourite Ferrari - the 458 Itallia. The slick design and relatively affordable price makes it a perfect sports car for fast cruising. <br></br>
    It has a 4.5-Liter naturally aspirated V8 engine producing 562hp and lauching the car to 100km/h in only 3.4 seconds!`,
    image: '/cars/sportsCars/ferrari.webp'
  },
  {
    title: 'Lamborghini',
    body: `Lamborghini was founded by Ferruccio Lamborghini in 1963 in efforts to compete with already established sports car brands. <br></br>
    Models such as the Miura, Countach, Urus and LM002 proves that Lamborghini always tries to bring new ideas to their designs and the concept of what a sports car really is. <br></br>
    The car in the picture is Lamborghini Huracan. A replacement for their most successful model Gallardo. <br></br>
    It has a naturally aspirated V10 engine producing 602hp!`,
    image: '/cars/sportsCars/lamborghini.webp'
  },
  {
    title: 'Audi',
    body: `Audi was founded in 1909 and is popular for their luxurious and reliable saloon cars. <br></br>
    The company was alwyas well known for their sports sedans, but after launching the R8 they earned an exotic sports car manufacturer title as well. <br></br>
    The car in the picture is Audi R8. My favourite Audi and one of my top favourite sports cars of all time. <br></br>
    It has a 5.2-Litre V10 engine producing 532 horsepower and a Quattro all wheel drive system.`,
    image: '/cars/sportsCars/audi.webp'
  },
  {
    title: 'McLaren',
    body: `McLaren is a British motor racing team founded in 1963 by Bruce McLaren. <br></br>
    The company is famous for their high performance sports cars and being a Formula One constructor. <br></br>
    The car in the picture is the McLaren 720S. Arguably one of the prettiest McLaren's in history and definitely a favourite of mine! <br></br>
    It rocks a 4-Litre V8 engine producing 710hp and launching the car to 100km/h in 2.9s, making it one of the fastest sports cars in the price range!`,
    image: '/cars/sportsCars/mclaren.webp'
  },
];

const SportsCarsPage = () => {
  return (
    <>
      <Background title='sports cars' Sports />
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

export default SportsCarsPage;