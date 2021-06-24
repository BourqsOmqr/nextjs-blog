import React from 'react';
import Link from "next/link";

export default class Desc extends React.Component {

    render() {
        let title = this.props.data && this.props.data.title ? this.props.data.title : "Please add title"
        let desc = this.props.data && this.props.data.desc ? this.props.data.desc : "Please add desc"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" >
                        <div className="jumbotron">
                            <h1 className="display-4">
                                <div dangerouslySetInnerHTML={{ __html: title }} />
                            </h1>
                            <p className="lead"><div dangerouslySetInnerHTML={{ __html: desc }} /></p>
                            {this.props.active &&
                                <Link href="/about">
                                    <a className="btn btn-danger btn-lg" role="button">Learn more</a>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}