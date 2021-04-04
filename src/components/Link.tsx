import React, { Component } from 'react';

class Link extends Component<{ text?: string }, {}> {

    render() {
        return (
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.text || 'No contents'}
            </a>
        )
    }
}

export default Link