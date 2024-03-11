/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  Col,
  DatePicker,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
// import Search from "antd/es/input/Search";
import { TrainingListColumns } from "../utils/TraingTableColoumn";
import { useGetTrainingAllQuery } from "../api/TrainingEndPoint";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import debounce from "lodash/debounce";
import { ITrainingParams } from "../types/TrainingType";
import GlobalLoader from "../../../app/utils/GlobalLoader";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setCommonModal } from "../../../app/slice/modalSlice";
import CreateTraining from "../components/CreateTraining";
import dayjs from "dayjs";
// import { useDispatch } from "react-redux";

const TrainingList = () => {
  const { RangePicker } = DatePicker;
  const [searchParams, setSearchParams] = useSearchParams({
    page: "",
    pageSize: "",
  });
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const skipValue = Number(page) * Number(pageSize);

  const [filter, setFilter] = useState<ITrainingParams>({
    start_time: "",
    end_time: "",
    limit: 10,
    skip: skipValue - 10,
  });

  const { data: training, isLoading } = useGetTrainingAllQuery({
    ...filter,
  });

  const [submittedStatus, setSubmittedStatus] = useState<number | undefined>(
    undefined
  );

  const onSubmittedStatusChange = (value: number) => {
    setSubmittedStatus(value);
    setFilter((prevFilter) => ({
      ...prevFilter,
      status: value,
      skip: 0,
    }));
  };

  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(
      setCommonModal({
        title: "Create Training",
        content: <CreateTraining />,
        show: true,
        width: 720,
      })
    );
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ maxWidth: "auto" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title level={5}>New Application List</Typography.Title>

          <Card
            style={{
              boxShadow: "0 0 0 1px rgba(0,0,0,.05)",
              marginBottom: "1rem",
            }}
          >
            <Row align={"middle"} justify={"space-between"} gutter={[5, 16]}>
              <Col xs={24} md={8} xxl={8}>
                <Select
                  placeholder="Status"
                  style={{ width: "95%", margin: "0 10px" }}
                  allowClear
                  onChange={onSubmittedStatusChange}
                  value={submittedStatus}
                  options={[
                    { value: "Upcoming", label: "Upcoming" },
                    { value: "Ended", label: "Ended" },
                    { value: "Cancelled", label: "Cancelled" },
                  ]}
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <RangePicker
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    if (e?.length) {
                      setFilter({
                        ...filter,
                        start_time: dayjs(String(e[0])).format("YYYY-MM-DD"),
                        end_time: dayjs(String(e[1])).format("YYYY-MM-DD"),
                      });
                    } else {
                      setFilter({
                        ...filter,
                        start_time: "",
                        end_time: "",
                      });
                    }
                  }}
                />
              </Col>

              <Col xs={24} md={8} xxl={8}>
                <Button
                  onClick={showModal}
                  type="primary"
                  icon={<PlusOutlined />}
                >
                  Create Training
                </Button>
              </Col>
            </Row>
          </Card>
          <Card
            style={{
              boxShadow: "0 0 0 1px rgba(0,0,0,.05)",
              marginBottom: "1rem",
            }}
          >
            <div>
              {isLoading ? (
                <GlobalLoader />
              ) : (
                <Table
                  size="small"
                  bordered
                  rowKey={"id"}
                  columns={TrainingListColumns()}
                  dataSource={training?.data ? training.data : []}
                  scroll={{ x: true }}
                  loading={isLoading}
                  onChange={(pagination) => {
                    setSearchParams({
                      page: String(pagination.current),
                      pageSize: String(pagination.pageSize),
                    });
                    setFilter({
                      ...filter,
                      // skip: skipValue,
                      skip:
                        ((pagination.current || 1) - 1) *
                        (pagination.pageSize || 10),
                      limit: pagination.pageSize!,
                    });
                  }}
                  pagination={{
                    showSizeChanger: true,
                    defaultPageSize: 10,
                    pageSizeOptions: ["10", "20", "30", "50", "100"],
                    total: training?.total,
                    showTotal: (total) => `Total ${total} `,
                    current: Number(page),
                  }}
                />
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TrainingList;
