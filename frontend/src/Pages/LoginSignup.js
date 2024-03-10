import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginSignup = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleModeChange = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      // Handle login
    } else {
      // Handle signup
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {mode === "login" ? "Login" : "Sign Up"}
            </Button>
          </Form>
          <p>
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Button variant="link" onClick={handleModeChange}>
              {mode === "login" ? "Sign Up" : "Login"}
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
