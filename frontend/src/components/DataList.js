import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataList = () => {
  const [datas, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const response = await axios.get("http://localhost:5000/datapenjualan");
    setData(response.data);
  };

  const deleteData = async (id) => {
    try {
      if (window.confirm('Hapus Data Penjualan ?')) {
        await axios.delete(`http://localhost:5000/datapenjualan/${id}`);
        getDatas();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = (e) =>{
    e.preventDefault();
    setQuery(e.target.value);
  }
  let dataSearch = datas.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(query.toString().toLowerCase())
      )
  });

  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h1>Aplikasi Data Penjualan</h1>
          </a>
        </div>
        <form onSubmit={searchData}>
        <div className="field has-addons ml-6 mt-2">
          <div className="control is-expanded is-right">
            <input
              type="text"
              className="input"
              value={query}
              onChange={searchData.bind(this)}
              placeholder="Cari Data Penjualan..."
            />
          </div>
          <div className="control">
            <label  className="button is-info">
              Search
            </label>
          </div>
        </div>
      </form>
      </nav>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Link to={`add`} className="button is-success">
            Tambah Data Barang
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Stok Barang</th>
                <th>Jumlah Terjual</th>
                <th>Tanggal Transaksi</th>
                <th>Jenis Barang</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataSearch.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.stok}</td>
                  <td>{data.terjual}</td>
                  <td>{data.tanggal}</td>
                  <td>{data.jenis}</td>
                  <td>
                    <Link
                      to={`edit/${data.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteData(data.id)}
                      className="button is-small is-danger"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataList;
