import React, { Component } from 'react';
import Image from '../components/Image/Image';
import ScrollEvent from 'react-onscroll';

export default class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            direction:'',
            lastScrollPos:0
        }
    }
    handleScrollCallback = () => {
        console.log('handleScrollCallback');
    }
    render() {
        return (
            <div>
                <h1>Home</h1> 
                <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image 
                                srcSub="https://www.welovesolo.com/wp-content/uploads/2014/10/p16hh38qpn1ksms08j6e1c1r61d9-details.jpg" 
                                alt="image" 
                                src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" 
                            />
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                        </div>
                        <div className="col-lg-6">
                            <Image 
                                srcSub="https://www.welovesolo.com/wp-content/uploads/2014/10/p16hh38qpn1ksms08j6e1c1r61d9-details.jpg" 
                                alt="image" 
                                src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" 
                            />
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}