
import React ,{useState, useEffect}from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { Link , useHistory, useLocation} from "react-router-dom";
import Api from 'vars'
import logo from "assets/img/CV.png";
import '../assets/css/card.css';

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

function Popular(props) {

    const history = useHistory();
    const passtoview = (rcode) => {
        let arrval = [{
            data : rcode,
           
        }];
        // console.log(arrval);
     console.log(props);

    history.push({pathname: "/admin/Playing", value: { arrval}  });
        // <Link to={{ pathname: '/RiderRegister', value: { arrval}  }}></Link>
    }

useEffect( () => {
    getPopulars();
},[])




function getPopulars(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api}&language=en-US&page=1`,{
        method: 'POST',
      
        })
        .then(response => response.json())
        
            .then((data) =>{  
                // console.log(data.results);
                setPopulars(data.results);
        })
}

const [populars, setPopulars] = useState([]);

console.log(populars);


  return (
    <>


      <div className="content">
      <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                  <Col className="text-left" sm="12">
                    <CardTitle tag="h2">Popular Movies</CardTitle>
                  </Col>      
              </CardHeader>
              <CardBody >
                    {populars.map((pops, index) => (
                       <div className="movie-card" key={pops.id}>
                       <div className="movie-header " style={{backgroundImage: "url(" + `http://image.tmdb.org/t/p/original${pops.poster_path}` + ")", 
                       backgroundSize: 'cover',
                        height: 'auto'
                       }}>
                           <div className="header-icon-container">
                               <a href={`https://www.2embed.ru/embed/tmdb/movie?id=${pops.id}`} target="_blank">
                                   <i className="tim-icons icon-triangle-right-17 header-icon"></i>
                               </a>
                           </div>
                       </div>
                       <div className="movie-content">
                           <div className="movie-content-header">
                               <a href="#">
                                   <span className="movie-title">{pops.original_title}</span>
                               </a>
                               <div className="imax-logo"></div>
                           </div>
                           <div className="movie-info">
                               <div className="info-section">
                                   <span className="__label blacker">{pops.release_date}</span>
                                   {/* <span>Sun 8 Sept - 10:00PM</span> */}
                               </div>
                               <div className="info-section">
                                   <span className="__label blacker">{pops.original_language}</span>
                                   {/* <span>03</span> */}
                               </div>
                               {/* <div class="info-section">
                                   <span className="__label blacker">Row</span>
                                   <span>F</span>
                               </div>
                               <div class="info-section">
                                   <span className="__label blacker">Seat</span>
                                   <span>21,22</span>
                               </div> */}
                           </div>
                       </div>
                   </div>
                        ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Popular;

{/* <div class="basic-column w-col w-col-3">
<Card style={{backgroundColor: '#222222', height: 300}}>
    <CardBody>
    <CardTitle tag="h5">{pops.original_title}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{pops.release_date}</CardSubtitle>
    </CardBody>
    <img width="100%" src={`http://image.tmdb.org/t/p/original${pops.poster_path}`} style={{width: 200, height: 250}} alt="Card image" />
    <CardBody> */}
    {/* <CardText>{pops.overview}</CardText> */}
    {/* <CardLink onClick={() => passtoview("dummy")}>Play</CardLink>
    <CardLink href="#">Another Link</CardLink>
    </CardBody>
</Card>

</div> */}

{/* <div class="movie-card">
    <div class="movie-header manOf " style={{backgroundImage: "url(" + "http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg" + ")", backgroundSize: 'cover'}}>
        <div class="header-icon-container">
            <a href="#">
                <i class="tim-icons icon-triangle-right-17 header-icon"></i>
            </a>
        </div>
    </div>
    <div class="movie-content">
        <div class="movie-content-header">
            <a href="#">
                <span class="movie-title">Man of Steel</span>
            </a>
            <div class="imax-logo"></div>
        </div>
        <div class="movie-info">
            <div class="info-section">
                <span className="__label blacker">Date & Time</span>
                <span>Sun 8 Sept - 10:00PM</span>
            </div>
            <div class="info-section">
                <span className="__label blacker">Screen</span>
                <span>03</span>
            </div>
            <div class="info-section">
                <span className="__label blacker">Row</span>
                <span>F</span>
            </div>
            <div class="info-section">
                <span className="__label blacker">Seat</span>
                <span>21,22</span>
            </div>
        </div>
    </div>
</div> */}
