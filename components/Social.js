import React from 'react';
import axios from 'axios'
import { api } from '../helpers/constant';
export default class Social extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: {},
            social: {},
            status: false
        }
    }


    render() {
        if (this.props.status) {
            let title = this.props.title ? this.props.title.social : "Please add title"
            let facebook = this.props.social.facebook && this.props.social.facebook === "" ? false : this.props.social.facebook
            let twitter = this.props.social.twitter && this.props.social.twitter === "" ? false : this.props.social.twitter
            let linkdin = this.props.social.linkdin && this.props.social.linkdin === "" ? false : this.props.social.linkdin
            let insta = this.props.social.insta && this.props.social.insta === "" ? false : this.props.social.insta
            let telegram = this.props.social.telegram && this.props.social.telegram === "" ? false : this.props.social.telegram
            return (
                <footer className="page-footer font-small blue-grey lighten-5">
                    <div id="footer">
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0" style={{ color: 'white' }}>{title}</h6>
                                </div>
                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                    {facebook && <a className="fb-ic" href={facebook} target="__blank" id="icon-footer" >
                                        <i className="fab fa-facebook-f white-text mr-4"> </i>
                                    </a>}
                                    {twitter && <a className="tw-ic" href={twitter} target="__blank" id="icon-footer">
                                        <i className="fab fa-twitter white-text mr-4"> </i>
                                    </a>}
                                    {linkdin && <a className="gplus-ic" href={linkdin} target="__blank" id="icon-footer">
                                        <i className="fab fa-linkedin-in white-text mr-4"> </i>
                                    </a>}
                                    {insta && <a className="li-ic" href={insta} target="__blank" id="icon-footer">
                                        <i className="fab fa-instagram white-text mr-4"> </i>
                                    </a>}
                                    {telegram && <a className="ins-ic" href={telegram} target="__blank" id="icon-footer">
                                        <i className="fab fa-telegram white-text"> </i>
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
        else return null;
    }
}