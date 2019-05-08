import React from 'react';
interface IProps {
    columns: number;
    height: number;
    data: Array<{
        id: string;
        index: number;
        component: React.ReactElement<any>;
    }>;
}
export declare class Grid extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
