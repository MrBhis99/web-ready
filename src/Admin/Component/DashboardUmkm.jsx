import React from 'react';
import './DashboardUmkm.css';

// Make sure to import Font Awesome for the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const DashboardUmkm = () => {
  const umkmData = [
    { no: 1, idUmkm: '00001', namaUmkm: 'Rian', email: 'Rian123@gmail.com', status: 'Terverifikasi' },
    { no: 2, idUmkm: '00002', namaUmkm: 'Rika', email: 'Rika123@gmail.com', status: 'Terverifikasi' },
  ];

  return (
    <div className="dashboard-umkm_umkm">
      <div className="home_umkm">HOME</div>
      <div className="umkm_umkm">UMKM</div>
      <div className="table-container_umkm">
        <table className="umkm-table_umkm">
          <thead>
            <tr>
              <th>NO</th>
              <th>ID UMKM</th>
              <th>Nama UMKM</th>
              <th>Email UMKM</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {umkmData.map((umkm, index) => (
              <tr key={index}>
                <td>{umkm.no}</td>
                <td>{umkm.idUmkm}</td>
                <td>{umkm.namaUmkm}</td>
                <td>{umkm.email}</td>
                <td>{umkm.status}</td>
                <td>
                  <FontAwesomeIcon icon={faCheckCircle} className="correct-icon_umkm" title="Verify" />
                  <FontAwesomeIcon icon={faEye} className="show-icon_umkm" title="Show" />
                  <FontAwesomeIcon icon={faEdit} className="edit-icon_umkm" title="Edit" />
                  <FontAwesomeIcon icon={faTrash} className="trash-icon_umkm" title="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardUmkm;
