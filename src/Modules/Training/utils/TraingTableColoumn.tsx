import { ColumnsType } from "antd/es/table";
import { Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { ITrainingList } from "../types/TrainingType";

export const TrainingListColumns = (): ColumnsType<ITrainingList> => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tittle",
      dataIndex: "title",
      key: "title",
      render: (title) => <p style={{ fontWeight: "bold" }}>{title}</p>,
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
      key: "start_time",
      render: (start_time) => (
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "5px",
            }}
          >
            {dayjs(start_time).format("YYYY-MM-DD")}
          </p>
          <p
            style={{
              backgroundColor: "blue",
              display: "inline",
              color: "white",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            {dayjs(start_time).format("HH:mm")}
          </p>
        </div>
      ),
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      key: "end_time",
      render: (end_time) => (
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "5px",
            }}
          >
            {dayjs(end_time).format("YYYY-MM-DD")}
          </p>
          <p
            style={{
              backgroundColor: "red",
              display: "inline",
              color: "white",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            {dayjs(end_time).format("HH:mm")}
          </p>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          <Tag
            color={
              status === "Upcoming"
                ? "blue"
                : status === "Finished"
                ? "green"
                : "red"
            }
          >
            {status}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link to={`/training/training-list/${id}`}>
            <Tooltip placement="topRight" title={"View details"}>
              <EyeOutlined />
            </Tooltip>
          </Link>
        </div>
      ),
    },
  ];
};
