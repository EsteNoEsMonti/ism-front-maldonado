// @ts-nocheck
import React, { useEffect, useState } from 'react'
import getCourses from '../../../middlewares/getCourses';
import { Spin, Row, Col } from 'antd';
import CardItem from '../../CardItem/CardItem';

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const studentsData = await getCourses();
        await setCourses(studentsData);
        setLoading(false)
      } catch (error) {
        console.error(error) // should I use an antd component to render errors? 
      }
    }
    fetchData();
  }, [])


  return (
    <>
      <Spin
        tip="Loading courses..."
        size="large"
        spinning={loading}
      >

        <Row gutter={[16, 16]}>
          {courses.map((course) => (
            <Col xs={24} sm={12} md={12} lg={12} key={course._id}>
              <CardItem course={course} />
            </Col>
          ))}
        </Row>

      </Spin>
    </>
  )
}

export default Courses