import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import cari from "../Assets/img/cari.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOptions, setSearchOptions] = useState([]);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMenuClick = () => {
    navigate('/Menu');
  };

  const handleLoginClick = () => {
    navigate('/Loginhome');
  };

  const handleProfilClick = () => {
    navigate('/Loginhome');
  };

  const about = () => {
    navigate('/About');
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchOptions([]); // Kosongkan opsi rekomendasi jika input kosong
    } else {
      getSearchOptions(query); // Panggil fungsi untuk mendapatkan opsi rekomendasi
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Contoh pencarian statis untuk "bika ambon"
      if (searchQuery.toLowerCase() === 'bika ambon') {
        navigate('/Detailbika');
      } else {
        // Tambahkan logika pencarian yang sesuai dengan data Anda di sini
        // Misalnya, melakukan pencarian di database atau menavigasi ke halaman hasil pencarian
        navigate(`/search?query=${searchQuery}`);
      }
    }
  };

  const getSearchOptions = (input) => {
    // Contoh implementasi sederhana: Filter daftar opsi yang cocok dengan input
    const options = ['Bika Ambon', 'Bika Coklat', 'Bika Keju', 'Bika Pisang'];
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    setSearchOptions(filteredOptions);
  };

  return (
    <>
      <div className="navbar">
        <div className="rectangle-container">
          <div className="frame-child"></div>
          <b className="masukdaftar" id="masukdaftarText" onClick={handleLoginClick}>Masuk/daftar</b>
          <b className="menu" id="menuText" onClick={handleMenuClick}>Menu</b>
          <b className="tentang-kami" id="tentangKamiText" onClick={about}>Tentang Kami</b>
          <b className="profil" id="profilText" onClick={handleProfilClick}>Profil</b>
          <b className="halaman-utama" onClick={handleHomeClick}>Halaman Utama</b>
          <img className="savor-flavor-putih" alt="lambang" src={lambang} />
        </div>
        <form className="search-parent" id="frameContainer1" onSubmit={handleSearchSubmit}>
          <img className="search-icon" alt="cari" src={cari} />
          <input
            type="text"
            className="cari"
            placeholder="Cari"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchOptions.length > 0 && (
            <ul className="search-options">
              {searchOptions.map((option, index) => (
                <li key={index} onClick={() => {
                  setSearchQuery(option);
                  navigate(`/Detailbika`); // Misalnya, navigasi langsung ke Detailbika saat memilih opsi dari autocomplete
                }}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </>
  );
};

export default Navbar;
