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
          <div>
            <SimpleImageSlider width="100%" height={900} images={images} />
          </div>

          <Title style={{ textAlign: "center" }}>
            Implement smarter business systems
          </Title>
          <Title style={{ textAlign: "center" }} level={3}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </Title>
          <div className="flex-container">
            <small
              style={{
                fontSize: "15px",
                textAlign: "left",
                paddingLeft: 200,
                paddingRight: "500px",
              }}
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
          <div className="consultus-container">
            <img src={img2} style={{ width: "100%", height: 600 }} />
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
            <div>
              <Row
                style={{ margin: "50px", paddingLeft: 500, paddingRight: 500 }}
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
              </Row>
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
          <div style={{ textAlign: "center" }}>
            <Title style={{paddingTop:70}}>Latest News</Title>
            <hr style={{width:70}} />
            <p style={{padding:'40px 200px'}}>
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div>
              <Row
                style={{ margin: "50px", paddingLeft: 300, paddingRight: 300 }}
                gutter={16}
              >
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
              </Row>
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
                style={{ width: 500 }}
                
              />
            </Space>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}
