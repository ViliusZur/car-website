import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import cn from '../../lib/cn';

import './container.css';

export const sizes = ['small', 'medium', 'large', 'wide'];

const Container = ({ center, children, className, gutter, size, spacious, ...other }) => (
  <div
    className={ cn("Container", center && "center", gutter && "gutter", size && size, spacious && "spacious", className) }
    {...other}
  >
    {children}
  </div>
)

Container.propTypes = {
  center: bool,
  children: node.isRequired,
  className: string,
  gutter: bool,
  size: oneOf(sizes),
  spacious: bool,
}

export default Container;
