import React from 'react';

import Container from '../../components/container';
import Car from '../../components/car/car';
import Background from '../../components/background/background';

const cars = [
  {
    title: 'BMW',
    body: `BMW is one of the saloon car giants. It is arguably the most sporty brand in this category. <br></br>
    BMW mostly makes RWD or X-Drive cars. Such configund driration makes it easier to perform powerslides and drifting, therefore it is a prefered brand in such car communities. <br></br>
    The car in the picture is a new 5 series. 5 series is a platform with rich history and one of the best executive sedans out there. <br></br>
    One of the most best engines produced by BMW is a 3-Litre Diesel engine. Lots of torque, lots of power, and very reliable!`,
    image: '/cars/saloonCars/bmw.webp'
  },
  {
    title: 'Audi',
    body: `Audi as a brand started in 1909 and has been one of the go to companies for affordable and reliable saloon cars. <br></br>
    Audi has a rich history in touring car racing and rally. Audi Quattro is arguably the most iconic rally car in history. <br></br>
    The car in the picture is Audi A6. Just like BMW's 5 series, Audi's platform for executive saloon cars is the A6. <br></br>
    Audi has some of the coolest and sportiest versions for their sedans out of all cars in this category - the S-line and RS variants.`,
    image: '/cars/saloonCars/audi.webp'
  },
  {
    title: 'Volvo',
    body: `Volvo is a Swedish luxury automobile marque known for its' high safety standards and beautiful design. <br></br>
    One of the best Volvos ever made is the 240. It is a classic example of European ingeniuty: safety and reliability over speed and flashiness. <br></br>
    The car in the picture is Volvo V60 and its' new proportions make it the sleekest Volvo in the range. <br></br>
    Its' T6 motor is a 2-Litre i-4 with an extra 65kw electric engine, pumping out an impressive 340 ponies!`,
    image: '/cars/saloonCars/volvo.webp'
  },
  {
    title: 'volkswagen',
    body: `Volkswagen is the biggest car company in the world, accounting for 1 out of every 10 cars sold in the world in 2014. <br></br>
    The original VW Beetle was one of the best-selling cars for the entire 20th century, selling over 21.5 million vehicles.'  <br></br>
    The car in the picture is VW Arteon - the new VW luxury model. Arteon means art in Latin. In my opinion, this is the prittiest car in the category.<br></br>
    Its' design is beautiful, however its' cheap interior and mediocre engine ranks it bellow BMW, Audi and Volvo.`,
    image: '/cars/saloonCars/volkswagen.webp'
  },
];

const SaloonCarsPage = () => {
  return (
    <>
      <Background title='saloon cars' Saloon />
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

export default SaloonCarsPage;
