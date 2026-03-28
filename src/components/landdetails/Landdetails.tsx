"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "./landdetails.css";

type Props = {
  landDetail: any;
};

const ListingDetail = ({ landDetail }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="wrapper-layout listing-wrapper section">
      <div className="container">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            <div className="topinfo_land_one">
              {/* GALLERY */}
              <div className="gallery">
                {/* MAIN SLIDER */}
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  className="swiper mainSwiper"
                >
                  {landDetail?.featured_image?.src && (
                    <SwiperSlide>
                      <img
                        src={landDetail.featured_image.src}
                        alt={landDetail.name}
                      />
                    </SwiperSlide>
                  )}

                  {landDetail?.gallery?.map((img: any, index: number) => (
                    <SwiperSlide key={index}>
                      <img src={img.src} alt={`gallery ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* THUMB SLIDER */}
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  spaceBetween={10}
                  className="swiper thumbSwiper"
                >
                  {landDetail?.featured_image?.src && (
                    <SwiperSlide>
                      <img
                        src={landDetail.featured_image.src}
                        alt={landDetail.name}
                      />
                    </SwiperSlide>
                  )}

                  {landDetail?.gallery?.map((img: any, index: number) => (
                    <SwiperSlide key={index}>
                      <img src={img.src} alt={`Thumbnail ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* PRICE + TITLE */}
            <div className="price-title">
              <h1>
                {landDetail.name} · {landDetail.price} ·{" "}
                {landDetail?.attributes?.["Land Size"]?.[0]?.name} Lot
              </h1>
              <p>{landDetail.address}</p>

              <span className="badge">
                {landDetail.estate?.estate_name} Estate
              </span>

              <a href="#" className="view-more">
                View More Listings in {landDetail.estate?.estate_name} Estate →
              </a>
            </div>

            {/* OVERVIEW */}
            <div className="content-box">
              <h2>Overview</h2>
              <p>{landDetail.description}</p>

              <h2>Key Features</h2>
              <ul>
                <li>370m² flat, level block ready to build</li>
                <li>12.5m frontage × 29.6m depth</li>
                <li>Fully serviced with water, sewer, power, NBN</li>
                <li>Located in the new Everdene Estate</li>
                <li>Close to schools, shops, and M4 Motorway</li>
              </ul>
            </div>

            {/* LOT DETAILS */}
            <div className="location-location">
              <h3>Lot Details</h3>

              <div className="lot-section">
                <div className="map-box">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(landDetail?.address)}&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "12px" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="estate-box">
                  <div>
                    <img src="/images/everdene-logo.jpg" alt="Everdene" />

                    <div className="estate_update">
                      <p>
                        <img src="/images/checked.png" width="16" />
                        <span>Listed by Everdene Developments</span>
                      </p>
                      <p>
                        <img src="/images/check.png" width="18" />
                        <span>Verified Developer</span>
                      </p>
                      <a href="#" className="btn-primary">
                        View All Estate Listings
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="mt-2">{landDetail.address}</h6>
            </div>

            {/* LOCATION LINKS */}
            {/* <div className="location-box">
              <div className="footer-quick-links">
                <h2 className="footer-title">Location</h2>

                <div className="quick-links-grid">
                  <a href="#" className="quick-link-card">
                    <h3>Lot 1147, Riverstone Drive, Mulgoa, NSW</h3>
                    <p>View All Mulgoa Listings</p>
                    <span className="arrow">
                      <i className="icon icon-arr-r"></i>
                    </span>
                  </a>

                  <a href="#" className="quick-link-card">
                    <h3>Nearby Estates in the Western Sydney Region</h3>
                    <p>Browse Western Sydney Estates</p>
                    <span className="arrow">
                      <i className="icon icon-arr-r"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-4">
            <div className="enquiry-box">
              <h3>Contact us below.</h3>

              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <button type="submit">Enquire Now</button>
              </form>

              <div className="secure-note">
                <div className="icon">
                  <img src="/images/lock.png" width="20" />
                </div>
                <strong>#1 Land Sales Site in Australia</strong>
                <p>Your enquiry is confidential and your details are secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetail;
