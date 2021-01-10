import React from "react";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../store/actions/cartActions";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(paymentMethod);
    dispatch(savePaymentMethod({ paymentMethod }));
    history.push("/placeorder");
  }
  return (
    <FormContainer>
      <CheckoutSteps stepOne stepTwo stepThree></CheckoutSteps>
      <h1>Payment Method</h1>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        </Form.Group>
        <Col>
          <Form.Check
            type="radio"
            label="paypal or credit card"
            id="paypal"
            name="paymentMethod"
            value={paymentMethod}
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
