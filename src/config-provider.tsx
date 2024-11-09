import { useState, useEffect } from 'react';

// Rename to follow hook naming conventions
export function useClientSideID() {
    const [clientSideID, setClientSideID] = useState<string>('');

    useEffect(() => {
        // Mocking the clientSideID retrieval
        const fetchedClientSideID = '672c2bc696853308575b47cb';
        setClientSideID(fetchedClientSideID);
    }, []);

    return clientSideID;
}
