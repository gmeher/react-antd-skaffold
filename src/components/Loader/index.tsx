import React from 'react';
import { Spin } from 'antd';

interface LoadingComponentProps {
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

const Loader: React.FC<LoadingComponentProps> = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    // return <div>Loading...</div>
    return (
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center'
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};
Loader.displayName = 'CommonLoader';
export default Loader;
