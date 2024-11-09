// App.tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './my-button';
import { CountHandler } from './count-handler';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import AppHeader from './app-header';
import { useClientSideID } from './config-provider';

function AppContent() {
    const { count, increment } = CountHandler();

    return (
        <div className="App">
            <AppHeader />
            <MyButton count={count} onClick={increment} />
            <MyButton count={count} onClick={increment} />
        </div>
    );
}

function App() {
    const clientSideID = useClientSideID();

    // Render a loading state until the clientSideID is available
    if (!clientSideID) {
        return <div>Loading...</div>;
    }

    const LDProvider = withLDProvider({
        clientSideID,
    })(AppContent);

    return <LDProvider />;
}

export default App;
