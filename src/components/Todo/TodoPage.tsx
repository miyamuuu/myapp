import React, { useEffect, useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import TodoList from "./TodoList";
import "./TodoPage.scss";

const { Header, Sider, Content, Footer } = Layout;

const TodoPage = () => {
  // ローカルのステート一覧
  const [state, setState] = useState({
    pcSize: true,
    openDrawer: false, // モバイルスライドインメニューのOPEN/CLOSE
    screenWidth: window.innerWidth, // 画面の横幅
    screenHeight: window.innerHeight, // 画面の縦幅
  });

  // ウィンドウサイズが変更される度に処理
  const windowReSize = () => {
    if (window.innerWidth >= 768) {
      // ウィンドウサイズの横幅が768以上の場合は画面サイズを更新しモバイルスライドインメニューをOFFにする
      setState({
        ...state,
        pcSize: true,
        openDrawer: false,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    } else {
      // // ウィンドウサイズの横幅が768未満の場合は画面サイズのみを更新する
      setState({
        ...state,
        pcSize: false,
        openDrawer: false,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }
  };

  window.onresize = windowReSize;
  window.ondeviceorientation = windowReSize;

  return (
    <Layout className="todoPage">
      {state.pcSize ? (
        <Sider className="sider">
          <Menu></Menu>
        </Sider>
      ) : (
        <Drawer
          title="Basic Drawer"
          placement="left"
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
          {state.pcSize ? null : (
            <Button
              type="primary"
              onClick={() => setState({ ...state, openDrawer: true })}
            >
              memu
            </Button>
          )}
        </Header>
        <Content className="content">
          <TodoList />
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    </Layout>
  );
};

export default TodoPage;
