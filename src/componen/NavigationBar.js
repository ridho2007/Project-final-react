import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import { FaOpencart } from "react-icons/fa";
import { Modal, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import axios from "axios";
// import { useHistory } from "react-router-dom";
function NavigationBar() {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");
  const [img, setImg] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const addMakanan = async (e) => {
    e.preventDefault();

    const data = {
      nama: nama,
      deskripsi: deskripsi,
      harga: harga,
      img: img,
    };
    await axios

      .post("http://localhost:8000/Makanans", data)

      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((eror) => {
        Swal.fire({
          icon: "error",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const logout = () => {
    localStorage.clear();
    // history.push("/login");
    window.location.reload();
  };
  return (
    <div >
      <Navbar className="bg-orange-600" expand="lg fixed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="text-white">
              <h4> Angkringan</h4>
            </Nav.Link>
            <button>
              <Nav.Link href="/home" className="text-white">
                Beranda
              </Nav.Link>
            </button>
            {localStorage.getItem("role") === "admin" && (
              <button className="btn text-white" onClick={handleShow}>
                Tambah Barang
              </button>
            )}
            <button>
              <Nav.Link href="/makanan" className="text-white">
                Menu
              </Nav.Link>
            </button>
            <button>
              {localStorage.getItem("id") !== null ? (
                <>
                  <a href="/home" className="btn text-white" onClick={logout}>
                    Logout
                  </a>
                </>
              ) : (
                <a className="btn text-white" href="/login">
                  Login
                </a>
              )}{" "}
            </button>
            <a href="/cart">
            <FaOpencart
              style={{ marginLeft: 20, marginRight: 40, fontSize: 40 }}
            /></a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addMakanan}>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Makanan"
                onChange={(e) => setNama(e.target.value)}
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Deskripsi"
                onChange={(e) => setDeskripsi(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onChange={(e) => setHarga(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                type="url"
                placeholder="url"
                onChange={(e) => setImg(e.target.value)}
                required
              />
            </Form.Group>
            {/* jika di close maka akan keluar */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* jika di save maka akan menyimpan */}
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NavigationBar;
