import { Col, Row, Table } from 'antd';

const SingleJoinedFamTripMember = () => {
  // Dummy data for the table (replace with actual data)
  const singleMemberData = [
    {
      key: '1',
      name: 'Member 1',
      position: 'Position 1',
    },
    {
      key: '2',
      name: 'Member 2',
      position: 'Position 2',
    },
    {
      key: '3',
      name: 'Member 3',
      position: 'Position 3',
    },
  ];

  // Columns for the table (replace with actual columns)
  const memberExecutiveColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
  ];
  return (
    <>
      <Row>
        {' '}
        <Col xl={24} xs={24}>
          <Table
            style={{ marginTop: '10px' }}
            columns={memberExecutiveColumns}
            dataSource={singleMemberData}
            bordered
            scroll={{ x: true }}
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default SingleJoinedFamTripMember;
