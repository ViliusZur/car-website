import React from 'react';

import Container from '../../components/container';
import Car from '../../components/car/car';
import Background from '../../components/background/background';

const cars = [
	{
		title: 'Mazda',
		body: `Mazda is a Japanese automotive company, known for their cheap new cars and fun old cars. <br></br>
    It is also widely known for producing the Rotary engine. Mazda is the only Japanese company to win 24 Hours of Le Mans and they used a Rotary engine! <br></br>
    The car in the picture is Mazda Miata - a car beloved by car enthusiasts and the Guinness Book of Records winner for the best selling 2-seat car. <br></br>
    It is a very reliable, small, nimble and fun car. Every driving enthusiasts dream!`,
		image: '/cars/convertibleCars/mazda.webp',
	},
	{
		title: 'jaguar',
		body: `Jaguar is a British . <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
		image: '/cars/convertibleCars/jaguar.webp',
	},
	{
		title: 'mercedes-benz',
		body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
		image: '/cars/convertibleCars/mercedes.webp',
	},
	{
		title: 'porsche',
		body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting`,
		image: '/cars/convertibleCars/porsche.webp',
	},
];

const convertibleCarsPage = () => {
	return (
		<>
			<Background title="convertible cars" convertible />
			<Container size="large" center gutter spacious>
				{cars.map((car, i) => (
					<Car
						key={`Car-${i}-${car.title}`}
						title={car.title}
						body={car.body}
						image={car.image}
					/>
				))}
			</Container>
		</>
	);
};

export default convertibleCarsPage;
