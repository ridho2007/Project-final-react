import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import NavigationBar from "../componen/NavigationBar";
import Foter from "../componen/Foter";
import Cart from "../componen/Cart";
function Makanan() {
  const [Makanan, setMakanan] = useState([]);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [img, setImg] = useState("");
  const [terjual, setTerjual] = useState("");
  const getAll = () => {
    axios
      .get("http://localhost:8000/Makanans")
      .then((res) => {
        setMakanan(res.data);
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
  const deleteMakanan = async (id) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:8000/Makanans/" + id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });

    getAll();
  };
  useEffect(() => {
    getAll();
  }, []);

  const beli = async (makanan) => {
    await axios.post("http://localhost:8000/cart", makanan);
    console.log(makanan);
    Swal.fire("Berhasil!", "Di masukan Ke keranjang", "success");
    
  };

  return (
    <div>
      {" "}
      <NavigationBar />
      <div className="container my-3">
        <center>
        <h1>Selamat Datang Silahkan Pilih Menu</h1></center>
        {Makanan.length !== 0 ? (
          <>
            <div>
              <div className="grid grid-cols-4 gap-3">
                {Makanan.map((Makanan) => {
                  return (
                    
                    <article class=" rounded-lg  border-4 border-orange-500 drop-shadow-xl w-100">
                      <img
                        alt="Office"
                        src={Makanan.img}
                        class="h-56 w-full object-cover"
                      />

                      <div class=" sm:p-6">
                        <h3 class="text-lg font-medium text-gray-900">
                          {Makanan.nama}
                        </h3>
                        <p>{Makanan.deskripsi}</p>
                        <div className="flex gap-20">
                          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            {Makanan.harga}
                          </p>
                          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            {Makanan.terjual}_Terjual
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button
                          onClick={() => beli(Makanan)}
                          className="ml-2 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3"
                        >
                          Pesan
                        </button>
                        {localStorage.getItem("role") === "admin" && (
                        <Button
                          variant="danger"
                          className="ml-2 text-white rounded-lg p-2 mb-3"
                          onClick={() => deleteMakanan(Makanan.id)}
                        >
                          Hapus
                        </Button>
                          )}
                        {/* tombol ini akan mengarah ke page lain */}
                        {localStorage.getItem("role") === "admin" && (
                        <a href={"/edit/" + Makanan.id}>
                          <Button variant="warning" className="mx-1">
                            ubah
                          </Button>
                        </a>
                        )}
                      </div>
                      
                    </article>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>TIDAK ADA DATA</div>
          </>
        )}
      </div>
      <Foter />
    </div>
  );
}

export default Makanan;
