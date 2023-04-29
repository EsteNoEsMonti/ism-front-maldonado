import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Avatar, Typography, List, Row, Col } from 'antd'
import ISM_LOGO from '../../../assets/images/ISM_LOGO.png'
import getCourse from "../../../middlewares/getCourse";

const Course = () => {

  const [course, setCourse] = useState({})
  const { id } = useParams()
  const { Title, Text } = Typography;

  useEffect(() => {
    async function fetchData() {
      try {
        const studentsData = await getCourse(id);
        setCourse(studentsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [id])


  return (
    <>
      {/* ----- EJEMPLO PARA EXPLICAR EL ROW DE ANTD -------------------------------------------------------*/}
      <Row>
        {/* <Col xs={24} sm={24} md={24} lg={4} xl={3} xxl={3} style={{ textAlign: 'center' }}>  */}
        <Col span={24} style={{ textAlign: 'center' }}>
          <Avatar
            size={{ xs: 50, sm: 75, md: 100, lg: 100, xl: 100, xxl: 100 }}
            src={ISM_LOGO}
          />
        </Col>

        {/* <Col xs={24} sm={24} md={24} lg={20} xl={21} xxl={21} style={{ margin: 0, textAlign: 'center' }}> */}
        <Col span={24} style={{ margin: 0, textAlign: 'center' }}>
          <Title level={2} style={{ margin: 0 }}>{course.nombre}</Title>
        </Col>

        {/* <Col xs={24} sm={24} md={24} lg={20} xl={21} xxl={21} style={{ textAlign: 'center' }}> */}
        <Col span={24} style={{ textAlign: 'center' }}>
          <Text type="secondary">{course._id}</Text> |
          | <Text type="secondary">{course.descripcion}</Text>
        </Col>
      </Row>


      <hr />
      <Title level={4} style={{ margin: 0 }}>Students:</Title>
      <List
        itemLayout="horizontal"
        dataSource={course.alumnos}
        renderItem={(item, index) => (
          <List.Item
            actions={[<a key="list-loadmore-more" href=" ">DELETE</a>]}
          >
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={item._id}
              description={`${item.nombre} ${item.apellido}`}
            />
          </List.Item>
        )}
      />

    </>
  );
};

export default Course;
