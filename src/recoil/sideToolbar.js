import { atom } from 'recoil';

export const sideToolbarState = atom({
    key: 'sideToolbarState',
    default: ['data', 'visual'],
});
