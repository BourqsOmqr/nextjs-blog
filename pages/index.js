
import React from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import Social from '../components/Social';
import axios from 'axios';
import { api } from '../helpers/constant';

class Index extends React.Component {

  static async getInitialProps(ctx) {
    // return { sta: "aa" }
    const desc = axios.get(api + '/description/getDesc')
    const marque = axios.get(api + '/marque/getMarque')
    const service = axios.get(api + '/services/getServices')
    const slider = axios.get(api + '/slider/getSlider')
    const title = axios.get(api + '/titles/getTitles')
    const pages = axios.get(api + '/pages/getPages')

    const social = axios.get(api + '/social/getSocial')


    return axios.all([desc, marque, service, slider, title, pages, social])
      .then(
        axios.spread((...responses) => ({
          desc: responses[0].data,
          marque: responses[1].data,
          service: responses[2].data,
          slider: responses[3].data,
          title: responses[4].data,
          pages: responses[5].data,
          social: responses[6].data,
          status: true
        }))
      ).then(function (result) {
        return result;

      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="App">

        <Scroll />
        <Navbar />
        <Home {...this.props} />
        <Social {...this.props} />
        <Footer />
      </div>
    )
  }
}
export default Index;
