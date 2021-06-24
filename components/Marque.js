import React from 'react';
import Image from 'next/image'
export default class Marque extends React.Component {
    render() {
        let data = Object.keys(this.props.data).map((item, i) => (
            { ...this.props.data[item] }
        ));
        if (data.length === 0)
            return null;
        let four_data = []
        for (let i = 0; i < data.length; i++) {
            let a = i
            let temp = []
            for (let j = 0; j < 4; j++) {
                temp.push(data[a])
                a = a === data.length - 1 ? 0 : a + 1;
            }
            four_data.push(temp)
        }
        return (
            <div className="container text-center my-3">
                <h2 style={{ fontSize: '3rem' }}>
                    <div dangerouslySetInnerHTML={{ __html: this.props.title }} />
                </h2>
                <div className="row mx-auto my-auto">
                    <div id="carouselExampleFade" className="carousel slide w-100" data-ride="carousel">
                        <div className="carousel-inner w-100" role="listbox">
                            {four_data.map((item, k) =>
                                <div key={k} className={`carousel-item ${k === 0 ? "active" : ""}`}>
                                    {item.map((item2, k2) =>
                                        <img style={{ height: '150px' }} key={k2 + k} className="d-block col-3 img-fluid" src={item2.img} alt={item2.alt} />
                                    )}
                                </div>
                            )}
                        </div>



                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}