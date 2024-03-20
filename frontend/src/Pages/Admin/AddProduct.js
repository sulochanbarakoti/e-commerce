import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  return (
    <Container>
      <Row className="border border-3 rounded w-auto">
        {" "}
        <Row className="text-center">
          <h3>Add Product</h3>
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>
                <div className="fw-bold">Product Name:</div>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter product name" />
            </Form.Group>
            <Form.Group>
              <Col>
                {" "}
                <Col>
                  {" "}
                  <Form.Label>
                    <div className="fw-bold">Price:</div>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter price" />
                </Col>
                <Col>
                  {" "}
                  <Form.Label>
                    <div className="fw-bold">New Price:</div>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter new price" />
                </Col>
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default AddProduct;
