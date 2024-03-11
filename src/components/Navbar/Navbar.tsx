import { Button, theme, Popover } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { globalTheme, setTheme } from "../../app/slice/themeSlice";

import {
  FullscreenOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/store";
import { setLogout } from "../../app/features/userSlice";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import useIsMobile from "../utils/useIsMobile";
import Notifications from "../Notification/Notification";
import AIBT from "./../../assets/logo.png";
const NavBar = () => {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const themeGlobal = useSelector(globalTheme);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleDarkTheme = () => {
    dispatch(setTheme(theme.darkAlgorithm));
  };
  const handleLightTheme = () => {
    dispatch(setTheme(theme.defaultAlgorithm));
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };

  //   for full screen
  const handleFullscreenToggle = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullscreen(false);
  };

  const content = (
    <div>
      <Link to="/setting/profile">
        <Button color="primary" icon={<UserOutlined />}>
          Profile
        </Button>
      </Link>
      <br />
      <Link to="/login">
        <Button
          style={{ marginTop: "10px" }}
          color="primary"
          icon={<LogoutOutlined />}
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
      </Link>
    </div>
  );

  return (
    <Header
      style={{
        background: colorBgContainer,
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 50,
          maxWidth: "100%",
        }}
      >
        <Link to="/">
          <img
            style={{ paddingTop: "12px" }}
            width={isMobile ? 60 : 280}
            height={"auto"}
            src={AIBT}
            alt="logo"
          />
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            paddingBottom: "8px",
          }}
        >
          {/* <Typography.Title level={5} className='hide-on-small'>
            Welcome mamun
          </Typography.Title> */}
          <Button
            icon={<FullscreenOutlined />}
            type="dashed"
            onClick={handleFullscreenToggle}
          />
          <div>
            {themeGlobal.theme === theme.defaultAlgorithm ? (
              <Button
                onClick={() => {
                  handleDarkTheme();
                }}
                icon={<BsFillMoonStarsFill />}
                type="dashed"
              />
            ) : (
              <Button
                onClick={() => {
                  handleLightTheme();
                }}
                icon={<BsFillSunFill />}
                type="dashed"
              />
            )}
          </div>
          <Notifications />

          <Popover content={content}>
            <Button icon={<UserOutlined />} type="dashed" />
          </Popover>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
