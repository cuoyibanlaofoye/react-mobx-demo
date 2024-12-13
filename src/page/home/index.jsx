import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
require('./style.css')

const { Header, Sider, Content ,Footer} = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider  
         style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        zIndex:9999,
        left: 0,
      }} 
      trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => { this.props.history.push("/");}}>
              <Icon type="user" />
              <span >nav 1</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => { this.props.history.push("/one");}}>
              <Icon type="user" />
              <span >nav 1</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => { this.props.history.push("/from");}}>
              <Icon type="upload" />
              <span >nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 ,height:'68px',backgroundColor:'#000'}}>
             header
          </Header>
          <Content style={{ margin: '10px 10px 0', overflow: 'initial' ,paddingLeft:'200px'}}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center',position:'fixed',bottom:'0',width:'100%',height:'40px',padding:'0',lineHeight:'40px'}}>成都云巢智联科技有限公司</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;