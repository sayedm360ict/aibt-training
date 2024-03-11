/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowLeftOutlined,
  EditOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Col, Divider, Row } from "antd";
import { useAppDispatch } from "../../app/store/store";
import useIsMobile from "../../components/utils/useIsMobile";
import { setCommonModal } from "../../app/slice/modalSlice";
import { useGetMeQuery } from "../../app/api/userApi/userApi";
import { imageURL } from "../../app/slice/baseQuery";
import { BiLogOutCircle } from "react-icons/bi";
import { setLogout } from "../../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import UpdateProfile from "./components/UpdateProfile";
import UpdatePassword from "./components/UpdatePassword";

const Profile = () => {
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();
  const showModal = () => {
    dispatch(
      setCommonModal({
        title: "Edit Profile",
        content: <UpdateProfile />,
        show: true,
      })
    );
  };
  const showModal2 = () => {
    dispatch(
      setCommonModal({
        title: "Update password",
        content: <UpdatePassword />,
        show: true,
      })
    );
  };
  const navigate = useNavigate();
  const { data: profile } = useGetMeQuery();
  //

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };
  return (
    <Card
      style={{
        boxShadow: "0 0 20px 3px rgba(150,190,238,.15)",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: `${isMobile ? "" : "1rem"}`,
      }}
      extra={
        <>
          <Button
            onClick={showModal}
            type="primary"
            icon={<EditOutlined />}
            style={{ margin: "15px 10px 10px 0" }}
          >
            {" "}
            Edit{" "}
          </Button>
          <Button icon={<LockOutlined />} onClick={showModal2}>
            Update Password
          </Button>
        </>
      }
      title={
        <div
          style={{ display: "block", overflow: "hidden", alignItems: "center" }}
        >
          <ArrowLeftOutlined
            onClick={() => {
              window.history.back();
            }}
          />{" "}
          <span style={{ paddingLeft: "10px" }}>Profile</span>
        </div>
      }
    >
      <Row>
        <Col
          xs={24}
          md={10}
          lg={6}
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <Avatar
            size={{ xs: 60, sm: 80, md: 100, lg: 120, xl: 160, xxl: 180 }}
            src={imageURL + profile?.data?.photo}
            alt={`${profile?.data?.photo}'s Avatar`}
          />
        </Col>
        <Col xs={24} md={14} lg={18} style={{ justifyItems: "center" }}>
          <h2>Name: {profile?.data?.name}</h2>
          <p>Email: {profile?.data?.email}</p>
          <p>Phone: {"+88" + profile?.data?.phone}</p>
        </Col>
        <Divider />
        <Col
          xs={24}
          style={{
            textAlign: "end",
          }}
        >
          <Button onClick={() => handleLogout()} icon={<BiLogOutCircle />}>
            Logout
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Profile;
