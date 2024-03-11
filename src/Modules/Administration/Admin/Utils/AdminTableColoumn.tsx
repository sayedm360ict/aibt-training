import { ColumnsType } from "antd/es/table";
import { Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { IAdminList } from "../types/AdminType";

export const AdminTableColumn = (): ColumnsType<IAdminList> => {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <p style={{ fontWeight: "bold" }}>{name}</p>,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Created date",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => (
        <div>
          <p
            style={{
              display: "inline",
              marginRight: "5px",
            }}
          >
            {dayjs(created_at).format("YYYY-MM-DD")}
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
            {dayjs(created_at).format("HH:mm")}
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
          <Tag color={status === 0 ? "green" : "red"}>{status}</Tag>
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
