import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col, Form } from 'react-bootstrap';

import './index.scss';

class DetailProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      image: props.image,
      color: props.color,
      docType: props.docType,
      quantity: props.quantity,
      make: props.make,
      owner: props.owner,
      price: props.price
    };
  }

  render() {
    if (!this.state.id) {
      return <Redirect to="/" />;
    }

    return (
      <Col md={12}>
        <h1>{this.state.name}</h1>
        <div className="tabs" id="accountSettings">
          <div className="tab-content">
            <Form.Group controlId="name">
              <label>Name</label>
              <Col sm="9">
                <input type="text" id="name" name="name" className="form-control" value={this.state.name} readOnly />
              </Col>
            </Form.Group>

            <Form.Group controlId="docType">
              <label>Product Type</label>
              <Col sm="9">
                <input
                  type="text"
                  id="docType"
                  name="docType"
                  className="form-control"
                  value={this.state.docType}
                  readOnly
                />
              </Col>
            </Form.Group>

            <Form.Group controlId="price">
              <label>Price</label>
              <Col sm="9">
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="form-control"
                  value={this.state.price}
                  readOnly
                />
              </Col>
            </Form.Group>

            <Form.Group controlId="quantity">
              <label>Quantity</label>
              <Col sm="9">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control"
                  value={this.state.quantity}
                  readOnly
                />
              </Col>
            </Form.Group>

            <Form.Group controlId="description">
              <label>Description</label>
              <Col sm="9">
                <textarea
                  rows="4"
                  cols="50"
                  name="description"
                  className="form-control"
                  readOnly
                  value={this.state.description}
                >
                  {this.state.description}
                </textarea>
              </Col>
            </Form.Group>

            <Form.Group controlId="image">
              <label>Featured Image</label>
              <Col sm="10" className="profile-image-holder">
                <img
                  src={this.state.image}
                  alt="Profile"
                  className="profile-image"
                  style={{ display: this.state.image ? 'block' : 'none' }}
                />
              </Col>
            </Form.Group>

            <br />
            <hr />
            <br />
          </div>
        </div>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { id, name, description, image, color, docType, make, owner, price, quantity } = state.UPDATE_PRODUCT;

  return {
    id,
    name,
    description,
    image,
    color,
    docType,
    make,
    owner,
    price,
    quantity
  };
}

const detailProduct = connect(mapStateToProps)(DetailProduct);
export { detailProduct as DetailProduct };