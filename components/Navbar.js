import React from 'react';
import Link from "next/link";
import { api } from '../helpers/constant';
import NavbarItem from './NavbarItem';
import axios from 'axios';
import Image from 'next/image'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            logo: {},
            status: false
        }
    }

    componentDidMount() {
        const menu = axios.get(api + '/menu/getMenu')
        const logo = axios.get(api + '/menu/getLogo')
        axios
            .all([menu, logo])
            .then(
                axios.spread((...responses) => {
                    this.setState(
                        {
                            data: responses[0].data,
                            logo: responses[1].data,
                            status: true
                        }
                    )
                })
            )
            .catch(err => console.log(err))
    }

    render() {
        let data = [];
        if (this.state.status && this.state.data) {
            data = Object.keys(this.state.data).map((item, i) => (
                { id: item, ...this.state.data[item] }
            ));
        }

        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top " id="nav">
                <Link href="/">
                    <a className="brand-link">{this.state.logo.img !== undefined && (<img className="brand-image img-circle elevation-3" src={this.state.status ? this.state.logo.img : undefined} alt={this.state.status ? this.state.logo.name : undefined} />)}</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                        {data.filter(x => x.parent === "0")
                            .map(x =>
                                <NavbarItem key={x.id}
                                    item={x}
                                    children={data.filter(y => y.parent === x.id)}
                                />


                            )
                        }
                    </ul>
                    {/* <form className="form-inline justify-content-end">
                <div className="md-form my-0">
                    <i className="fas fa-search text-white ml-3 icone" aria-hidden="true"></i>&nbsp;
                    <input className="form-control search" type="text" placeholder="Search" aria-label="Search" />
                    
                </div>
                </form> */}

                </div>
            </nav>
        )
    }
}
