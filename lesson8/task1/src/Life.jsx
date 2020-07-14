import React from 'react';


class Life extends React.Component {
    constructor(props) {
        super(props);
        console.log('good place to create state');
    }

    componentDidMount() {
        console.log('API calls, subscriptions');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log('decide to render or not to render');
        return nextProps.number % 2;

        
    }

    componentDidUpdate(prevProps, revState) {
        console.los(prevProps);
        console.log('some updates based on new props')
    }

    componentWillUnmount() {
        console.log('cleanup DOM related to component will be removed');
    }


    render() {
        console.log('React element to build DOM');
        return <div className="number">{this.props.number}</div>
    }
}

export default Life;