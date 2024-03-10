import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Container, Image, Card, Button, Col, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  return (
    <div>
      <Image src={props.banner} />
      <Container>
        <Row className="mt-3">
          <Col>Showing 1-12 out of 36 products</Col>
          <Col className="text-end">Sort by</Col>
        </Row>
        <Row>
          {" "}
          {all_product.map((item, index) => {
            if (item.category === props.category) {
              return (
                <Col key={index}>
                  <Card style={{ width: "18rem" }} className="m-3">
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        <div className="fw-semibold">
                          ${item.new_price}
                          {"  "}
                          <span className="text-decoration-line-through">
                            ${item.old_price}
                          </span>
                        </div>
                      </Card.Text>
                      <Button variant="outline-success">
                        Go To Product <BsArrowRightCircleFill />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShopCategory;
