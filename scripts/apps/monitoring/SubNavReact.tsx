import React from 'react';

interface IProps { }

interface IState { }

export class SubNavReact extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="test-superdesk"></div>
        );
    }
}
