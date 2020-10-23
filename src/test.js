import React, { Component } from "react";
import Img from "./image.jpg";
import { Card } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Alouani ElHabib",
        bio: "BI engineer",
        imgSrc: { Img },
        profession: "computer engineer",
        show: false,
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState({
      count: 0,
      person: { ...this.state.person, show: !this.state.person.show },
    });
  };

  toggledButon = () => {
    return (
      <div className="btnToggled">
        {this.state.person.show ? (
          <div>
            <p>{this.state.count} seconds since componentDidMount</p>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Img} />
              <Card.Body>
                <Card.Title>{this.state.person.fullName}</Card.Title>
                <Card.Text>{this.state.person.profession}</Card.Text>
                <Card.Title>{this.state.person.bio}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="test">
        <button
          onClick={(e) => {
            this.handleClick();
          }}
          type="button"
          className="btn btn-primary"
        >
          Afficher Profil{" "}
        </button>
        {this.toggledButon()}
      </div>
    );
  }
}

test.propTypes = {};

export default test;
