import * as React from 'react';
import {Link} from 'react-router';

export function NavBar() {
  return (<nav>
    <h1>Sielakos HomePage</h1>
    <ul>
      <li><Link to='/posts'>Posts</Link></li>
      <li><Link to='/cv'>CV</Link></li>
    </ul>
  </nav>);
}