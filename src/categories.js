import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';



function Categories() {
    const [dataCategory, setDataCategory] = useState([]);
    const [categorieswithoutDups, setCategorieswithoutDups] =useState([]);

    useEffect(() => {
        let getCatagoryData = async () => {
            let data = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            setDataCategory(await data.data);
            let colWithoutDup =[];
            let categoriesWithoutDuplicates = await data.data.map(e=>{

             if(!colWithoutDup.includes(e.mainCategory)){
                 if(e.mainCategory != undefined){
                    colWithoutDup.push(e.mainCategory);
                 }
                

             }

            });
            setCategorieswithoutDups(colWithoutDup)
        };
           getCatagoryData();
    }, [])
    let icons = {
        "Electrician": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        "Cleaning & pest Control": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        "AC/Appliance Repair": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
        "Plumbers & Carpenters": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    }
    return (
        <Row style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Col lg={6}>
                <Row style={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "4px",
                    boxShadow: "rgb(0 0 0 / 8%) -1px 20px 20px 17px",
                    backgroundColor: "#fff",
                    marginTop: "-4rem",
                    padding: "3%",
                    textAlign: "center"
                }}>
                    {categorieswithoutDups.map((e) => (

                        <Col style={{ height: "fit-content" }} lg={2}>
                            <Avatar size={50} src={icons[e]} />
                            <p>{e}</p>
                        </Col>

                    ))}


                </Row>
            </Col>
        </Row>


    );

}
export default Categories;