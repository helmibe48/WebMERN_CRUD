import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const [name, setName] = useState("");
  const [stok, setStok] = useState("");
  const [terjual, setTerjual] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jenis, setJenis] = useState("Konsumsi");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm('Simpan Data penjualan ?')) {
       await axios.post("http://localhost:5000/datapenjualan", {
          name,
          stok,
          terjual,
          tanggal,
          jenis,
       });
       navigate("/");
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveData}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Barang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Stok</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={stok}
                onChange={(e) => setStok(e.target.value)}
                placeholder="Stok"
              />
            </div>
          </div>
          <div className="field">
          <label className="label">Jumlah Terjual</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={terjual}
              onChange={(e) => setTerjual(e.target.value)}
              placeholder="Jumlah Terjual"
            />
          </div>
          </div>
          <div className="field">
          <label className="label">Tanggal Transaksi</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              placeholder="Tanggal Transaksi"
            />
          </div>
          </div>
          <div className="field">
            <label className="label">Jenis Barang</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jenis}
                  onChange={(e) => setJenis(e.target.value)}
                >
                  <option value="Konsumsi">Konsumsi</option>
                  <option value="Pembersih">Pembersih</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;