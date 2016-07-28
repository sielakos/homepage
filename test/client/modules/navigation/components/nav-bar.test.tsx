import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {navigation} from '../../../../../src/client/index';
import {Link} from 'react-router';

const {NavBar} = navigation;

describe('NavBar', () => {
  let navBar: ShallowWrapper<any, any>;

  beforeEach(() => {
    navBar = shallow(<NavBar />)
  });

  it('should render page title', () => {
    expect(navBar.contains(<h1>Sielakos HomePage</h1>)).toBe(true);
  });

  it('should render link to posts page', () => {
    expect(navBar.contains(<Link to='/posts'>Posts</Link>)).toBe(true);
  });

  it('should render link to cv page', () => {
    expect(navBar.contains(<Link to='/cv'>CV</Link>)).toBe(true);
  });

  it('should render nav element', () => {
    expect(navBar.find('nav').length).toBe(1);
  });
});