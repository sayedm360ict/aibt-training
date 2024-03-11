import { ColumnsType } from "antd/es/table";
import { Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { IApplicationList } from "../types/ApplicationType";

export const ApplicationTableColoumn = (): ColumnsType<IApplicationList> => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
      render: (title) => <p style={{ fontWeight: "bold" }}>{title}</p>,
    },

    {
      title: "Training Name",
      dataIndex: "training_name",
      key: "training_name",
    },
    {
      title: "Applied Date",
      dataIndex: "applied_at",
      key: "applied_at",
      render: (applied_at) => (
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "5px",
            }}
          >
            {dayjs(applied_at).format("YYYY-MM-DD")}
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
            {dayjs(applied_at).format("HH:mm")}
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
              status === "Approved"
                ? "green"
                : status === "Pending"
                ? "yellow"
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
          <Link to={`/application/application-list/${id}`}>
            <Tooltip placement="topRight" title={"View details"}>
              <EyeOutlined />
            </Tooltip>
          </Link>
        </div>
      ),
    },
  ];
};
