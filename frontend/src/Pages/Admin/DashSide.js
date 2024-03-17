import React, { useState } from "react";
import { Row, Col, Button, Stack } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

const DashSide = () => {
  const [activeComponent, setActiveComponent] = useState("addProduct");

  return (
    <div>
      <Row className="mb-3">
        <Col md={3} className="bg-success rounded" style={{ height: "100vh" }}>
          <Row className="p-3 fs-4 fw-bold text-white">
            <Stack gap={3}>
              <Button variant="success border">Dashboard</Button>
              <Button variant="success border">
                <IoIosAddCircle
                  size={20}
                  style={{ marginBottom: 5, marginRight: 5 }}
                />
                Add Product
              </Button>
              <Button variant="success border">Product List</Button>
            </Stack>
          </Row>
        </Col>
        <Col md={9}>
          {(() => {
            switch (activeComponent) {
              case "addProduct":
                return <div>hello</div>;
              case "productList":
                return <div>product list</div>;
              default:
                return null;
                break;
            }
          })()}
        </Col>
      </Row>
    </div>
  );
};

export default DashSide;
