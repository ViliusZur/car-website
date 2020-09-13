import React from 'react';
import './background.css';
import { bool } from 'prop-types';
import cn from '../../lib/cn';

const Background = ({title, Sports, Saloon, Convertable, Muscle}) => (
  <>
  <div className='BackgroundImageContainer'>
    <div 
      className={cn('BackgroundImage', Sports && 'Sports', Saloon && 'Saloon', Convertable && 'Convertable', Muscle && 'Muscle')} />
  </div>
  <div className='VerticalLines' />
  <div className='PageTitle'>{title}</div>
  </>
)

Background.propTypes = {
  Sports: bool,
  Saloon: bool,
  Convertable: bool,
  Muscle: bool,
}

export default Background;
