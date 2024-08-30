import React from 'react';
import { Layout, Menu, Button, Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      {/* 顶部导航栏 */}
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="header-logo">MyStack</div>
        <Menu theme="light" mode="horizontal" style={{ flex: 1, justifyContent: 'center' }}>
          <Menu.Item key="1">Create your Stack</Menu.Item>
          <Menu.Item key="2">Ingredient Information</Menu.Item>
          <Menu.Item key="3">About us</Menu.Item>
        </Menu>
        <div>
          <Button type="text" icon={<UserOutlined />} style={{ color: 'black' }} />
          <Button type="text" icon={<ShoppingCartOutlined />} style={{ color: 'black' }} />
        </div>
      </Header>

      {/* Banner Section */}
      <Content className="banner-section">
        <div className="banner-text">
          <h1>Personalized Pre-Workout, Tailored to Your Needs</h1>
          <p>
            Create your perfect blend with our customizable pre-workout options. Quick, effective,
            and designed to support your fitness goals.
          </p>
          <Button type="primary" size="large" style={{ backgroundColor: 'black', borderColor: 'black' }}>
            Create your Stack
          </Button>
        </div>
        <div className="banner-image">
          <img src="https://via.placeholder.com/300x400" alt="Product" />
        </div>
      </Content>

      {/* Features Section */}
      <Content className="features-section">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card bordered={false}>
              <h2>Personalized for Every Goal</h2>
              <p>
                Whether you’re looking for a caffeine kick or muscle endurance, our customizable options have you covered.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <h2>High-Quality Ingredients</h2>
              <p>
                We only use premium, scientifically-backed ingredients to ensure you get the best results.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <h2>Sustainable and Transparent</h2>
              <p>
                Our products are crafted with sustainability in mind, with clear labels and no hidden fillers.
              </p>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Why Choose Section */}
      <Content className="why-choose-section">
        <h2>Why Choose My Stack?</h2>
        <ul>
          <li>Customizable formulas tailored to your needs</li>
          <li>Scientifically-backed ingredients for optimal performance</li>
          <li>Easy to mix and take on-the-go</li>
          <li>Affordable pricing, starting from just $1.75 per serving</li>
        </ul>
      </Content>

      {/* Testimonials Section */}
      <Content className="testimonials-section">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card bordered={false}>
              <h3>Name, what they do</h3>
              <p>“Testimony ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <h3>Name, what they do</h3>
              <p>“Testimony ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Community Section */}
      <Content className="community-section">
        <h2>Join the My Stack Community</h2>
        <p>Share your experience with #MyStack and get featured on our Instagram!</p>
      </Content>

      {/* Footer Section */}
      <Footer className="footer-section">
        <div className="footer-content">
          <div>
            <h3>MyStack</h3>
            <p>About us | FAQs | Contact Us | Delivery | Terms | Returns</p>
          </div>
          <div className="footer-icons">
            <a href="#"><img src="https://via.placeholder.com/24" alt="Twitter" /></a>
            <a href="#"><img src="https://via.placeholder.com/24" alt="Instagram" /></a>
            <a href="#"><img src="https://via.placeholder.com/24" alt="YouTube" /></a>
            <a href="#"><img src="https://via.placeholder.com/24" alt="Facebook" /></a>
          </div>
          <p>*insert copyright notice* 2024</p>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
