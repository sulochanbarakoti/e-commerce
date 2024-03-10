import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import data_product from "../Assets/data";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Popular.css";

const Popular = () => {
  return (
    <Container className="mt-4">
      <Row>
        <div className="fs-3 fw-bolder" style={{ textAlign: "center" }}>
          POPULAR IN WOMEN
        </div>
      </Row>
      <Row className="mt-3">
        {/* Map through the array of products and create a new component for each one */}
        {data_product.map((item, index) => (
          <Col>
            <Card style={{ width: "18rem" }} className="m-3">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p className="fw-semibold">
                    ${item.new_price}
                    {"  "}
                    <span className="text-decoration-line-through">
                      ${item.old_price}
                    </span>
                  </p>
                </Card.Text>
                <Button variant="outline-success">
                  Go To Product <BsArrowRightCircleFill />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
