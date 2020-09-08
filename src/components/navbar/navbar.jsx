import React from 'react';
import './navbar.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

//import pages
import SportsCars from '../../pages/sportsCars/sportsCars';
import SaloonCars from '../../pages/saloonCars/saloonCars';
import ConvertableCars from '../../pages/convertableCars/convertableCars';
import MuscleCars from '../../pages/muscleCars/muscleCars';

export default function NavBar(props) {

  return (
    <>
      <BrowserRouter>
        <Link to='/sports'><button className='navButton'>Sports cars</button></Link>
        <Link to='/saloon'><button className='navButton'>Saloon cars</button></Link>
        <Link to='/convertable'><button className='navButton'>Convertable cars</button></Link>
        <Link to='/muscle'><button className='navButton'>Muscle cars</button></Link>

        <Switch>
          <Route exact path={['/', '/sports']} component={SportsCars} />
          <Route path='/saloon' component={SaloonCars} />
          <Route path='/convertable' component={ConvertableCars} />
          <Route path='/muscle' component={MuscleCars} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
