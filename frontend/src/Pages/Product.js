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
          <Col className="text-center">
            <Image src={product.image} style={{ width: "auto" }} />
          </Col>
        </Col>
        <Col>
          <div className="text-start fs-2 fw-semibold">{product.name}</div>
          <div>
            <span className="fs-4 me-1 text-danger text-decoration-line-through">
              ${product.old_price}
            </span>
            <span className="fs-4 fw-semibold me-1">${product.new_price}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
