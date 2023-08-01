import React from 'react';
interface UseFilteredEffect {
    (callback: React.EffectCallback, deps: React.DependencyList): void;
}
export declare const useFilteredEffect: UseFilteredEffect;
export {};
