import * as React from 'react';
import {shallow} from 'enzyme';
import {cv} from '../../../../../src/client/index';

const {Cv} = cv;

describe('Cv', () => {
  it('should render cv', () => {
    expect(shallow(<Cv />).text()).toBe('CV');
  });
});