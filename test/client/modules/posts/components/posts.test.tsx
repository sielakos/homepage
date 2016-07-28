import * as React from 'react';
import {shallow} from 'enzyme';
import {posts} from '../../../../../src/client/index';

const {Posts} = posts;

describe('Cv', () => {
  it('should render posts', () => {
    expect(shallow(<Posts />).text()).toBe('Posts...');
  });
});