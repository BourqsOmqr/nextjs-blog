import React from 'react'

export default class Scroll extends React.Component {
  componentDidMount() {
    if (window !== undefined) {
      window.addEventListener("scroll", this.handeleScroll);
    }
  }


  componentWillUnmount() {
    if (window !== undefined) {
      window.removeEventListener("scroll", this.handeleScroll);
    }
  }


  handeleScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("scrollButton").style.display = "block";
    } else {
      document.getElementById("scrollButton").style.display = "none";
    }
  }

  topFunction = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      if (window !== undefined) {
        window.requestAnimationFrame(this.topFunction);
        window.scrollTo(0, c - c / 8);
      }

    }
  }

  render() {
    return (
      <button id="scrollButton" className="btn btn-light btn-lg back-to-top" onClick={this.topFunction}>
        <i className="fas fa-chevron-up"></i>
      </button>
    );
  }
}