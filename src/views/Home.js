import React, { Component } from 'react';
import Image from '../components/Image/Image';

export default class Home extends Component
{
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                        </div>
                        <div className="col-lg-6">
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                            <Image alt="image" src="https://image.freepik.com/free-vector/abstract-design-background_1048-6726.jpg" />
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}