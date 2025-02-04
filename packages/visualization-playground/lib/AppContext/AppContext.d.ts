import React from 'react';
declare type AppContextValues = {
    localStorageGetItem?: (key: string) => Promise<string | null>;
    localStorageSetItem?: (key: string, value: string) => void;
};
export declare const AppContext: React.Context<AppContextValues>;
export {};
