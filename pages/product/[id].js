import React from 'react';
import axios from 'axios';
import { api } from '../../helpers/constant';
import { useRouter } from 'next/router'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            status: false
        }
    }

    static async getInitialProps(ctx) {
        const routeId = this.props.routeId;
        return axios
            .get(api + '/product/getProducts/' + routeId)
            .then(res => ({
                data: res.data,
                status: true
            })).then(res => res)
            .catch(err => console.log(err))
    }



    render() {
        return (

            <div className="container" id="col1">
                <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
                        <img src={this.props.status ? this.props.data.img : undefined} alt={this.props.status ? this.props.data.name : undefined} />
                    </div>
                    <div className="col-md-8 col-lg-8 col-xl-8 mb-4">
                        <br />
                        <h3>{this.props.status ? this.props.data.name : undefined}</h3>
                        <hr />
                        <h6>{this.props.status ? this.props.data.ref : undefined}</h6>
                    </div>
                </div>
                <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
                        <h3 style={{ color: '#083B57' }}>FONCTIONNALITÉS <hr /></h3>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 mb-4"></div>
                    <div className="col-md-8 col-lg-8 col-xl-8 mb-4">
                        <p>
                            {this.props.status && this.props.data.desc.split("\r\n").map(function (item, idx) {
                                return (
                                    <React.Fragment key={idx}>
                                        {item}
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const fun = ({ routeId }, props) => {
    return <Product {...props} routeId={routeId} />;
}

fun.getInitialProps = async ctx => {
    const routeId = ctx.query.id;
    return { routeId };
};

export default fun;