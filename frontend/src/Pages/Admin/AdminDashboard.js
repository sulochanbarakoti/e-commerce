import React from "react";
import DashNav from "./DashNav";
import DashSide from "./DashSide";
import { Col, Row } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div>
      <DashNav />
      <DashSide />
    </div>
  );
};

export default AdminDashboard;
