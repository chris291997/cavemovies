
import React ,{useState, useEffect}from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { Link , useHistory, useLocation} from "react-router-dom";
import Api from 'vars'
import logo from "assets/img/CV.png";


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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

function Home(props) {


   

    // function getWindowDimensions() {
    //     const { innerWidth: width, innerHeight: height } = window;
    //     return {
    //       width,
    //       height
    //     };
    //   }
     
    const [sliderRef] = useKeenSlider({
        spacing: 10,
        slidesPerView: 1,
        centered: true,
        loop: true,
        breakpoints: {
          "(min-width: 768px)": {
            slidesPerView: 3
          },
          "(min-width: 1200px)": {
            slidesPerView: 5
          },
        },
      })




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
   setTimeout( () =>{
    movieSearch();
   },250)
},[searchresult])

 

// const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
// console.log(windowDimensions.width)

function getPopulars(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api}&language=en-US`,{
        method: 'POST',
      
        })
        .then(response => response.json())
        
            .then((data) =>{  
                // console.log(data.results);
                setPopulars(data.results);
        })
}

function movieSearch(){
    

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api}&language=en-US`,{
        method: 'POST',
      
        })
        .then(response => response.json())
        
            .then((data) =>{  
                // console.log(data.results);
               if(data.total_results === 0){
                    setSearchresult(false);

               }else{
                setSearchresult(true);
                setTimeout(() => {
                    setSearch(data);
                }, 250);
               }
        })
}

// const clickSearch = () => {
//     movieSearch(searchQuery);
// }

const [searchresult , setSearchresult] = useState(false);

const [searchQuery, setSearchQuery] = useState("");
const [sirch, setSearch] = useState([]);
const [populars, setPopulars] = useState([]);

// console.log(populars);
console.log(sirch);


function nothing(){
   return(
        <h1>
        NOthing to display
    </h1>
   )
}

function renderSearch(){
    return(
       <>
         {populars.map((ser, index) => (
                       <div className="movie-card" key={ser.id}>
                       <div className="movie-header " style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${ser.poster_path}` + ")", 
                       backgroundSize: 'cover',
                       
                       }}>
                           <div className="header-icon-container">
                               <a href={`https://www.2embed.ru/embed/tmdb/movie?id=${ser.id}`} target="_blank">
                                   <i className="tim-icons icon-triangle-right-17 header-icon"></i>
                               </a>
                           </div>
                       </div>
                       <div className="movie-content">
                           <div className="movie-content-header">
                               <a href="#">
                                   <span className="movie-title">{ser.original_title}</span>
                               </a>
                               <div className="imax-logo"></div>
                           </div>
                           <div className="movie-info">
                               <div className="info-section">
                                   <span className="__label blacker">{ser.release_date}</span>
                                   {/* <span>Sun 8 Sept - 10:00PM</span> */}
                               </div>
                               <div className="info-section">
                                   <span className="__label blacker">{ser.original_language}</span>
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
       </>
    )
}

function renderPopular(){
        return(
            
    <div ref={sliderRef} className="keen-slider">    
              {populars.map((pops, index) => (
                             <div className="keen-slider__slide"  key={pops.id} >
                                    <div className="movie-card-scroll">
                                        <div className="movie-header " style={{backgroundImage: "url(" + `http://image.tmdb.org/t/p/original${pops.poster_path}` + ")", 
                                        backgroundSize: 'cover',
                                            height: 250
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
                                </div>
                            ))}
            </div>
        )
}


  return (
    <>


      <div className="content">
   
<Row>
<Col xs="12">
<Card className="card-user">
              <CardBody>
          {renderPopular()}
              </CardBody>
             
            </Card>

</Col>
<Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                  <Col className="text-left" sm="12">
                    <CardTitle tag="h2">Movie Search</CardTitle>
                  </Col>      
                  <Row>

                  <Col className="pr-md-1 pt-2" md="6">
                  <FormGroup>
                        <Input
                          defaultValue=""
                          placeholder="Movie Title Here"
                          type="text"
                        //   onBlur={(e) => setSearchQuery(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1 " md="6">
                      <FormGroup>
                        {/* <Button className="btn-fill" size="lg" color="primary" type="submit" onClick={clickSearch()}>
                            Search Now
                            </Button> */}
                      </FormGroup>
                    </Col>
         
                  </Row>
                    

              </CardHeader>
              <CardBody >

                {searchresult ? renderSearch() : nothing()}
              
        
              </CardBody>
            </Card>
          </Col>
</Row>
      </div>
    </>
  );
}

export default Home;

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
