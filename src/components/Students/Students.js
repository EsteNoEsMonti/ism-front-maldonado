import React, { useEffect, useState } from 'react'
import getStudents from '../../middlewares/getStudents'
// import { ActionTable } from '../ActionTable/ActionTable.js'

const Students = () => {
  const [students, setStudents] = useState([])
  console.log(students)
  // const columns = [
  //   { 'titulo': 'Título' },
  //   { 'jornada': 'Jornada' }
  // ]

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
  }, []);

  return (
    <>
      Studentssssss

      {/* <ActionTable
        style={{ width: "100%" }}
        columns={columns}
        items={items}
        actions={actions}
        pagination={false}
        loading={false}
      /> */}
    </>
  )
}

export default Students