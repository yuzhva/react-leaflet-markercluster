import React from 'react';
import { shallow } from 'enzyme';

import MarkerClusterGroup from './../src/react-leaflet-markercluster';
import LayerGroupContext from './../__mocks__/MockedLayerGroupContext';

// TODO: cover plugin with a test cases
describe('<MarkerClusterGroup>', () => {
  it('should render nothing', () => {
    const wrapper = shallow(<MarkerClusterGroup />, LayerGroupContext);
    expect(wrapper.type()).toBeNull();
  });
});
