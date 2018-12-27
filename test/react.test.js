import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import React from 'react';
import App from './../client/src/index.js';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders an App component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.mainApp')).toHaveLength(1);
  });
});