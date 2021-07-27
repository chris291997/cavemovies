
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


function RiderManagement(props) {
 
  return (
    <>
      <div className="content">
      <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="12">
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RiderManagement;
