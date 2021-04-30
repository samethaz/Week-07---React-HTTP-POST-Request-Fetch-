import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'

function List() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = async () => {
    const response = await fetch('http://174.138.103.233/api/employees');
    const data = await response.json();
    setUsers(data)
  }
  return (
    <>
      <h2>Employees</h2>
      <Table striped bordered hover variant="success">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>E-Mail</th>
            <th>Password</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.birthday}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.about}</td>
              </tr>)
          })}
        </tbody>
      </Table>
    </>
  )
}
export default List;