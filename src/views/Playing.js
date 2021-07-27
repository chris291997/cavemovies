
import React, {useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from "assets/img/CV.png";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardLink,
  CardText,
  CardSubtitle,
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


function Playing(props) {


    const history = useHistory();

    let location = useLocation();

const [data ,setData] = useState('');

useEffect(() =>{

  if(location.value){
    const dataval = location.value.arrval[0];
    if(dataval === ""){
      console.log('wara');
    }else{
      console.log(dataval);
      setData(dataval.data);
    }
  }else{
    back();
    const dataval = '';
  }

},[data]);

const back = () => {
    history.push({pathname: "/admin/Home"});
   }


  return (
    <>
      <div className="content">
      <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="12">
                    <CardTitle tag="h2">Now Playing</CardTitle>
                  </Col>
                  
                </Row>
              </CardHeader>
              <CardBody>
              <ReactPlayer url='https://www.2embed.ru/embed/tmdb/movie?id=602223' />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Playing;
