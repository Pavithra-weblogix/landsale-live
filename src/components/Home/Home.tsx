"use client";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import { BlogListResponse, StateCountResponse } from "@/types/apiTypes";
import { formatDate } from "@/lib/utils/formatDate";

type HomeProps = {
  blogs: BlogListResponse;
  stateCount: StateCountResponse;
};

export const Home = ({ blogs, stateCount }: HomeProps) => {
  return (
    <>
      {/* HERO SEARCH */}
      <section className="flat-slider home-1 home_new">
        <div className="container relative">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="slider-content">
                <div className="search-bar">
                  <div className="tabs">
                    <button>
                      <i className="icon icon-buy-home1"></i> Buy Land
                    </button>
                    <span>|</span>
                    <button>
                      <i className="icon icon-listing"></i> List Land
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Location: state, region / suburb"
                  />
                  <button className="btn-primary">Search Land</button>
                </div>

                <div className="banner_keyword hidden-xs">
                  <ul>
                    <li>Verified Developers</li>
                    <li>Direct Enquires</li>
                    <li>Australia-Wide Listings</li>
                    <li>New Listings Daily</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </section>

      {/* BROWSE BY STATE */}
      <section className="flat-section flat-categories">
        <div className="container">
          <h2 className="section-title text-center">Browse Land by State</h2>

          <div className="state-grid">
            {stateCount?.data?.map((item) => (
              <div key={item?.state} className="state-card">
                {item?.state}
                <br />
                <span>{item?.count}</span>
              </div>
            ))}
          </div>

          <div className="tags">
            <span>Melbourne West</span>
            <span>Gold Coast</span>
            <span>Geelong</span>
            <span>Central Coast</span>
            <span>Bendigo</span>
            <span>Latrobe</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container">
        <div className="featured">
          <div className="featured-content">
            <small>
              <span className="icon icon-star"></span> Sponsored
            </small>
            <h3>Lake Narracan Estate</h3>
            <p>Moe, VIC · 512 – 1,277 sqm</p>
            <div className="buttons">
              <button className="btn-primary">View Estate</button>
              <button className="btn-outline">Enquire</button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWEST LAND LISTINGS */}
      <section className="flat-section slider_new flat-categories arrow_shadow pt-0">
        <div className="container">
          <div className="box-title style-1">
            <h3 className="title mt-4">Newest Land Listings</h3>
          </div>
          <div className="wrap-categories-sw">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".nav-prev-category",
                prevEl: ".nav-next-category",
              }}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                992: { slidesPerView: 4 },
              }}
              className="tf-sw-categories"
            >
              {[
                {
                  title: "Lake Narracan Estate",
                  location: "Moe, VIC",
                  price: "$900,000",
                  size: "512 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg",
                },
                {
                  title: "Evergreen Park",
                  location: "Logan, QLD",
                  price: "$310,000",
                  size: "122 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/03/2525-figtree-illawarra-new-south-wales.jpg",
                },
                {
                  title: "Alkina",
                  location: "Mickleham, VIC",
                  price: "$535,000",
                  size: "572 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-sutton-capital-new-south-wales.jpg",
                },
                {
                  title: "Golden Grove Estate",
                  location: "Wattle Grove, WA",
                  price: "$705,000",
                  size: "170 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg",
                },
                {
                  title: "Lake Narracan Estate",
                  location: "Moe, VIC",
                  price: "$900,000",
                  size: "512 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg",
                },
                {
                  title: "Evergreen Park",
                  location: "Logan, QLD",
                  price: "$310,000",
                  size: "122 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/03/2525-figtree-illawarra-new-south-wales.jpg",
                },
                {
                  title: "Alkina",
                  location: "Mickleham, VIC",
                  price: "$535,000",
                  size: "572 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-sutton-capital-new-south-wales.jpg",
                },
                {
                  title: "Golden Grove Estate",
                  location: "Wattle Grove, WA",
                  price: "$705,000",
                  size: "170 sqm",
                  img: "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg",
                },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <Link href="/" className="homelengo-categories">
                    <div className="listing-card">
                      <div className="image_card">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="info_content">
                        <h4>{item.title}</h4>
                        <p className="location">
                          <i className="icon icon-mapPin"></i> {item.location}
                        </p>
                        <div className="price">
                          <span className="price_data">{item.price}</span>
                          <span className="sqft_data">
                            <i className="icon icon-sqft"></i> {item.size}
                          </span>
                        </div>
                        <div className="buttons">
                          <button className="btn-primary">View Estate</button>
                          <button className="btn-outline">Enquire</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="nav-prev-category swiper-button-next round-toggle"></div>
            <div className="nav-next-category swiper-button-prev round-toggle"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container cta-grid">
        <div className="cta-card">
          <div className="content_area">
            <h3>For Developers</h3>
            <p>List your estate to buyers across Australia</p>
            <ul>
              <li>Featured placement</li>
              <li>Lead capture & analytics</li>
            </ul>
            <button className="btn-primary">Developer Portal</button>
          </div>
        </div>

        <div className="cta-card light">
          <div className="content_area">
            <h3>For Private Sellers</h3>
            <p>List your block in minutes and manage enquiries</p>
            <ul>
              <li>Upload photos</li>
              <li>Set price & manage leads</li>
            </ul>
            <button className="btn-primary">Post a Listing</button>
          </div>
        </div>
      </section>
      <section className="flat-section bg-primary-new">
        <div className="container">
          <div className="box-title text-left">
            <h3 className="title mt-4 fw-6">
              <a href="">Blog(s), News & Latest Updates</a>
            </h3>
          </div>

          <div className="slider_control">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".nav-prev-latest",
                prevEl: ".nav-next-latest",
              }}
              spaceBetween={15}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="tf-sw-latest"
            >
              {blogs?.data?.map((item) => (
                <SwiperSlide id={String(item?.id)}>
                  <Link
                    href={`/${item?.slug}`}
                    className="flat-blog-item hover-img"
                  >
                    <div className="img-style">
                      <img src={item?.image} alt={item?.title} />
                    </div>
                    <div className="content-box">
                      <div className="post-author">
                        <span>{formatDate(item?.date)}</span>
                      </div>
                      <h5 className="title link">{item?.title}</h5>
                      <p
                        className="description"
                        dangerouslySetInnerHTML={{ __html: item?.excerpt }}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAVIGATION */}
            <div className="nav-prev-latest swiper-button-next round-toggle"></div>
            <div className="nav-next-latest swiper-button-prev round-toggle"></div>
          </div>
        </div>
      </section>
    </>
  );
};
