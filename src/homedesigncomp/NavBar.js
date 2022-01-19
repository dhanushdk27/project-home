import react from "react"
import { Col, Row } from "reactstrap"
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react/cjs/react.development";

const { Search } = Input;

function NavBar({locationFromHome}) {
    const [locationObjectWithValues, setLocationObjectWithValues] = useState({})
    useEffect(()=>{
        setLocationObjectWithValues(locationFromHome)
    },[locationFromHome])

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>

            {(Object.keys(locationObjectWithValues).length > 1) ?
                (locationObjectWithValues.results.map((e,index ) => (

                    <Menu.Item key={index} icon={<UserOutlined />}>
                        {e.formatted_address}
                    </Menu.Item>
                )))
                :
                (<div></div>)
            }

        </Menu>
    );









    return (

        <div>

            <Row style={{ padding: "1%" }}>
                <Col lg={6}>
                    gvnxbvnbxaa
                </Col>
                <Col lg={6}>
                    <Row style={{ color: "#fff" }}>
                        <Col >
                            <p>blog</p>
                        </Col>
                        <Col style={{ borderbottom: "1px sloid black" }}>
                            <p>Register As Professional</p>
                        </Col>
                        <Col>
                            <p>login/sign</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{
                marginLeft: "39.5rem",
                marginTop: "6.1rem"
            }}>
                <Col>
                    <Breadcrumb style={{ color: "#fff" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>

                        <Breadcrumb.Item style={{ color: "#fff" }}>chennai</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row >
                <Col >
                    <h1 style={{
                        display: "flex",
                        color: "#fff",
                        fontWeight: "bolder",
                        marginLeft: "22rem",
                        marginTop: "1rem",
                        fontSize: "3.5rem"
                    }}>Search for all your needs...!</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} style={{
                    display: "flex",
                    justifyContent: "end"
                }}>
                    <Dropdown overlay={menu}>
                        <Button style={{
                            display: "flex",
                            alignItems: "center",

                        }}>
                            <EnvironmentOutlined />Button <DownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
                <Col lg={6}>
                    <Search placeholder="input search text" enterButton />
                </Col>
            </Row>
            <Row style={{
                display: "flex",
                marginLeft: "33rem",
                marginTop: "0.5rem"
            }}>
                <Col style={{ color: "#fff" }} lg={2}><p><u>Massage for men</u></p></Col>
                <Col style={{ color: "#fff" }} lg={2}><p><u>Home Painting</u></p></Col>
                <Col style={{ color: "#fff" }} lg={2}><p><u>Electriciouns</u> etc</p></Col>
            </Row>

        </div>


    );

}
export default NavBar;