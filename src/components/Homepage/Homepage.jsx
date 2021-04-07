import React, { Component } from "react";
import { Typography, Card, Layout, Row, Col } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./gggg.jpg";
import img2 from "./hhhh.jpg";
import img3 from './mask.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import "./homepage.css";


import { Input, Space } from "antd";

const { Title } = Typography;
const { Content } = Layout;
const { Search } = Input;
const images = [
  { url: img3 },
  { url: img1 },
  // 'images/slide_2.jpg',
  // 'images/slide_3.jpg',
  // 'images/slide_4.jpg'
];
export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Content>
          <div className="heru">
            
            <SimpleImageSlider width="100%" height={900} images={images} />
            <h1>LOREM IPSUM DOLOR SIT AMET
CONSETETUR SADIPSCING ELITR</h1>
<small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</small>
<button>Read More</button>
          </div>
          <div className="icon-bar">
          <a href="#"><i class="fa fa-facebook"></i></a> 
  <a href="#"><i class="fa fa-envelope"></i></a> 
  <a href="#"><i class="fa fa-phone"></i></a>
    <a href="#"><i class="fa fa-commenting-o"></i></a> 


          </div>

          <div className="implement-con">
          <Title>
            Implement smarter business systems
          </Title>
          <Title style={{ textAlign: "center",paddingBottom:"25px" }} level={3}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </Title>
         
          <div className="flex-container">
            <small
            >
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              <br />
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              <br />
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              <br />
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              <br />
              takimata sanctus est Lorem ipsum dolor sit amet.
            </small>

            <img
              style={{ float: "right", paddingBottom: "10px" }}
              src={img1}
              style={{ height: 300 }}
            />
          </div>
          </div>
          <div className="consultus-container">
            <img src={img2}/>
            <h1>Consult with us</h1>
            <small>
              <span>How your business get smarter?</span>
              <br /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam
            </small>
            <button>Get Started</button>
          </div>
          <div>
            <div className="cards-container">
              <Space align="center" style={{padding:"20px"}}>
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

              </Space>
              <Space align="center" style={{padding:"20px"}}>
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

              </Space>
              <Space align="center" style={{padding:"20px"}}> 
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
            <img src={img1} style={{ width: "100%", height: 600 }} />
            <h1>Turn Your Ideas Into Reality</h1>
            <small>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </small>
            <button>See More Products</button>
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
          <div className="latest-con">
            <h1>Latest News</h1>
            <hr style={{width:70}} />
            <p>
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="cards-container">
            <Space align="center" style={{padding:"20px"}}>
              <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>

              </Space>
              <Space align="center" style={{padding:"20px"}}>
              <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>

              </Space>
              <Space align="center" style={{padding:"20px"}}> 
              <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  ></Card>

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
            <h1>Subscribe <hr/></h1>
           
            <div className="ss">
            <Space direction="vertical">
              <Search
                placeholder="Enter your email here"
                allowClear
                enterButton="Subscribe"
                size="large"
                style={{ width: 376}}
                
              />
            </Space>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}
