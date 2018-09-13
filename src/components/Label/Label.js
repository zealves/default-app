import React, { Component } from 'react';

export default class Label extends Component
{
    render() {
        const { text } = this.props;
        return (
            <label>{text}</label>
        )
    }
}
