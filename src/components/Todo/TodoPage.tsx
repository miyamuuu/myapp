import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import TodoList from "./TodoList";
import "./TodoPage.scss";

const { Header, Sider, Content, Footer } = Layout;

const TodoPage = () => {
  // ローカルのステート一覧
  const [state, setState] = useState({
    pcSize: true, // 画面の横幅がpcサイズ(768px)以上はtrue
    openDrawer: false, // モバイルスライドインメニューのOPEN/CLOSE
    screenWidth: window.innerWidth, // 画面の横幅
    screenHeight: window.innerHeight, // 画面の縦幅
  });

  // ウィンドウサイズが変更される度に処理
  const windowReSize = () => {
    if (window.innerWidth >= 768) {
      // ウィンドウサイズの横幅が768以上の場合
      setState({
        ...state,
        pcSize: true,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    } else {
      // ウィンドウサイズの横幅が768未満の場合
      setState({
        ...state,
        pcSize: false,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }
    console.log(state.pcSize);
  };

  window.onresize = windowReSize;
  window.ondeviceorientation = windowReSize;

  return (
    <Layout
      className="todoPage"
      style={{ height: state.screenHeight, width: state.screenWidth }}
    >
      {state.pcSize ? (
        <Sider className="sider">
          <p>aaaaa</p>
        </Sider>
      ) : (
        <Drawer
          title="MENU"
          placement="right"
          width="100%"
          zIndex={1}
          closable={false}
          onClose={() => setState({ ...state, openDrawer: false })}
          open={state.openDrawer}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      )}
      <Layout className="contentArea">
        <Header className="header">
          <Typography>Todoリスト</Typography>
          {state.pcSize || (
            <Button
              className="MenuButton"
              icon={state.openDrawer ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setState({ ...state, openDrawer: !state.openDrawer })}
            />
          )}
        </Header>
        <Content className="content">
          <TodoList pcSize={state.pcSize} />
        </Content>
        <Footer className="footer">
          <p>Miyamoto Tomoya 2023</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default TodoPage;
