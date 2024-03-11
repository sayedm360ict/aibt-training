import React, { useRef } from "react";
import { Badge, Button, Card, Col, Image, Row, Space } from "antd";

import { useParams } from "react-router-dom";
import { imageURL } from "../../../app/slice/baseQuery";
// import dayjs from "dayjs";
// import { useDispatch } from "react-redux";
// import { setCommonModal } from "../../../app/slice/modalSlice";
// import UpdateApplication from "../components/UpdateApplication";
import { useGetSingleApplicationQuery } from "../api/ApplicationEndpoint";
import { PrinterOutlined } from "@ant-design/icons";
import { useReactToPrint } from "react-to-print";
import { useDispatch } from "react-redux";
import { setCommonModal } from "../../../app/slice/modalSlice";
import UpdateApplication from "../components/UpdateApplication";

// import UpdateSingleTraining from "../components/UpdateSingleTraining";

const SingleApplication: React.FC = () => {
  const { id } = useParams();
  const { data: singleApplication } = useGetSingleApplicationQuery(Number(id));

  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(
      setCommonModal({
        title: "Update Application",
        content: <UpdateApplication id={Number(id)} />,
        show: true,
        width: 720,
      })
    );
  };
  const applicationRef = useRef(null);
  const handleApplicationPrint = useReactToPrint({
    content: () => applicationRef.current,
    documentTitle: `Application`,
  });
  return (
    <>
      <Space style={{ marginBottom: "1rem" }}>
        <Button type="primary" onClick={handleApplicationPrint}>
          <PrinterOutlined />
          Print
        </Button>
        <Button
          type="primary"
          onClick={showModal}
          className="btn-primary bg-blue-800"
        >
          Update Application
        </Button>
      </Space>
      <Row
        justify="center"
        align="middle"
        style={{ maxWidth: "auto" }}
        ref={applicationRef}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card
            style={{
              boxShadow: "0 0 0 1px rgba(0,0,0,.05)",
              marginBottom: "1rem",
            }}
          >
            <Row justify={"space-between"} gutter={[5, 16]}>
              <Col xs={24} md={8} xxl={8} lg={4}>
                <Image
                  className="object-cover rounded"
                  src={`${imageURL + singleApplication?.data?.photo}`}
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={16}>
                <div>
                  <p className="font-bold">Name</p>
                  <p>{singleApplication?.data?.name}</p>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p>{singleApplication?.data?.email}</p>
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p>{singleApplication?.data?.phone}</p>
                </div>
                <div>
                  <p className="font-bold">Address</p>
                  <p>{singleApplication?.data?.address}</p>
                </div>
                <div>
                  <p className="font-bold mt-4">Training Title</p>
                  <p>{singleApplication?.data?.title}</p>
                </div>
                <div>
                  <p className="font-bold">Training Description</p>
                  <p>{singleApplication?.data?.description}</p>
                </div>
                <div className="flex mt-6 w-full">
                  <div>
                    <p className="font-bold">Start Date</p>
                    <p>{singleApplication?.data?.start_time.split("T")[0]}</p>
                  </div>
                  <div className="ps-8">
                    <p className="font-bold">End Date</p>
                    <p>{singleApplication?.data?.end_time.split("T")[0]}</p>
                  </div>
                  <div className="ps-8">
                    <p className="font-bold">Applied Date</p>
                    <p>{singleApplication?.data?.applied_at.split("T")[0]}</p>
                  </div>
                  <div className="ps-8">
                    <p className="font-bold">Status</p>
                    <Badge
                      className="font-bold text-white"
                      count={singleApplication?.data?.status}
                      style={{
                        backgroundColor:
                          singleApplication?.data?.status === "Approved"
                            ? "green"
                            : singleApplication?.data?.status === "Pending"
                            ? "orange"
                            : "red",
                      }}
                    />
                  </div>
                </div>
              </Col>
              {/* <Col xs={24} sm={12} md={12} lg={2}>
              <Title level={2}>dsjfjhasdj</Title>
            </Col> */}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleApplication;
