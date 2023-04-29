import React from 'react'
import { Card, Avatar, Row, Col, Typography, Tag } from 'antd';
import ISM_LOGO from '../../assets/images/ISM_LOGO.png'
import { useNavigate } from 'react-router-dom'

const CardItem = ({ course }) => {
  const navigate = useNavigate()
  const { Title, Text } = Typography

  return (
    <Card
      hoverable
      onClick={() => { navigate(`/courses/${course._id}`) }}
    >
      <Row>
        <Col span={6} style={{ textAlign: 'center' }}>
          <Avatar src={ISM_LOGO} size={{ xs: 50, sm: 50, md: 80, lg: 80, xl: 80, xxl: 80 }} />
        </Col>
        <Col span={18}>
          <Title level={3}>{course?.nombre}</Title>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col span={6}>
        </Col>
        <Col span={18}>
          <b>_id: </b><Text code>{course?._id}</Text><br />
          <b>Code: </b><Text code>{course?.id}</Text><br />
          <Text><b>Description: </b>{course?.descripcion}</Text><br />
          <Text><b>Students: </b>{course?.alumnos.length > 0 ? <Tag color="cyan">{course?.alumnos.length}</Tag> : <Tag>Without students</Tag>}</Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardItem