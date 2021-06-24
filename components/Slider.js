import React from 'react';
import Image from 'next/image'
export default class Slider extends React.Component {

    render() {
        let data = Object.keys(this.props.data).map((item, i) => (
            { id: item, ...this.props.data[item] }
        ));
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    {data.map((x, k) =>
                        <li key={k} data-target="#demo" data-slide-to={k} className={k === 0 ? "active" : ""}></li>
                    )}
                </ul>

                <div className="carousel-inner">
                    {data.map((x, k) =>
                        <div key={k} className={`carousel-item  ${k === 0 ? "active" : ""}`} >
                            <img className="carousel-img" src={x.img} alt={x.name} width="1100" height="400" />
                        </div>
                    )}
                </div>


                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        )
    }
}