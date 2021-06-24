import React from 'react';
import Slider from './Slider';
import Desc from './Desc';
import Service from './Service';
import Marque from './Marque';
import axios from 'axios';
import { api } from '../helpers/constant';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: {},
            marque: {},
            service: {},
            slider: {},
            title: {},
            pages: {},
            status: false
        }
    }



    render() {
        if (!this.props.status) return null
        let serv = this.props.status && this.props.title ? this.props.title.serv : "Please add title"
        let marq = this.props.status && this.props.title ? this.props.title.marque : "Please add title"
        return (
            <div>
                <Slider data={this.props.slider} />
                <Desc data={this.props.desc} active={this.props.pages.about.active} />
                <Service data={this.props.service} title={serv} active={this.props.pages.services.active} />
                <Marque data={this.props.marque} title={marq} />
            </div>
        )
    }
}