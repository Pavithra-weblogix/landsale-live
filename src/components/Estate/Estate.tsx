"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./estate.css";

const EverdeneEstatePage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const heroImages = ["land1.jpg", "land2.jpg", "land3.jpg", "land4.jpg"];

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="topinfo_land_one">
                    <div className="gallery">

                        {/* HERO OVERLAY */}
                        <div className="hero-overlay">
                            <img
                                src="/images/everdene-logo.png"
                                alt="Everdene Mulgoa"
                                className="logo"
                            />
                            <p className="tagline">
                                Acreage-Style Living • Wellbeing in Nature
                            </p>
                            <h2>
                                From <span>$599,900</span>
                            </h2>

                            <div className="hero-buttons">
                                <a href="#" className="btn-primary">
                                    Enquire Now
                                </a>
                            </div>
                        </div>

                        {/* MAIN SLIDER */}
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            navigation
                            thumbs={{ swiper: thumbsSwiper }}
                            className="swiper mainSwiper"
                        >
                            {heroImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={`/images/${img}`} alt="Land View" />
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
                            {heroImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={`/images/${img}`} alt="Thumbnail" />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section className="wrapper-layout listing-wrapper section">
                <div className="container">
                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8">
                            <div className="content-box">
                                <h2>About Everdene Estate</h2>
                                <p>
                                    Everdene Estate in Mulgoa offers premium, acreage-style living
                                    immersed in nature’s beauty. Nestled at the foot of the Blue
                                    Mountains, just 10 minutes from Penrith, this new community is
                                    designed for those seeking tranquillity without sacrificing
                                    convenience.
                                </p>

                                <h2>Estate Highlights</h2>
                                <ul className="highlights">
                                    <li>Large, family-sized lots ranging from 370m² to 800m²+</li>
                                    <li>Picturesque setting with views of the Blue Mountains</li>
                                    <li>Landscaped parks, playgrounds & walking trails</li>
                                    <li>Close to schools, shopping & transport links</li>
                                </ul>

                                <a href="#" className="btn-outline full">
                                    Download Estate Brochure
                                </a>
                            </div>

                            {/* LOCATION */}
                            <div className="location-location">
                                <h3>Location</h3>
                                <p>
                                    <strong>Everdene Estate</strong> • 237 The Sydren Road, Mulgoa,
                                    NSW
                                </p>
                                <a href="#" className="map-link">
                                    View on Google Maps <i className="icon icon-arr-r"></i>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="col-lg-4">
                            <aside className="sidebar">
                                <img
                                    src="/images/everdene-logo.png"
                                    className="sidebar-logo"
                                    alt="Everdene"
                                />
                                <p className="developer">
                                    Developed by Everdene Developments
                                </p>

                                <span className="verified">
                                    <img src="/images/check.png" width="18" />
                                    <span> Verified Developer</span>
                                </span>

                                <div className="info-row">
                                    <span>City Council</span>
                                    <strong>Penrith City Council</strong>
                                </div>
                                <div className="info-row">
                                    <span>Region</span>
                                    <strong>Western Sydney</strong>
                                </div>
                                <div className="info-row">
                                    <span>Estate Size</span>
                                    <strong>13D • 1015</strong>
                                </div>
                                <div className="info-row">
                                    <span>Lot Sizes</span>
                                    <strong>370m² – 800m²+</strong>
                                </div>
                                <div className="info-row">
                                    <span>Final Release</span>
                                    <strong>2024</strong>
                                </div>

                                <a href="#" className="btn primary full mt-3">
                                    View All Estate Listings
                                </a>
                            </aside>
                        </div>

                    </div>
                </div>
            </section>

            {/* RELATED ESTATES */}
            <section className="land_list section">
                <div className="container">
                    <h3>Everdene Estate Information</h3>

                    <p className="section-subtext">
                        Looking for more land options in the area? Browse these nearby
                        estates in Western Sydney.
                    </p>

                    <div className="card-grid">
                        {[
                            {
                                title: "Lake Narracan Estate",
                                location: "Moe, VIC",
                                price: "From $599,900",
                                size: "512 sqm",
                                img: "2530-huntley-illawarra-new-south-wales.jpg",
                            },
                            {
                                title: "Evergreen Park",
                                location: "Logan, QLD",
                                price: "From $649,900",
                                size: "632 sqm",
                                img: "2525-figtree-illawarra-new-south-wales.jpg",
                            },
                            {
                                title: "Golden Grove Estate",
                                location: "Wattle Grove, WA",
                                price: "From $866,900",
                                size: "767 sqm",
                                img: "2620-sutton-capital-new-south-wales.jpg",
                            },
                            {
                                title: "Alkina",
                                location: "Mickleham, VIC",
                                price: "From $720,000",
                                size: "688 sqm",
                                img: "2620-tralee-capital-new-south-wales.jpg",
                            },
                        ].map((item, i) => (
                            <article className="land-card" key={i}>
                                <div className="image_card">
                                    <img
                                        src={`/images/${item.img}`}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="info_content">
                                    <h3>{item.title}</h3>
                                    <p className="location">
                                        <i className="icon icon-mapPin"></i> {item.location}
                                    </p>
                                    <div className="footer_data">
                                        <p className="price">{item.price}</p>
                                        <span className="sqft_data">
                                            <i className="icon icon-sqft"></i> {item.size}
                                        </span>
                                        <i className="icon icon-arr-r"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EverdeneEstatePage;
