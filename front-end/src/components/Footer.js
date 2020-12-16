import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; eShop</Col>
        </Row>
      </Container>
    </footer>
  );
};
