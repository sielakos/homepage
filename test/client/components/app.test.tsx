import * as React from 'react';
import {shallow} from 'enzyme';
import {App, navigation} from '../../../src/client/index';

describe('App', () => {
  it('should render navigation.NavBar component', () => {
    expect(shallow(<App />).find(navigation.NavBar).length).toBe(1);
  });

  it('should render children', () => {
    expect(shallow(<App><div>children</div></App>).contains(<div>children</div>)).toBe(true);
  });

  it('should render navigation.NavBar component', () => {
    expect(shallow(<App />).contains(<div>Footer</div>)).toBe(true);
  });
});