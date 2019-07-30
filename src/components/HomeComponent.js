import React, { Component } from "react";
import SideBar from "./SideBarComponent";

import {
  Layout,
  Menu,
  Icon,
  Input,
  PageHeader,
  Typography,
  Row,
  Col,
  Card,
  Avatar,
  List
} from "antd";

const { Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Paragraph } = Typography;
const { Meta } = Card;
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  },
  {
    title: "Title 5"
  }
];

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: {
        gutter: 16,
        column: 4
      }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 760) {
      this.setState({ grid: { gutter: 16, column: 2 } });
    }
    if (window.innerWidth <= 500) {
      this.setState({ grid: { gutter: 16, column: 1 } });
    }

    if (window.innerWidth > 760) {
      this.setState({ grid: { gutter: 16, column: 4 } });
    }
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <SideBar />
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <div style={{ margin: "20px 0" }}>
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </div>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <List
                  grid={this.state.grid}
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <Card
                        cover={
                          <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                          />
                        }
                        actions={[
                          <Icon type="setting" />,
                          <Icon type="edit" />,
                          <Icon type="ellipsis" />
                        ]}
                      >
                        <Meta
                          title="Card title"
                          description="This is the description"
                        />
                      </Card>
                    </List.Item>
                  )}
                />{" "}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>John Prada ©2019</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default HomeComponent;
