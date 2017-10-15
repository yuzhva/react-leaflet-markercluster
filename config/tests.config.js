// TODO: Remove importing of `raf` and tempPolyfills file once the below issue is sorted
// https://github.com/facebook/jest/issues/4545#issuecomment-333004504

/* eslint-disable */
import raf from './tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-enable */

configure({ adapter: new Adapter() });
