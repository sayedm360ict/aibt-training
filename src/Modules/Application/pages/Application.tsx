/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, DatePicker, Row, Select, Table, Typography } from "antd";
// import Search from "antd/es/input/Search";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import debounce from "lodash/debounce";

import GlobalLoader from "../../../app/utils/GlobalLoader";

import { IApplicationParams } from "../types/ApplicationType";
import { useGetApplicationAllQuery } from "../api/ApplicationEndpoint";
import { ApplicationTableColoumn } from "../utils/ApplicationTableColoumn";
import Search from "antd/es/input/Search";
// import { useDispatch } from "react-redux";

const ApplicationList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "",
    pageSize: "",
  });
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const skipValue = Number(page) * Number(pageSize);

  const [filter, setFilter] = useState<IApplicationParams>({
    search: "",
    training_name: "",
    applied_at: "",
    limit: 10,
    skip: skipValue - 10,
  });

  const { data: application, isLoading } = useGetApplicationAllQuery({
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
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder="Search "
                  style={{ width: "95%" }}
                  onChange={(e) =>
                    setTimeout(() => {
                      setFilter({ ...filter, search: e.target.value });
                    }, 1000)
                  }
                />
              </Col>
              <Col xs={24} sm={24} md={8} lg={5}>
                <Search
                  placeholder="Search by training "
                  style={{ width: "95%" }}
                  onChange={(e) =>
                    setTimeout(() => {
                      setFilter({ ...filter, training_name: e.target.value });
                    }, 1000)
                  }
                />
              </Col>
              <Col xs={24} md={8} xxl={8}>
                <Select
                  placeholder="Status"
                  style={{ width: "95%", margin: "0 10px" }}
                  allowClear
                  onChange={onSubmittedStatusChange}
                  value={submittedStatus}
                  options={[
                    { value: "Approved", label: "Approved" },
                    { value: "Pending", label: "Pending" },
                    { value: "Rejected", label: "Rejected" },
                  ]}
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={6}>
                <DatePicker
                  style={{ width: "100%" }}
                  onChange={(dates: any) => {
                    if (dates) {
                      const selectedDate = dates;

                      const formattedDate = selectedDate.format("YYYY-MM-DD");

                      setFilter({
                        ...filter,
                        applied_at: formattedDate,
                      });
                    } else {
                      setFilter({
                        ...filter,
                        applied_at: "",
                      });
                    }
                  }}
                />
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
                  columns={ApplicationTableColoumn()}
                  dataSource={application?.data ? application.data : []}
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
                    total: application?.total,
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

export default ApplicationList;
