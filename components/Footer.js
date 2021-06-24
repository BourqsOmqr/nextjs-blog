import React from 'react';
import axios from "axios"
import Link from "next/link";
import { api } from '../helpers/constant';

const First = (props) => {
    return (
        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold" id="footer2">{props.name}</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>{props.desc}</p>
        </div>
    )
}

const Seconde = (props) => {
    return (
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" id="footer2">Nos services</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            {props.service.map(item => (
                <p key={item.key}>
                    <Link href={`/services/${item.key}`} ><a className="dark-grey-text" id="afooter">{item.name}</a></Link>
                </p>
            ))}
        </div>
    )
}

const Third = (props) => {
    return (
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" id="footer2">Qui sommes nous?</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />

        </div>
    )
}

const Fourth = (props) => {
    return (
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold" id="footer2">Contact</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="contact"><i className="fas fa-home mr-3"></i> {props.contact.address} </p>
            <p className="contact"><i className="fas fa-envelope mr-3"></i> {props.contact.email}</p>
            <p className="contact"><i className="fas fa-phone mr-3"></i> {props.contact.phone}</p>
            <p className="contact" dangerouslySetInnerHTML={{ __html: props.contact.map.replace(`width="600" height="450"`, `"width="330" height="150"`) }} />
            {/* {console.log("map", props.contact.map)}
            <p> <iframe title="map" src={props.contact.map} width="330" height="150" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe></p>
             */}
        </div>
    )
}

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            status: false
        }
    }

    componentDidMount() {
        axios
            .get(api + '/footer/getFooter')
            .then(res => this.setState({
                data: res.data,
                status: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        let data = {}
        if (this.state.status) {
            data = this.state.data
            return (
                <div className="container text-center text-md-left mt-5" >
                    <div className="row mt-3 dark-grey-text">
                        <First desc={data.desc.desc} name={data.desc.name} />
                        <Seconde service={data.services} />
                        {/* <Third service={this.state.data["services"]}/> */}
                        <Fourth contact={data.contact} />
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}