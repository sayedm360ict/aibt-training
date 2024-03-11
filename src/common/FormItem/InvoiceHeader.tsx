/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Typography } from "antd";
import AIBT_LOGO from "../../assets/logo.png";

// export const officeInfo = {
//   name: 'Tour Operators Association of Bangladesh (AIBT)',
//   address1:
//     '2nd FLOOR, Azam Khan Business Center, 105/E West Agargaon, Kamal Soroni Rd, Dhaka 1207',
//   address2:
//     '2nd FLOOR, Azam Khan Business Center, 105/E West Agargaon, Kamal Soroni Rd, Dhaka 1207',
//   modile: '01933-331522',
// };

export const GetInfo = () => {
  return {
    logoProp: {
      height: 80,
      padding: 10,
      borderRadius: 12,
    },
  };
};

export const ReceiptHeader = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ flex: 1 }}>
        <img style={GetInfo().logoProp} src={AIBT_LOGO} alt={"AIBT_LOGO"} />
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <QRCode
            size={110}
            color='black'
            iconSize={25}
            bordered={false}
            // icon={orgInfo?.org_logo || '/m360Ict_Logo.png'}
            value={`
Name: ${'BAB'}
Address: ${''}
Mobile No: ${''}
`}
          /> */}
          <div style={{ marginLeft: "15px" }}>
            <Typography.Title
              style={{
                display: "block",
                fontFamily: "'Source Sans Pro', sans-serif",
                fontSize: "14px",
              }}
            >
              {"Tour Operators Association of Bangladesh (AIBT)"}
            </Typography.Title>

            <Typography.Text
              style={{
                display: "block",
                fontSize: "12px",
                fontFamily: "'Source Sans Pro', sans-serif",
              }}
            >
              {" "}
              <strong> Address :</strong>
              {
                "2nd FLOOR, Azam Khan Business Center, 105/E West Agargaon, Kamal Soroni Rd, Dhaka 1207"
              }
            </Typography.Text>
            <Typography.Text
              style={{
                display: "block",
                fontSize: "12px",
                fontFamily: "'Source Sans Pro', sans-serif",
              }}
            >
              <strong> Mobile :</strong> {"01933-331522"}
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InvoiceHeader = () => {
  // const orgInfo = useAppSelector((state) => state.user?.organization_info);

  return (
    <Row
      style={{
        fontFamily: "'Source Sans Pro', sans-serif",
        borderBottom: "2px solid #F9F5F6",
      }}
      justify={"space-between"}
      align="middle"
    >
      <Col style={{ display: "flex", alignItems: "center", maxWidth: "30%" }}>
        <img src={AIBT_LOGO} alt={"AIBT_LOGO"} style={GetInfo().logoProp} />
      </Col>

      <Col
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "50%",
        }}
      >
        <div className="info">
          <Typography.Title level={5} style={{}}>
            {"Tour Operators Association of Bangladesh (AIBT)"}
          </Typography.Title>

          <Typography.Text
            style={{
              display: "block",
              fontSize: "14px",
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          >
            <strong> Address: </strong>
            {
              "2nd FLOOR, Azam Khan Business Center, 105/E West Agargaon, Kamal Soroni Rd, Dhaka 1207s"
            }
          </Typography.Text>

          <Typography.Text
            style={{
              display: "block",
              fontSize: "14px",
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          >
            <strong>Mobile:</strong> {"01933-331522s"}
          </Typography.Text>
          <Typography.Text
            style={{
              display: "block",
              fontSize: "14px",
              fontFamily: "'Source Sans Pro', sans-serif",
            }}
          ></Typography.Text>
        </div>
      </Col>
    </Row>
  );
};
