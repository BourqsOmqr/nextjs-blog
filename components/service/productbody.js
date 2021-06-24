import React from 'react';
import Link from "next/link";
import { api } from '../../helpers/constant';
import axios from 'axios'
import Image from 'next/image'
const Product = (props) => {

    return (
        <div className={`col-md-${props.size ? 2 : 3} col-lg-${props.size ? 2 : 3} col-xl-${props.size ? 2 : 3} mb-4`} id="col1">
            <img src={props.product.img} alt={props.product.name} />
            <h6>{props.product.name}</h6>
            <p>{props.product.ref}</p>
            {!props.active &&
                <button type="button" className="btn btn-primary" id="plus" style={{ height: '40px', marginBottom: '20px' }}>
                    <Link href={`/product/${props.product.id}`} >
                        <a style={{ color: 'white' }}><i className="fa fa-angle-double-right" aria-hidden="true" id="plusi"></i></a>
                    </Link>
                </button>
            }
            <br />
        </div>
    )
}

const Productbody = props => (
    <div id={props.id} className="row mx-auto content" style={{ textAlign: 'center' }}>
        {props.products.map(item =>
            <React.Fragment key={item.id}>
                <Product product={item} size={props.size} active={props.active} />
                <div className="col-md-1 col-lg-1 col-xl-1 mb-4"></div>
            </React.Fragment>
        )}
    </div>
)

export default class page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            status: false,
            product: false
        }
        this.change_page = this.change_page.bind(this);
    }

    change_page(idx) {
        this.setState({
            page: idx !== -1 && idx !== 0 ? idx : (idx === -1 ? this.state.page - 1 : this.state.page + 1)
        })
    }

    componentDidMount() {
        axios
            .get(api + '/pages/getPages')
            .then(res => this.setState({
                status: true,
                product: res.data.product.active ? true : false,
            }))
            .catch(err => console.log(err))
    }

    render() {
        window.scrollTo(0, 0)
        if (this.state.order) return null
        return (
            <div className={`col-md-${this.props.expand ? 12 : 8} col-lg-${this.props.expand ? 12 : 8} col-xl-${this.props.expand ? 12 : 8} mb-4 `}>
                <br />
                <div className="container" id="jar">
                    {this.props.data.map((item, idx) =>
                        this.state.page === idx + 1 && <Productbody key={idx} products={item} id={idx} size={this.props.expand} active={this.state.order} />
                    )}
                </div>

                <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${1 === this.state.page ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={(e) => this.change_page(-1)}>Previous</button>
                        </li>
                        {this.props.data.map((item, idx) =>
                            <li className={`page-item ${this.state.page === idx + 1 ? 'active' : ''}`} key={idx}>
                                <button className="page-link" onClick={(e) => this.change_page(idx + 1)}>{idx + 1}</button>
                            </li>
                        )}
                        <li className={`page-item ${this.props.data.length === this.state.page ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={(e) => this.change_page(0)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}