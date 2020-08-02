import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Checkout, OrderSummary, UserDetails } from "../../components";

import "./checkout-page.scss";

export const CheckoutPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [state, setState] = useState({});
  const history = useHistory();

  const handelModalClose = () => {
    setModalShow(false);
    history.push("/");
  };
  const handelSubmit = (state) => {
    setModalShow(true);
    setState(state);
  };
  const goShoping = () => {
    history.push("/shop");
  };
  return (
    <div className="checkout-page">
      <Checkout />
      <UserDetails handelSubmit={handelSubmit} />
      <OrderSummary
        state={state}
        goShoping={goShoping}
        show={modalShow}
        onHide={handelModalClose}
      />
    </div>
  );
};
