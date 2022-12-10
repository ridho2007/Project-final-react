import axios from "axios";
import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Swal from "sweetalert2";
import "../css/Cart.css"
const Cart = ({ Makanan, setMakanan, handleChange }) => {
  const [img, setImg] = useState(0);
  const [nama, setNama] = useState(0);
  const [harga, setHarga] = useState(0);
  const [cart, setCart] = useState([]);
  // const handleRemove = (id) => {
  //   const arr = cart.filter((Makanan) => Makanan.id !== id);
  //   setCart(arr);
  //   // handlePrice();
  // };
  const getAll = () => {
    axios
      .get("http://localhost:8000/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "memunculkan data",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  console.log(Makanan);

  const TotalHarga = cart.reduce(function (result, item) {
    return result + item.harga;
  }, 0);

  return (
    <div >
      <NavigationBar />
      <div>
      <table className="table table-bordered mx-10 my-5 " style={{width:1280}}>
          <thead>
            <tr>
              <th>No</th>
              <th>img</th>
              <th>nama</th>
              <th>harga</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((carts, index) => {
              return (
                <tr key={carts.id}>
                  <td>{index + 1}</td>
                  <td className="w-40">
                    <img src={carts.img} alt="" />{" "}
                  </td>
                  <td>{carts.nama}</td>
                  <td>{carts.harga}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div class="border-2 border-sky-500 w-60">
          <p>
            Total Harga:Rp 
           {TotalHarga}
          </p>
          <button>Ceckout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
