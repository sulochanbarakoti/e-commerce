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
import { BsArrowRightCircleFill } from "react-icons/bs";
import new_collections from "../Assets/new_collections";

const NewCollection = () => {
  return (
    <Container className="mt-4">
      <Row>
        <div className="fs-3 fw-bolder" style={{ textAlign: "center" }}>
          NEW COLLECTIONS
        </div>
      </Row>
      <Row className="mt-3">
        {/* <Stack> */}
        {/* Map through the array of products and create a new component for each one */}
        {new_collections.map((item, index) => (
          <Col>
            <Card style={{ width: "18rem" }} className="mb-3 hvr-float">
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
        {/* </Stack> */}
      </Row>
    </Container>
  );
};

export default NewCollection;
