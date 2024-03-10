import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation, useParams } from "react-router-dom";
import Breadcurms from "../Components/Breadcrums/Breadcurms";
import { Col, Image, Row } from "react-bootstrap";

const Product = () => {
  const location = useLocation();
  const { all_product } = useContext(ShopContext);
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcurms product={product} />
      <Row>
        <Col>
          <Col md={4}>
            <Image src={product.image} />
          </Col>
          <Col md={8}>
            <Image src={product.image} />
          </Col>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Product;
