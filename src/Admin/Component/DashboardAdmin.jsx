import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';
import usericon from '../../Assets/img/icondasboard4.png';
import umkmicon from '../../Assets/img/icondasboard3.png';
import menuicon from '../../Assets/img/icondasboard2.png';
import rateicon from '../../Assets/img/icondasboard1.png';

const DashboardAdmin = () => {
  return (
    <div className="dashboard-admin_dashboardadmin">
      <div className="home_dashboardadmin">HOME</div>
      <div className="admin_dashboardadmin">Dashboard</div>

      <div className="container_dashboardadmin">
        <div className="halaman-dasboard_dashboardadmin">Halaman Dashboard</div>
        <div className="line-div_dashboardadmin"></div>
        <div className="rectangle-parent_dashboardadmin">
          <Link to="/admin/users" className="box_dashboardadmin frame-item_dashboardadmin">
            <img src={usericon} alt="Users" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">1000 Jumlah Pengguna</div>
          </Link>
          <Link to="/admin/umkm" className="box_dashboardadmin frame-inner_dashboardadmin">
            <img src={umkmicon} alt="UMKM" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">100 Jumlah UMKM</div>
          </Link>
          <Link to="/admin/products" className="box_dashboardadmin rectangle-div_dashboardadmin">
            <img src={menuicon} alt="Kuliner" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">100 Kuliner</div>
          </Link>
          <Link to="admin/umkm" className="box_dashboardadmin frame-child1_dashboardadmin">
            <img src={rateicon} alt="Ulasan" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">50 Jumlah Ulasan</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
