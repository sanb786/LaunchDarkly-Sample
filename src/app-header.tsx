import React from 'react';
import logo from './logo.svg';
import { useFlags } from 'launchdarkly-react-client-sdk';

function AppHeader() {
    const { sampleFeature } = useFlags();
  return (
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    // </header>
    <header className="App-header" style={{backgroundColor: sampleFeature ? '#00844B' : '#373841'}}>
    <p>The sampleFeature feature flag evaluates to <b>{sampleFeature ? 'True' : 'False'}</b></p>
</header>
  );
}
export default AppHeader;