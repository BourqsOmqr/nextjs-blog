import React from 'react';
import Link from "next/link";
import Image from 'next/image'

export default class Service extends React.Component {

    render() {
        let data = Object.keys(this.props.data).map((item, i) => (
            { id: item, ...this.props.data[item] }
        ));
        return (
            <div className="container text-center text-md-left mt-5">
                <h2 style={{ fontSize: "3rem", textAlign: "center" }}>
                    <div dangerouslySetInnerHTML={{ __html: this.props.title }} />
                </h2>
                <div className="row mt-3 justify-content-center">
                    {data.map((item, k) => (
                        <div key={k} className="col-md-3 col-lg-3 col-xl-3 mb-4 single-box">
                            <h3>{item.name}</h3>
                            <img src={item.img} alt="" id="img" />
                            <p>{item.desc.length > 100 ? item.desc.substr(0, 97) + "..." : item.desc}</p>
                            {this.props.active &&
                                <button type="button" className="btn btn-primary sizebouton">
                                    <Link href={`/services/${item.id}`} className="pot">
                                        <a><span className="sizetextbouton">voir les produits</span></a>
                                    </Link>
                                </button>
                            }
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}