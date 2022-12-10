import React, {useState,useEffect} from 'react';
import {Form,InputGroup} from "react-bootstrap"
import { useHistory,useParams} from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
// import  "../style/pages.css" 
// metho edit
function Edit() {
    const param = useParams();
    const [nama,setNama] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [harga,setHarga] = useState("");
    const [img,setImg] = useState("");
// ini untuk menampilkan yang mau di edit
const history = useHistory();
useEffect(() =>{
    axios
    .get("http://localhost:8000/Makanans/"+ param.id)
    .then((response) => {
        const newBook = response.data;
        setNama(newBook.nama);
        setDeskripsi(newBook.deskripsi);
        setHarga(newBook.harga);
        setImg(newBook.img);
    })
    .catch((eror)=>{
        alert("terjadi kesalahan sir!" + eror);
    });
},[]);
// ini untuk mengeditnya
const submitActionHandler = async (event) =>{
    event.preventDefault();
    await axios.put("http://localhost:8000/Makanans/" +param.id,{
        nama:nama,
        deskripsi:deskripsi,
        harga:harga,
        img:img,
    })
    .then(() => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: 'Dont save',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            setTimeout(() => {
                history.push("/makanan");
                window.location.reload();
              
            }, 1500);
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Anda Tidak Merubah Data Apapun', '', 'info')
            }
          })
        
    })
    .catch((error) => {
        alert("Terjadi Kesalahan: " + error);
    });
  };
   

  return (
    <div className='edit mx-5'>
        <div className="container my-5">
            <Form onSubmit={submitActionHandler}>
                <div className="name mb-3">
                    <Form.Label>
                        <strong>name</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        placeholder="Judul"
                        value={nama}
                        onChange={(e) => setNama (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="place-of-birth mb-3">
                    <Form.Label>
                        <strong>deskripsi</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="place-of-birth mb-3">
                    <Form.Label>
                        <strong>Harga</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        type='text'
                        placeholder="Harga"
                        value={harga}
                        onChange={(e) => setHarga (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="birth-date mb-3">
                    <Form.Label>
                        <strong>Img</strong>
                    </Form.Label>
                    <div className="d-flex gap-3">
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        type="text"
                        placeholder="img"
                        value={img}
                        onChange={(e) => setImg (e.target.value)}
                        />
                    </InputGroup>
                </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mt-2">
                    <button variant="warning" className='buton btn' type="submit">
                        Save
                    </button>
                 
                </div>
            </Form>
        </div>
    </div>
  );
  }

export default Edit