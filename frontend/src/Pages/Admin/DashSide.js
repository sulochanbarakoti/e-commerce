import React, { useState } from "react";
import { Row, Col, Button, Stack } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { IoFileTrayStacked } from "react-icons/io5";
import AddProduct from "./AddProduct";

const DashSide = () => {
  const [activeComponent, setActiveComponent] = useState("addProduct");

  return (
    <div>
      <Row className="mb-3">
        <Col md={3} className="bg-success rounded" style={{ height: "100vh" }}>
          <Row className="p-3 fs-4 fw-bold text-white">
            <Stack gap={3}>
              <Button
                variant="success border"
                onClick={() => {
                  setActiveComponent("dashboard");
                }}
              >
                Dashboard
              </Button>
              <Button
                variant="success border"
                onClick={() => {
                  setActiveComponent("addProduct");
                }}
              >
                <FaCartPlus
                  size={20}
                  style={{ marginBottom: 5, marginRight: 5 }}
                />
                Add Product
              </Button>
              <Button
                variant="success border"
                onClick={() => {
                  setActiveComponent("productList");
                }}
              >
                <IoFileTrayStacked
                  size={20}
                  style={{ marginBottom: 5, marginRight: 5 }}
                />
                Product List
              </Button>
            </Stack>
          </Row>
        </Col>
        <Col md={9}>
          {(() => {
            switch (activeComponent) {
              case "dashboard":
                return <div>hello</div>;
              case "productList":
                return <div>product list</div>;
              case "addProduct":
                return <AddProduct />;
              default:
                return <div>Dashboard</div>;
            }
          })()}
        </Col>
      </Row>
    </div>
  );
};

export default DashSide;
