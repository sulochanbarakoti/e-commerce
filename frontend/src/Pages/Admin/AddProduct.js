import React from "react";
import { Col, Container, Form, Row, Dropdown, Button } from "react-bootstrap";

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
                <Form.Label>
                  <div className="fw-bold">Price:</div>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
              </Col>
              <Col>
                <Form.Label>
                  <div className="fw-bold">New Price:</div>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter new price" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Select Category:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Product Image:</Form.Label>
              <Form.Control type="file" accept=".jpg,.png" />
            </Form.Group>
            <Form.Group className="py-3">
              {" "}
              <Button variant="outline-success" className="fw-bold">
                Save
              </Button>
            </Form.Group>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default AddProduct;
