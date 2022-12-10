import axios from "axios";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    axios.get(" http://localhost:8000/Users").then(({ data }) => {
      const user = data.find(
        (x) => x.email === email && x.password === password
      );
      if (email === "Admin" && password === "123") {
        Swal.fire({
          icon: "success",
          title: "Selamat Datang Admin",
          showConfirmButton: false,
          timer: 1500,
        })
        localStorage.setItem("id", user.id);
        localStorage.setItem("role", user.role);
        history.push("/home");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (user) {
        Swal.fire({
          icon: "success",
          title: "Selamat Datang User",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("id", user.id);
        
        history.push("/home");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Sandi salah /try angain",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    
<div>
    {/* <div className="container border my-5 pt-3 pb-5 px-5">
      <h1 className="mb-5">Form Login</h1>
      <Form onSubmit={login} method="POST">
        <div className="mb-3">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </div>
        <button variant="primary" type="submit" className="mx-1 butom btn">
          Login
        </button>
      </Form>
    </div> */}
    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
          <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Login
          </h1>

          <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
            Harus Login Untuk Membeli
          </p>

          <form onSubmit={login} action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p class="text-lg font-medium">Login Ke Akun Mu</p>

            <div>
              <label for="email" class="text-sm font-medium">
                Email
              </label>

              <div class="relative mt-1">
              <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /></InputGroup>

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="text-sm font-medium">
                Password
              </label>

              <div class="relative mt-1">
              <InputGroup className="d-flex gap-3">
            <Form.Control
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
             type="submit"
              class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </div> );
}
