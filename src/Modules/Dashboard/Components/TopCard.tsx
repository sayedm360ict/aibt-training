import { Card, Row, Col } from 'antd';
import { FiUser } from 'react-icons/fi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbFileInvoice } from 'react-icons/tb';
const TopCard = () => {
  // Dummy data for the cards
  const cardsData = [
    {
      title: 'Members',
      value: '200',
      icon: <FiUser style={{ fontSize: 24, color: '#1890ff' }} />,
    },
    {
      title: 'Accounts',
      value: '12,500 BDT',
      icon: <FaMoneyBillTrendUp style={{ fontSize: 24, color: '#ff4d4f' }} />,
    },
    {
      title: 'Expenses',
      value: '600 BDT',
      icon: <GiTakeMyMoney style={{ fontSize: 24, color: '#95de64' }} />,
    },
    {
      title: 'Invoice',
      value: '20',
      icon: <TbFileInvoice style={{ fontSize: 24, color: '#ffa940' }} />,
    },
  ];

  return (
    <div>
      <Row gutter={16}>
        {cardsData.map((card, index) => (
          <Col xs={24} md={6} lg={6} key={index} span={8}>
            <Card>
              <div style={{ textAlign: 'center' }}>{card.icon}</div>
              <h2 style={{ textAlign: 'center' }}>{card.title}</h2>
              <p style={{ textAlign: 'center' }}>{card.value}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopCard;
