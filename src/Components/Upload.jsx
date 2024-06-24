import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './Product';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Upload = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [openHour, setOpenHour] = useState('');
  const [closeHour, setCloseHour] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Use a unique ID for each product
      name: productName,
      category: selectedCategory,
      priceRange,
      thumbnail,
      description: productDescription,
      address,
      contact,
      hours: `${openHour} - ${closeHour}`, // Include open and close hours
    };
    addProduct(newProduct);
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="form-container_editproduk">
        <h2 className="title_editproduk">Unggah Produk</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group_editproduk">
            <label className="label_editproduk">Nama produk</label>
            <input 
              type="text" 
              className="input_editproduk"
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Deskripsi produk</label>
            <textarea 
              rows="4" 
              className="textarea_editproduk"
              value={productDescription} 
              onChange={(e) => setProductDescription(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Alamat</label>
            <textarea 
              rows="2" 
              className="textarea_editproduk"
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Kontak</label>
            <input 
              type="text" 
              className="input_editproduk"
              value={contact} 
              onChange={(e) => setContact(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Harga produk</label>
            <input 
              type="text" 
              className="input_editproduk"
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Thumbnail produk</label>
            <input 
              type="file" 
              className="input_editproduk"
              onChange={handleThumbnailChange} 
            />
            {thumbnail && <img className="thumbnail_preview_editproduk" src={thumbnail} alt="Product Thumbnail" />}
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Buka dari jam</label>
            <input 
              type="time" 
              className="input_editproduk"
              value={openHour} 
              onChange={(e) => setOpenHour(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Tutup pada jam</label>
            <input 
              type="time" 
              className="input_editproduk"
              value={closeHour} 
              onChange={(e) => setCloseHour(e.target.value)} 
            />
          </div>

          <div className="form-group_editproduk">
            <label className="label_editproduk">Kategori produk</label>
            <div>
              <button 
                type="button"
                className={`category-button_editproduk ${selectedCategory === 'Makanan ringan' ? 'selected' : ''}`} 
                onClick={() => handleCategorySelect('Makanan ringan')}
              >
                Makanan ringan
              </button>
              <button 
                type="button"
                className={`category-button_editproduk ${selectedCategory === 'Makanan berat' ? 'selected' : ''}`} 
                onClick={() => handleCategorySelect('Makanan berat')}
              >
                Makanan berat
              </button>
            </div>
          </div>

          <div className="form-group_editproduk">
            <button type="submit" className="upload-button_editproduk">Unggah Produk</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
