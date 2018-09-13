import React, { Component } from 'react';

export default class Input extends Component
{
    render() {
        const { type, name } = this.props;
        return (
            <input type={type} name={name} />
        )
    }
}
Input.defaultProps = {
    type: 'text'
}