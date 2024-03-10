import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcurms = (props) => {
  const { product } = props;
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/${product.category}`}>
          {product.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcurms;
