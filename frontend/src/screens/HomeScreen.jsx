import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

//type rafce
import React from "react";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            {/* <h3>{product.name}</h3> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
