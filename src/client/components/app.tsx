import * as React from 'react';
import {NavBar} from '../modules/navigation';

export function App({children}) {
  return (<div>
    <NavBar />
    {children}
    <div>
      Footer
    </div>
  </div>);
}