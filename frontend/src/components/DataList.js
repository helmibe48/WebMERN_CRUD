import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataList = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const response = await axios.get("http://localhost:5000/datapenjualan");
    setData(response.data);
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/datapenjualan/${id}`);
      getDatas();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Stok</th>
              <th>Jumlah Terjual</th>
              <th>Tanggal Transaksi</th>
              <th>Jenis Barang</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
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
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;