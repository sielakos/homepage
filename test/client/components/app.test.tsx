import * as React from 'react';
import {shallow} from 'enzyme';
import {App, navigation} from '../../../src/client/index';

describe('App', () => {
  it('should render navigation.NavBar component', () => {
    expect(shallow(<App children="ss">
      children
    </App>).find(navigation.NavBar).length).toBe(1);
  })
});

// console.log('FILE', __filename);