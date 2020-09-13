import React from 'react';
import styles from './navbar.module.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

//import pages
import SportsCars from '../../pages/sportsCars/sportsCars';
import SaloonCars from '../../pages/saloonCars/saloonCars';
import ConvertableCars from '../../pages/convertableCars/convertableCars';
import MuscleCars from '../../pages/muscleCars/muscleCars';

export default function NavBar() {

  return (
    <>
      <BrowserRouter>
        <div className={styles.Container}>
          <Link to='/sports'>
            <button className={styles.Button}>
              <div className={styles.Text}>
                Sports
              </div>
            </button>
          </Link>
          <Link to='/saloon'>
            <button className={styles.Button}>
              <div className={styles.Text}>
                Saloon
              </div>
            </button>
          </Link>
          <Link to='/convertable'>
            <button className={styles.Button}>
              <div className={styles.Text}>
                Convertable
              </div>
            </button>
          </Link>
          <Link to='/muscle'>
            <button className={styles.Button}>
              <div className={styles.Text}>
                Muscle
              </div>
            </button>
          </Link>
        </div>
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
