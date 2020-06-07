import React from 'react';
import './Ventsim.css';
import View from './view/View';
import LogicModel from './model/LogicModel';

export default class Ventsim extends React.PureComponent {
    constructor(props) {
        super(props);

        // Set up model
        this.model = new LogicModel();
        this.variables = this.model.variables();

        // Set up state
        this.state = { 
            current: this.model.initialState(),
            history: []
        };
    }


    changeInput(input, commitImmediately) {
        this.setState({
            current: input
        });
        
        if (commitImmediately) {
            this.commitInput(input);
        }
    }

    commitInput(input) {
        input = input || this.state.current;

        let newState = this.model.changeInput(input, false);

        this.setState({
            current: newState,
            history: [...this.state.history, newState]
        });
    }

    requestSolve(input) {
        input = input || this.state.current;

        let newState = this.model.changeInput(input, true);

        this.setState({
            current: newState,
            history: [...this.state.history, newState]
        });
    }

    reset() {
        this.setState({
            current: this.model.initialState(),
            history: []
        });
    }

    render() {
        return <div className="ventsim">
            <View
                variables={this.variables}
                state={this.state.current}
                history={this.state.history}

                onRequestSolve={this.requestSolve.bind(this)}
                onCommitInput={this.commitInput.bind(this)}
                onReset={this.reset.bind(this)}
                onChangeVariable={(key, value) => {
                    let state = Object.assign({}, this.state.current);
                    state[key] = value;
                    let update = this.model.updateDerivedVariables(key, state);
                    Object.assign(state, update);
                    this.changeInput(state, false);
                }}
                onChangeInput={(input, commitImmediately) => {
                    this.changeInput(input, commitImmediately);
                }} />
          </div>;
    }
}

