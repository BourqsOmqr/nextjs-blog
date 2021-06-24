import React from 'react'
import axios from "axios"
import Service from '../../components/service/service';
import { useRouter } from 'next/router';

class Services extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
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

        let data = this.props.data ? Object.keys(this.props.data)
            .map((item, i) => (
                { id: item, ...this.props.data[item] }
            ))
            .filter(item => item.service === this.props.routeId) : [];

        return (
            <Service data={data} />
        )
    }
}

const fun = ({ routeId }, props) => {
    return <Services {...props} routeId={routeId} />;
}

fun.getInitialProps = async ctx => {
    const routeId = ctx.query.id;
    return { routeId };
};

export default fun;