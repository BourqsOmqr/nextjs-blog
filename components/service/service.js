import React, { Component } from 'react'
import Sidebar from './sidebar'
import Page from './productbody'
import axios from 'axios'
import { api } from '../../helpers/constant';
export default class Service extends Component {
    state = {
        cat: [],
        type: [],
        carac: [],
        marque: [],
        status: false,
        sidebar: true
    }

    handleCheck = (e) => {
        let cat = [];
        for (const checkbox of document.getElementsByName("cat")) {
            if (checkbox.checked) {
                cat.push(checkbox.value)
            }
        }
        let type = []
        for (const checkbox of document.getElementsByName("type")) {
            if (checkbox.checked) {
                type.push(checkbox.value)
            }
        }
        let carac = []
        for (const checkbox of document.getElementsByName("carac")) {
            if (checkbox.checked) {
                carac.push(checkbox.value)
            }
        }
        let marque = []
        for (const checkbox of document.getElementsByName("marque")) {
            if (checkbox.checked) {
                marque.push(checkbox.value)
            }
        }
        this.setState({
            cat: cat,
            type: type,
            carac: carac,
            marque: marque
        })
        // this.setState({
        //     ...this.state,
        //     [e.target.name]: [e.target.name].push(e.target.value)
        // })
    }

    componentDidMount() {
        axios
            .get(api + '/pages/getPages')
            .then(res => this.setState({
                status: true,
                sidebar: res.data.filter.active ? true : false,
            }))
            .catch(err => console.log(err))
    }

    render() {
        let new_data = this.state.cat.length > 0 ? this.props.data.filter(x => this.state.cat.includes(x.cat)) : this.props.data
        new_data = this.state.type.length > 0 ? new_data.filter(x => this.state.type.includes(x.type)) : new_data
        new_data = this.state.carac.length > 0 ? new_data.filter(x => this.state.carac.includes(x.carac)) : new_data
        new_data = this.state.marque.length > 0 ? new_data.filter(x => this.state.marque.includes(x.marque)) : new_data

        let data_chunk = []
        let show = this.state.sidebar ? 6 : 8
        for (let i = 0, j = new_data.length; i < j; i += show) {
            let temparray = new_data.slice(i, i + show);
            data_chunk.push(temparray)
        }
        return (
            <div className="container text-center text-md-left mt-5">
                <div className="row ">
                    {this.state.sidebar && <Sidebar data={new_data} handle={this.handleCheck} />}
                    <div className="col-md-1 col-lg-1 col-xl-1 mb-4">
                    </div>
                    <Page data={data_chunk} expand={!this.state.sidebar} />
                </div>
            </div>
        )
    }
}
