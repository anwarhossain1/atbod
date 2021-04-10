import React, { Component } from "react";
import { Typography, Card, Layout, Row, Col } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./gggg.jpg";
import img2 from "./hhhh.jpg";
import img3 from "./mask.jpg";

import st1 from "./step1.jpg";
import st2 from "./step2.jpg";
import st3 from "./step3.jpg";
import st4 from "./step4.jpg";

import tt1 from "./business-banner.jpg";
import tt2 from "./business-banner2.jpg";
import tt3 from "./business-banner3.jpg";

import ct1 from "./cusomer-bg.jpg";
import lt1 from "./livestream.png";

import SimpleImageSlider from "react-simple-image-slider";
import "./homepage.css";

import i1 from './icon-down.png';
import i2 from './icon-down2.png';

import { Input, Space } from "antd";

const { Title } = Typography;
const { Content } = Layout;
const { Search } = Input;
const { Meta } = Card;
const images = [
  { url: img3 },
  { url: img1 },
  // 'images/slide_2.jpg',
  // 'images/slide_3.jpg',
  // 'images/slide_4.'
];
export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Content>
          <div className="heru">
            <SimpleImageSlider width="100%" height={900} images={images} />
            <h1>LOREM IPSUM DOLOR SIT AMET CONSETETUR SADIPSCING ELITR</h1>
            <small>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </small>
            <button>Read More<i style={{paddingLeft:"25px", color:"white",fontSize:"22px"}} class="fa fa-angle-right"></i></button>
            {/* //<button className="iconDown"><i src={i1}/>ggg<i src={i2}/></button> */}
          </div>
          <div className="icon-bar">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fa fa-phone"></i>
            </a>
            <a href="#">
              <i class="fa fa-commenting-o"></i>
            </a>
          </div>

          <div className="implement-con">
            <h1>
              Implement smarter business systems
            </h1>
            <Title
              style={{ textAlign: "center", paddingBottom: "25px" }}
              level={3}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </Title>
            
            <div className="flex-container">
              <small>
                Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
                <br />
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore
                <br />
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                et
                <br />
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                <br />
                takimata sanctus est Lorem ipsum dolor sit amet.
              </small>
             
             

              <img
                // style={{ float: "right", paddingBottom: "10px" }}
                src={img1}
                style={{ height: 300, padding:"40px" }}
              />
               <button>Learn More <i style={{paddingLeft:"25px",fontSize:"22px"}} class="fa fa-angle-right"></i></button>
            </div>
          </div>
          <div className="consultus-container">
            <img src={img2} />
            <h1>Consult with us</h1>
            <small>
              <span>How your business get smarter?</span>
              <br /><br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam
            </small>
            <button>Get Started<i style={{paddingLeft:"25px",fontSize:"22px"}} class="fa fa-angle-right"></i></button>
          </div>
          <div>
            <div className="cards-container">
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 240, borderRadius: "10px" }}
                  cover={<img alt="example" src={st1} />}
                ></Card>
              </Space>
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={st2} />}
                ></Card>
              </Space>
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={st3} />}
                ></Card>
              </Space>
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={st4} />}
                ></Card>
              </Space>
              {/* <Row
                className="row"
                gutter={16}
              >
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
              </Row> */}
            </div>
          </div>
          <div className="turn-ideas-container">
            <img src={img1} style={{ width: "100%"}} />
            <h1>Turn Your Ideas Into Reality</h1>
            <small>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr<br/> sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </small>
            <button>See More Products<i style={{paddingLeft:"25px",fontSize:"22px"}} class="fa fa-angle-right"></i></button>
          </div>
          {/* <div>
            <img src={img2} style={{ width: "100%", height: 600 }} />
            <Title>Consult with us</Title>
            <p>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
            <button>Get Started</button>
          </div> */}

          <div className="cusomer-bg">
            <img src={ct1} />
            <div className="gg">
              <img src={lt1}/>
            </div>
            <h2>SPECIALITIES</h2>
            <p>" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat "</p>
            <small><a><i style={{paddingLeft:"25px",fontSize:"22px"}} class="fa fa-angle-right"></i><i style={{paddingLeft:"2px",paddingRight:"15px",fontSize:"22px"}} class="fa fa-angle-right"></i>EXPLORE MORE<i style={{paddingLeft:"15px",fontSize:"22px"}} class="fa fa-angle-right"></i><i style={{paddingLeft:"2px",fontSize:"22px"}} class="fa fa-angle-right"></i></a></small>
          </div>

          <div className="latest-con">
            <h1>Latest News</h1>
            <hr style={{ width: 70 }} />
            <p>
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="cards-container">
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img style={{ height: 200 }} alt="example" src={tt1} />
                  }
                >
                  <Meta
                    title="Business Trend Consultancy"
                    description="Lorem must explain to you how all this mistakenea of denouncing pleasure and praising pain was rnad I will give you a complete pain was praising"
                  />{" "}
                  <br />
                  <a>READ MORE  </a>
                </Card>
              </Space>
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img style={{ height: 200 }} alt="example" src={tt2} />
                  }
                >
                  <Meta
                    title="Business Trend Consultancy"
                    description="Lorem must explain to you how all this mistakenea of denouncing pleasure and praising pain was rnad I will give you a complete pain was praising"
                  />{" "}
                  <br />
                  <a>READ MORE  </a>
                </Card>
              </Space>
              <Space align="center" style={{ padding: "20px" }}>
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img style={{ height: 200 }} alt="example" src={tt3} />
                  }
                >
                  <Meta
                    title="Business Trend Consultancy"
                    description="Lorem must explain to you how all this mistakenea of denouncing pleasure and praising pain was rnad I will give you a complete pain was praising"
                  />
                  <br />
                  <a>READ MORE  </a>
                </Card>
              </Space>
              {/* <Row 
                // style={{ margin: "50px", paddingLeft: 300, paddingRight: 300 }}
                gutter={16}
              >
                <Col span={8}>
                  <Card bodyStyle={{padding: "0"}}
                    hoverable
                    style={{ width: 350 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>
                </Col>
              </Row> */}
            </div>
          </div>
          <div className="subscribe-container">
            <img src={img1} style={{ width: "100%", height: 380 }} />
            <h1>
              Subscribe <hr />
            </h1>

            <div className="ss">
              <Space direction="vertical">
                <Search
                  placeholder="Enter your email here"
                  allowClear
                  enterButton="Subscribe"
                  size="large"
                  style={{ width: 360 }}
                />
              </Space>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

