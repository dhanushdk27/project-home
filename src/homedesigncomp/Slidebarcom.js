import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row } from 'reactstrap';
import "./carousel.css";

function Slidebarcom() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Row style={{ padding: "3rem",
                    backgroundColor:"#fff",
                    marginTop:"1rem",
                    boxShadow: "rgb(0 0 0 / 8%) -1px 20px 20px 17px",
                marginLeft:"2rem"}}
                    lg={9}>
                        <div className='transe'>
            <Carousel style={{}} responsive={responsive}>
            <div><img style={{ width: "20rem" , height:"13.3rem"}} src="https://static.wixstatic.com/media/4e6fb5_71442c85fab144ecb5d2ca3cbdd0db58~mv2.jpg/v1/fill/w_1557,h_753,al_c/4e6fb5_71442c85fab144ecb5d2ca3cbdd0db58~mv2.jpg" /></div>
                <div><img style={{ width: "20rem" }} src="https://media.istockphoto.com/photos/high-school-girl-student-at-school-wearing-n95-face-masks-picture-id1226240108?k=6&m=1226240108&s=170667a&w=0&h=3C3WCMxLTXpwMIeFq4cXOkbL7onBHcepCGa51fyn2Tg=" /></div>
                <div><img style={{ width: "20rem" }} src="https://astanatimes.com/wp-content/uploads/2015/09/Esquire-Male-Grooming-Salon-4.jpg" /></div>
                <div><img style={{ width: "20rem", height:"13rem" }} src="https://www.gannett-cdn.com/presto/2021/01/12/NOBD/81d2769c-9239-4c7d-a889-fdca9a440743-GettyImages-1216606844.jpg?crop=2120,1193,x0,y107&width=2120&height=1193&format=pjpg&auto=webp" /></div>
                <div><img style={{ width: "20rem" }} src="https://www.theglassworksgym.co.uk/wp-content/uploads/2018/11/Red-Haired-Girl-Getting-Haircut-in-Salon-1920x1280.jpg" /></div>
                <div><img style={{ width: "20rem" }} src="https://image.freepik.com/free-photo/electronics-hobby-men_1098-15475.jpg" /></div>
                <div><img style={{ width: "20rem" }} src="https://www.salushomecare.com/app/uploads/sites/4/2018/01/iStock-856952836.jpg" /></div>
                <div><img style={{ width: "20rem" }} src="https://vet-advantage.com/wp-content/uploads/sites/5/2020/08/veterinary-clinic-disinfection.jpg" /></div>
                
            </Carousel>
            </div>
        </Row>
    );
}

export default Slidebarcom;