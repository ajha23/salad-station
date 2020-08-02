import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

import { Item } from "../item";

import { useCartState } from "../../store/cart/cart";

import "./order-summary.scss";

export const OrderSummary = (props) => {
  const {
    onHide,
    goShoping,
    state: { name, email, notes },
  } = props;
  const { cartItems, cartItemsCount, total } = useCartState();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="order-summary">
        <Card className="card-width">
          {cartItemsCount > 0 ? (
            <Card.Header className="card-header">
              Total Items:{cartItemsCount}
            </Card.Header>
          ) : null}
          <Card.Body>
            {cartItemsCount > 0 ? (
              <div style={{ width: "100%" }}>
                <div className="order-header">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Price</span>
                </div>
                {cartItems.map((item) => (
                  <Item item={item} addToCartBtn={false} />
                ))}
                <div className="total">TOTAL: &#36;{total}</div>
              </div>
            ) : (
              <div>
                <h4>No items in your cart</h4>
                <p>Your favourite items are just a click away</p>
                <Button variant="dark" onClick={goShoping}>
                  Start Shoping
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
        {cartItemsCount > 0 ? (
          <Card className="card-width" style={{ marginTop: "2rem" }}>
            <Card.Header className="card-header">User Details</Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{email}</Card.Text>
              <Card.Text>{notes}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Thank You. Delivery is on it's way
            </Card.Footer>
          </Card>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
