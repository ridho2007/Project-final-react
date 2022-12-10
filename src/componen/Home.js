import React from "react";
import NavigationBar from "./NavigationBar";
import Carousel from "react-bootstrap/Carousel";
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
                  101_terjual
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
                  61_terjual
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
                  Rp14.500
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  101_terjual
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
       
        
        
      </div>
      <Foter/>
    </div>
  );
}

export default Home;
