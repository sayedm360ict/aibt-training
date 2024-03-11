/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Outlet, useLocation } from "react-router-dom";
import { menuItems } from "./AppLayoutData";
import { Footer } from "antd/es/layout/layout";
import SupportMessage from "../SupportMessage/SupportMessage";
import useIsMobile from "../utils/useIsMobile";
import NavBar from "../Navbar/Navbar";

const { Content } = Layout;
const AppLayout: React.FC = () => {
  const [currentSelection, setCurrentSelection] = useState<string>("");
  const [sidebarWidth, setSidebarWidth] = useState(220); // Initial width
  const location = useLocation();
  const isMobile = useIsMobile();
  // console.log(isMobile);

  const handleResizeStart = (e: any) => {
    e.preventDefault();
    const startX = e.clientX;

    const handleResizeDrag = (e: any) => {
      const newWidth = sidebarWidth + (e.clientX - startX);
      setSidebarWidth(newWidth);
    };

    const handleResizeEnd = () => {
      document.removeEventListener("mousemove", handleResizeDrag);
      document.removeEventListener("mouseup", handleResizeEnd);
    };

    document.addEventListener("mousemove", handleResizeDrag);
    document.addEventListener("mouseup", handleResizeEnd);
  };
  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrentSelection(e.key);
  };
  const [openKeys, setOpenKeys] = useState<Array<string>>([]);
  const rootSubmenuKeys = menuItems.map((item: any) => item?.key);
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  interface DataObject {
    children?: DataObject[] | null;
    icon: string;
    key: string;
    label: any;
  }
  function findObjectWithKey(
    data: DataObject[],
    path: {
      pathname: string;
      state?: string;
    },
    parentIndices: string[] = []
  ): string[] | null {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === null) {
        continue;
      }
      const object = data[i];

      if (object.key === path.pathname || object.key === path?.state) {
        return [...parentIndices, object.key];
      }
      if (object.children && Array.isArray(object.children)) {
        const childIndices = findObjectWithKey(object.children, path, [
          ...parentIndices,
          object.key,
        ]);
        if (childIndices) {
          return childIndices;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    const indices = findObjectWithKey(menuItems as DataObject[], {
      pathname: location.pathname,
      state: location.state,
    });
    if (indices) {
      setOpenKeys(indices);
      setCurrentSelection(indices[indices.length - 1]);
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout hasSider>
        <Sider
          theme="light"
          collapsible
          breakpoint="sm"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 65,
            bottom: 0,
            userSelect: "none",
            transition: "all 0s",
            zIndex: 1,
          }}
          width={sidebarWidth}
        >
          <div className="resize-handle" onMouseDown={handleResizeStart} />
          <Menu
            theme="light"
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={["/dashboard"]}
            items={menuItems}
            selectedKeys={[currentSelection]}
            onClick={handleClick}
          />
        </Sider>
        <Layout
          style={isMobile ? { marginLeft: 70 } : { marginLeft: true ? 220 : 0 }}
        >
          <Content
            style={{
              padding: 22,
              paddingTop: "80px",
            }}
          >
            <Outlet />
            <SupportMessage />
          </Content>
          <Footer
            style={{
              textAlign: "center",
              padding: 8,
              margin: 0,
              fontSize: 13,
              color: "#343a40",
            }}
          >
            <strong>
              Copyright © 2023. All Rights Reserved. Design & Developed by{" "}
              <a href="https://www.m360ict.com/" target="_blank">
                M360ICT
              </a>
            </strong>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
