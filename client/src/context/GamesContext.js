import React, { createContext, useState } from 'react';

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    return (
        <GamesContext.Provider value={{ games, setGames }}>
            {children}
        </GamesContext.Provider>
    );
};

// honestly, I have no idea what I just did
