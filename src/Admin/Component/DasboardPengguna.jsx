import React from 'react';
import './DashboardPengguna.css';

const DashboardPengguna = () => {
  const penggunaData = [
    { no: 1, idPengguna: '00001', namaPengguna: 'Rian', email: 'Rian123@gmail.com', status: 'Terverifikasi' },
    { no: 2, idPengguna: '00002', namaPengguna: 'Rika', email: 'Rika123@gmail.com', status: 'Terverifikasi' },
    { no: 3, idPengguna: '00003', namaPengguna: 'Ahun', email: 'Ahun123@gmail.com', status: 'Terverifikasi' },
    { no: 4, idPengguna: '00004', namaPengguna: 'Salma', email: 'Salma123@gmail.com', status: 'Meminta verif' },
    { no: 5, idPengguna: '00005', namaPengguna: 'Toni', email: 'Toni123@gmail.com', status: 'Terverifikasi' },
  ];

  return (
    <div className="dashboard-pengguna_pengguna">
      <div className="home_pengguna">HOME</div>
      <div className="pengguna_pengguna">Pengguna</div>
      <div className="table-container_pengguna">
        <table className="pengguna-table_pengguna">
          <thead>
            <tr>
              <th>NO</th>
              <th>ID Pengguna</th>
              <th>Nama Pengguna</th>
              <th>Email Pengguna</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penggunaData.map((pengguna, index) => (
              <tr key={index}>
                <td>{pengguna.no}</td>
                <td>{pengguna.idPengguna}</td>
                <td>{pengguna.namaPengguna}</td>
                <td>{pengguna.email}</td>
                <td>{pengguna.status}</td>
                <td>
                  <i className="fas fa-edit edit-icon_pengguna" title="Edit"></i>
                  <i className="fas fa-trash trash-icon_pengguna" title="Delete"></i>
                  <i className="fas fa-eye show-icon_pengguna" title="Show"></i>
                  <i className="fas fa-check correct-icon_pengguna" title="Verify"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPengguna;
