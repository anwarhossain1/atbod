import React, { Component } from "react";
import { Typography, Card, Layout, Row, Col } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./gggg.jpg";
import img2 from "./hhhh.jpg";
import SimpleImageSlider from "react-simple-image-slider";

const { Title } = Typography;
const { Content } = Layout;
const images = [
    { url: img2 },
    { url: img1 },
  // 'images/slide_2.jpg',
  // 'images/slide_3.jpg',
  // 'images/slide_4.jpg'
];
export default class Homepage extends Component {
  render() {
    return (
        <div>
           
        
      <Content>
      <div>
      <SimpleImageSlider
        width='100%'
        height={700}
        images={images}
      />
    </div>
       
          

          <Title style={{ textAlign: "center" }}>
            Implement smarter business systems
          </Title>
          <Title style={{ textAlign: "center" }} level={3}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </Title>
          <div>
            <p>
              Lorem ipsum Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <button>Learn More</button>
            <img src={img1} style={{ height: 200 }} />
          </div>
          <div>
            <img src={img2} style={{ width: "100%", height: 600 }} />
            <Title>Consult with us</Title>
            <p>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
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
          <div>
            <img src={img1} style={{ width: "100%", height: 600 }} />
            <Title>Turn Your Ideas Into Reality</Title>
            <p>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
            <button>See More Products</button>
          </div>
          <div>
            <img src={img2} style={{ width: "100%", height: 600 }} />
            <Title>Consult with us</Title>
            <p>
              How your business get smarter? Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
            <button>Get Started</button>
          </div>
          <div style={{ textAlign: "center" }}>
            <Title>Latest News</Title>
            <p>
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
          <div>subscribe</div>
        
      </Content>
      </div>
    );
  }
}
