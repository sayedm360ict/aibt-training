import React from "react";
import { Badge, Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useGetSingleTrainingQuery } from "../api/TrainingEndPoint";
import { useParams } from "react-router-dom";
import { imageURL } from "../../../app/slice/baseQuery";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setCommonModal } from "../../../app/slice/modalSlice";
import UpdateTraining from "../components/UpdateTraining";
// import UpdateSingleTraining from "../components/UpdateSingleTraining";

const TrainingDetails: React.FC = () => {
  const { id } = useParams();
  const { data: singleTrainingList } = useGetSingleTrainingQuery(Number(id));
  // console.log(singleTrainingList);
  const dispatch = useDispatch();
  const showModal2 = () => {
    dispatch(
      setCommonModal({
        title: "Update Training",
        content: <UpdateTraining id={Number(id)} />,
        // content: <UpdateSingleTraining id={Number(id)} />,
        show: true,
        width: 720,
      })
    );
  };

  return (
    <Row gutter={16} justify={"center"} className="mt-10 w-full">
      <Col>
        <Card
          cover={
            <img
              alt="example"
              src={`${imageURL}${singleTrainingList?.data?.image}`}
              className="object-cover h-96"
            />
          }
        >
          <Meta
            title={singleTrainingList?.data?.title}
            description={singleTrainingList?.data?.description}
          />
          <Row
            justify={"space-between"}
            style={{ marginTop: 10, fontWeight: "bold" }}
          >
            <Col
              span={6}
              className="font-bold bg-red"
              style={{ color: "green" }}
            >
              {dayjs(singleTrainingList?.data?.start_time).format("YYYY-MM-DD")}
            </Col>
            <Col span={6} style={{ color: "#ff4d4f" }}>
              {dayjs(singleTrainingList?.data?.end_time).format("YYYY-MM-DD")}
            </Col>
            <Col span={6}>
              <Badge
                count={singleTrainingList?.data?.status}
                style={{
                  backgroundColor:
                    singleTrainingList?.data?.status === "Upcoming"
                      ? "blue"
                      : singleTrainingList?.data?.status === "Finished"
                      ? "green"
                      : "red",
                }}
              />
            </Col>
            <Col xs={6}>
              <Button
                style={{ marginRight: "5px" }}
                onClick={showModal2}
                type="primary"
                className="bg-blue-600"
              >
                Update Training
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default TrainingDetails;
