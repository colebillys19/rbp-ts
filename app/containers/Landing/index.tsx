/*
 *
 * Landing
 *
 */

import React, { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectLanding from './selectors';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
//   landing: makeSelectLanding(),
// });

interface Props {}

function Landing(props: Props) {
  useInjectReducer({ key: 'landing', reducer: reducer });
  useInjectSaga({ key: 'landing', saga: saga });

  // const { landing } = useSelector(stateSelector);
  // const dispatch = useDispatch();
  return <div>Landing</div>;
}

export default memo(Landing);
