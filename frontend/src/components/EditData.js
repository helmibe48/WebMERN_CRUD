import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditData = () => {
  const [name, setName] = useState("");
  const [stok, setStok] = useState("");
  const [terjual, setTerjual] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jenis, setJenis] = useState("Konsumsi");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDataPenjualanById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/datapenjualan/${id}`, {
        name,
        stok,
        terjual,
        tanggal,
        jenis,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getDataPenjualanById = async () => {
    const response = await axios.get(`http://localhost:5000/datapenjualan/${id}`);
    setName(response.data.name);
    setStok(response.data.stok);
    setTerjual(response.data.terjual);
    setTanggal(response.data.tanggal);
    setJenis(response.data.jenis);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateData}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditData;