import React from "react";
import NavigationBar from "./NavigationBar";
import Carousel from "react-bootstrap/Carousel";
import "../css/Home.css"
import Foter from "./Foter";
function Home() {
  return (
    <div>
      <NavigationBar />
      <div className=" mx-5 my-3">
        <div className="h-50">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className=" w-100 h-80"
                src="https://lh3.googleusercontent.com/IR8VgWfsolyd0gdpN_VjZQJVwC9QxWPxuoCQe9MXG3o_75b5LxpY_423sz02FAEQd1YTu8EOvsIoIxkLeQSKcusCyU13LDjRz7w=s0"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className=" w-100 h-80"
                src="https://lelogama.go-jek.com/post_featured_image/delivery_makanan_banner.jpeg"
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className=" w-100 h-80"
                src="https://i0.wp.com/zahiraccounting.com/id/blog/wp-content/uploads/2016/09/TWIT-Benarkah-setiap-customer-hanya-tertarik-dengan-promo-diskon-01.png"
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="w-100 h-80"
                src="https://awsimages.detik.net.id/community/media/visual/2022/08/19/adv-4.jpeg?w=700&q=90"
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="flex gap-5 mt-5">
<img className="w-40" src="https://final-project-resto.vercel.app/static/media/makanan.b2f2e3a7ffa4748d7994.webp" alt="" />
<div>
  <h2>Selamat Datang di Angkringan Mini </h2>
  <p>Angkringan Mini  telah berdiri sejak tahun 1999 hingga saat ini. Kami bergerak dibagian mengelola makanan bintang lima dengan harga yang merakyat, dimana alasan untuk mendirikan rumah makan ini karena seiring perkembangan jaman kebanyakan orang menginginkan makanan mewah dengan harga yang terjangkau</p>
</div>
        </div>
        <br />
        <center><h2>Menu Spesial Kami</h2></center>
        <br />
        <div className="flex gap-5">
          <article class=" rounded-lg border-4 border-sky-500 shadow-sm w-100">
          
            <img
              alt="Office"
              src="https://asset.kompas.com/crops/TRfLGkRwwRE0OdA4zvmtVujBXSI=/0x0:1000x667/780x390/data/photo/2020/06/02/5ed5f39c7d8fe.jpg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Bakso Sapi</h3>
              <p>Bakso daging Sapi Pilihan</p>
              <div className="flex gap-40">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp14.500
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  12_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
          <article class=" rounded-lg  border-4 border-sky-500 shadow-sm w-100">
            <img
              alt="Office"
              src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1594099345/attached_image/ini-manfaat-konsumsi-kopi-hitam-dan-efek-sampingnya-untuk-kesehatan.jpg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Kopi Tubruk</h3>
              <p>Dari Kopi Pilihan</p>
              <div className="flex gap-40 ">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp5.500
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  11_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
          <article class=" rounded-lg  border-4 border-sky-500 shadow-sm w-100 ">
            <img
              alt="Office"
              src="https://cdn-2.tstatic.net/jambi/foto/bank/images/cara-membuat-sosis-bakar.jpg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Sosis Bakar </h3>
              <p>Di Jual Perbiji</p>
              <div className="flex gap-40">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp6.500
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  10_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
        </div>
        <br />
        <center>
       <h1>Menu Yang Paling Laris Di Angkringan Kami</h1></center>
       <br />
       {/* Terlaris */}
       <div className="flex gap-5">
          <article class=" rounded-lg border-4 border-sky-500 shadow-sm w-100">
          
            <img
              alt="Office"
              src="https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7f59d1d7-d6f6-4572-a189-fe7bc4fbe2f3_Go-Biz_20210608_105903.jpeg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Good Day freaze</h3>
              <p>Bisa Pakai Es Atau Panas</p>
              <div className="flex gap-40">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp5.000
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  67_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
          <article class=" rounded-lg  border-4 border-sky-500 shadow-sm w-100">
            <img
              alt="Office"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Seblak-2021_12_13-10_04_57_018de15ea6744ab331d2ebfc9188bab4_620x413_thumb.jpg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Seblak Ceker</h3>
              <p>Pedas Berlevel</p>
              <div className="flex gap-40 ">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp17.500
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  54_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
          <article class=" rounded-lg  border-4 border-sky-500 shadow-sm w-100 ">
            <img
              alt="Office"
              src="https://asset.kompas.com/crops/eXdiOnlTdAHUvCXK-Oq4XRODlq0=/0x0:1000x667/780x390/data/photo/2021/09/08/613812d19a190.jpeg"
              class="h-56 w-full object-cover"
            />

            <div class=" sm:p-6">
              <h3 class="text-lg font-medium text-gray-900">Takoyaki </h3>
              <p>Satu Porsi Berisi 6 Takoyaki</p>
              <div className="flex gap-40">
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Rp14.000
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  44_terjual
                </p>
              </div>
            </div>
            <a href="/makanan" class="">
              <button className="ml-5 bg-amber-700 text-white rounded-lg p-2 hover:bg-amber-600 mb-3">
                Buat Pesanan
              </button>
            </a>
          </article>
        </div>
        
      </div>
      <Foter/>
    </div>
  );
}

export default Home;
