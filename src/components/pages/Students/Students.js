import React, { useEffect, useState } from 'react'
import getStudents from '../../../middlewares/getStudents'
import ActionTable from '../../ActionTable/ActionTable'
import { Button, Modal, Descriptions, Avatar, List } from 'antd'
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import ISM_LOGO from '../../../assets/images/ISM_LOGO.png'
import { useNavigate } from 'react-router-dom'


const Students = () => {
  const [students, setStudents] = useState([])
  const [actions, setActions] = useState([]);
  const [detailModalVisibility, setDetailModalVisibility] = useState(false)
  const [detailStudent, setDetailStudent] = useState({})
  const navigate = useNavigate()
  const columns = [
    { 'nombre': 'Name' },
    { 'apellido': 'Lastname' }
  ]

  // Detail
  function openDetailModal(student) {
    setDetailStudent(student)
    setDetailModalVisibility(true)
  }
  function closeDetailModal() {
    setDetailStudent({})
    setDetailModalVisibility(false)
  }
  function renderCourseList(data) {
    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={ISM_LOGO} />}
              // title={<a href={`${process.env.REACT_APP_FRONT_URL}/courses`}>{item._id}</a>}
              title={<a onClick={() => navigate(`/courses/${item.curso}`)} href=' '>{item.curso}</a>}
              description="[nodeJS]: you should use mongoose populates 🤐"
            />
          </List.Item>
        )}
      />
    )
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const studentsData = await getStudents();
        setStudents(studentsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    setActions([
      // @ts-ignore
      {
        title: <Button
          type="primary"
          size='small'
          style={{ marginLeft: '5px' }}
          onClick={() => console.log('¡????')}
        >
          New Student
        </Button>,
        label: 'Studen Detail',
        // color: colors.primary,
        icon: InfoCircleOutlined,
        action: (student) => { openDetailModal(student) },
        displayRule: []
      },
      // @ts-ignore
      {
        title: '',
        label: 'Edit Student',
        // color: colors.primary,
        icon: EditOutlined,
        action: () => { console.log('editae') },
        displayRule: []
      },
      // @ts-ignore
      {
        title: '',
        label: 'Delete Student',
        color: 'red',
        icon: DeleteOutlined,
        action: () => { console.log('elimitar') },
        displayRule: []
      }
    ])
  }, []);

  return (
    <>
      Studentssssss

      <ActionTable
        // @ts-ignore
        style={{ width: "100%" }}
        columns={columns}
        items={students}
        actions={actions}
        loading={false}
      />

      {/* DETAIL */}
      <Modal
        title="Student"
        open={detailModalVisibility}
        onOk={closeDetailModal}
        onCancel={closeDetailModal}
        footer={<Button onClick={closeDetailModal}>cerrar</Button>}
        width={'100vh'}
      >
        <Descriptions bordered>
          <Descriptions.Item label="Name" span={1.5}>
            {detailStudent['nombre']}
          </Descriptions.Item>
          <Descriptions.Item label="Lastname" span={1.5}>
            {detailStudent['apellido']}
          </Descriptions.Item>
          {/* <Descriptions.Item label="isActive"><Tag color="cyan">YES</Tag> / <Tag color="magenta">NOPE</Tag></Descriptions.Item> */}
          <Descriptions.Item label="MONGO _id" span={1.5}>
            {detailStudent['_id']}
          </Descriptions.Item>
          <Descriptions.Item label="CUSTOM id" span={1.5}>
            {detailStudent['id']}
          </Descriptions.Item>
          <Descriptions.Item label="Courses" span={3}>
            {detailStudent['cursos']?.length > 0 ? renderCourseList(detailStudent['cursos']) : <>There aren't courses</>}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  )
}

export default Students