import React, { useState } from 'react';
import './DashboardAdminProfil.css';

const AdminProfil = () => {
  const [adminData, setAdminData] = useState([
    { no: 1, id: '00001', name: 'Daniel', email: 'Daniel123@gmail.com', status: 'Primary/admin', validasi: 'Terverifikasi' },
    { no: 2, id: '00002', name: 'Rani', email: 'Rani123@gmail.com', status: 'admin', validasi: 'Terverifikasi' },
    { no: 3, id: '00003', name: 'Firlia', email: 'Firlia123@gmail.com', status: 'admin', validasi: 'Terverifikasi' },
    { no: 4, id: '00004', name: 'Bhisma', email: 'Toxicoxide@gmail.com', status: 'admin', validasi: 'Terverifikasi' },
  ]);

  return (
    <div className="dashboard-admin-profil_profil">
      <div className="home_profil">HOME</div>
      <div className="admin_profil">Admin</div>
      <div className="table-container_profil">
        <table className="admin-table_profil">
          <thead>
            <tr>
              <th>NO</th>
              <th>ID Admin</th>
              <th>Nama Admin</th>
              <th>Email Admin</th>
              <th>Status</th>
              <th>Validasi</th>
            </tr>
          </thead>
          <tbody>
            {adminData.map((admin, index) => (
              <tr key={index}>
                <td>{admin.no}</td>
                <td>{admin.id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.status}</td>
                <td>{admin.validasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfil;
