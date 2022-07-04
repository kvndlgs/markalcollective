import React from 'react';
import CustomerChat from './src/components/messenger';

export const wrapPageElement = ({element, props}) => (
  <React.Fragment>
    { element }
     <CustomerChat {...props} />
  </React.Fragment>
);

