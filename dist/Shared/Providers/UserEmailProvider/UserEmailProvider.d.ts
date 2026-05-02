import { default as React, PropsWithChildren } from 'react';
import { UseUserEmailContextType } from './types';
export declare const useUserEmail: () => UseUserEmailContextType;
export declare const UserEmailProvider: React.FC<PropsWithChildren<{}>>;
export declare const withUserEmail: (Component: React.ComponentClass) => (props: object) => import("react/jsx-runtime").JSX.Element;
