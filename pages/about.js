import React from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import Social from '../components/Social';
import { api } from '../helpers/constant'
export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            status: false
        }
    }
    static async getInitialProps(ctx) {
        return axios.get(api + '/Description/getDesc/')
            .then(res => ({
                data: res.data,
                status: true
            })).then(function (result) {
                return result;
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="container" id="col1">
                    <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <div className="col-md-3 col-lg-3 col-xl-3 mb-4">

                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 mb-4"></div>
                        <div className="col-md-8 col-lg-8 col-xl-8 mb-4">
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: this.props.status ? this.props.data.desc : undefined }} />
                        </div>
                    </div>
                    <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
                        <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
                            {/* <h3>{this.state.status ? this.state.data.title : undefined}</h3> */}
                            <div dangerouslySetInnerHTML={{ __html: this.props.status ? this.props.data.title : undefined }} />
                            <hr />
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 mb-4"></div>
                        <div className="col-md-8 col-lg-8 col-xl-8 mb-4">
                            <p>
                                {this.props.status && this.props.data.big_desc.split("\r\n").map(function (item, idx) {
                                    return (
                                        <React.Fragment key={idx}>
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                            <br />
                                        </React.Fragment>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                </div>
                <Scroll />
                <Social />
                <Footer />
            </div>
        )
    }
}