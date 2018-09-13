import React, { Component } from 'react';

export default class Image extends Component
{
    constructor(props){
        super(props);
        this.state = {
            isHovered:false
        }
    }
    handleHover = () => {
        this.setState({ isHovered: true});
    }
    handleLeave = () => {
        this.setState({ isHovered: false});
    }
    render() {
        const { src, alt, srcSub } = this.props;
        const isHovered = this.state.isHovered;
        return (
            <div className="item-image">
                <img 
                    className={ isHovered ? 'imageHovered' : ''}
                    onMouseLeave={this.handleLeave}
                    onMouseEnter={this.handleHover} 
                    src={src} 
                    alt={alt} 
                />
                <div className={ isHovered ? 'show' : 'hidden'}>
                    <img src={srcSub} />   
                </div>
            </div>
        )
    }
}