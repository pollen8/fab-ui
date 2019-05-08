import React, { FC } from 'react';
declare type DivProps = React.HTMLAttributes<HTMLDivElement>;
export declare const Nav: FC<DivProps>;
export declare const NavItem: FC<{
    onClick: () => void;
    active: boolean;
} & DivProps>;
export declare const TabContent: FC<{
    active: boolean;
} & DivProps>;
export {};
