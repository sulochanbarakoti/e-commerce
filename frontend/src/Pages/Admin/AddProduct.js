import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Form, Row, Dropdown, Button } from "react-bootstrap";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productDetail, setProductDetail] = useState({
    name: "",
    old_price: Number,
    new_price: Number,
    category: null,
    image: null,
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setProductDetail((prev) => ({ ...prev, [name]: value }));
  };

  const onFileChange = (e) => {
    productDetail.image = e.target.files[0];
  };

  const handleSubmit = async () => {
    productDetail.category = selectedCategory;
    console.log(productDetail);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/product/add",
        productDetail,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={handleClick}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label>
                  <div className="fw-bold">Price:</div>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  onChange={handleClick}
                  name="old_price"
                />
              </Col>
              <Col>
                <Form.Label>
                  <div className="fw-bold">New Price:</div>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter new price"
                  onChange={handleClick}
                  name="new_price"
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Category:</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  {selectedCategory || "Select Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedCategory("Womens");
                    }}
                  >
                    Women
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedCategory("Mens");
                    }}
                  >
                    Men
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedCategory("Kids");
                    }}
                  >
                    Kids
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Product Image:</Form.Label>
              <Form.Control type="file" onChange={onFileChange} required />
            </Form.Group>
            <Form.Group className="py-3">
              {" "}
              <Button
                variant="outline-success"
                className="fw-bold"
                onClick={handleSubmit}
              >
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
