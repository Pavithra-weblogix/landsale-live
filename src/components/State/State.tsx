"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./state.css";

const State = () => {
    const [expanded, setExpanded] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    const landData = [
        {
            badge: "Estate",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg",
            title: "Sunset Ridge Estate",
            location: "Box Hill",
            price: "From $599,900",
        },
        {
            badge: "Private",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/03/2525-figtree-illawarra-new-south-wales.jpg",
            title: "Lot 3, Little Forest",
            location: "Little Forest",
            price: "$649,900",
        },
        {
            badge: "Estate",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-sutton-capital-new-south-wales.jpg",
            title: "Highview Estate",
            location: "Morrisset",
            price: "Price on application",
        },
        {
            badge: "Private",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg",
            title: "Lot 7 Ocean Dr",
            location: "Lake Cathie",
            price: "$720,000",
        },
        // repeated cards (as per your HTML)
        {
            badge: "Estate",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg",
            title: "Sunset Ridge Estate",
            location: "Box Hill",
            price: "From $599,900",
        },
        {
            badge: "Private",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/03/2525-figtree-illawarra-new-south-wales.jpg",
            title: "Lot 3, Little Forest",
            location: "Little Forest",
            price: "From $649,900",
        },
        {
            badge: "Estate",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-sutton-capital-new-south-wales.jpg",
            title: "Highview Estate",
            location: "Morrisset",
            price: "Price on application",
        },
        {
            badge: "Private",
            image:
                "https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg",
            title: "Lot 7 Ocean Dr",
            location: "Lake Cathie",
            price: "$720,000",
        },
    ];
    const lots = [
        {
            image: "/images/land_lot1.jpg",
            title: "Lot 532",
            price: "$599,900",
            size: "370m²",
        },
        {
            image: "/images/land_lot2.jpg",
            title: "Lot 656",
            price: "$649,900",
            size: "457m²",
        },
        {
            image: "/images/land_lot1.jpg",
            title: "Lot 532",
            price: "Price on application",
            size: "509m²",
        },
    ];
    const quickLinks = [
        { title: "Sydney", subtitle: "Sydney Metro", href: "#" },
        { title: "Hunter Valley", subtitle: "NSW", href: "#" },
        { title: "Central Coast", subtitle: "Central Coast", href: "#" },
        { title: "Illawarra", subtitle: "South Coast", href: "#" },

        { title: "Sydney", subtitle: "Sydney Metro", href: "#" },
        { title: "Hunter Valley", subtitle: "NSW", href: "#" },
        { title: "Central Coast", subtitle: "Central Coast", href: "#" },
        { title: "Illawarra", subtitle: "South Coast", href: "#" },

        { title: "Sydney", subtitle: "Sydney Metro", href: "#" },
        { title: "Hunter Valley", subtitle: "NSW", href: "#" },
        { title: "Central Coast", subtitle: "Central Coast", href: "#" },
        { title: "Illawarra", subtitle: "South Coast", href: "#" },

        { title: "Sydney", subtitle: "Sydney Metro", href: "#" },
        { title: "Hunter Valley", subtitle: "NSW", href: "#" },
        { title: "Central Coast", subtitle: "Central Coast", href: "#" },
    ];
    return (
        <>
            <section className="section-top-map find_map_location">
                <div className="wrap-map">
                    <div id="map" className="row-height">
                        <Map
                            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                            initialViewState={{
                                latitude: -37.970726,
                                longitude: 144.3937214,
                                zoom: 16,
                            }}
                            scrollZoom={true}
                            style={{ width: "100%", height: "100%" }}
                            mapStyle="mapbox://styles/mapbox/light-v11"
                        >
                            <Marker latitude={-37.970726} longitude={144.39372147} />
                        </Map>
                    </div>
                </div>
            </section>
            <section className="wrapper-layout layout-2 section">
                <div className="container">
                    <div className="topinfo_land_one">
                        <div className="content-wrapper">

                            <div className={`content ${expanded ? "expanded" : "collapsed"}`}>
                                {/* Dynamic Title */}
                                <h1 className="dynamic-title">
                                    104 Estates with Land for Sale in New South Wales, Australia
                                </h1>

                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        New South Wales is a vibrant property market, offering estates
                                        with blocks of land, house and land packages, and townhouses
                                        for sale. From the bustling hubs of Sydney South West and
                                        Sydney North West to the coastal charm of the Central Coast
                                        and the industrial strength of the Hunter Region (Greater
                                        Newcastle), NSW caters to diverse buyer needs. Governed by
                                        proactive local councils, these growth areas are primed for
                                        investment and lifestyle.
                                    </span>
                                </p>

                                <h2>
                                    <b>Getting Around New South Wales</b>
                                </h2>
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        NSW’s transportation infrastructure supports its thriving
                                        growth regions. Sydney’s rail network, including the Sydney
                                        Metro, T1 Western Line, and Central Coast &amp; Newcastle
                                        Line, connects suburbs like Parramatta, Blacktown, and
                                        Gosford. NSW TrainLink services extend to regional centers
                                        like Maitland. Key motorways such as the M1 Pacific, M4
                                        Western, and M5 ensure easy access to Sydney’s CBD and beyond.
                                        Planned expansions, like the Sydney Metro West, promise even
                                        greater connectivity.
                                    </span>
                                </p>

                                <h2>
                                    <b>Career Prospects in NSW</b>
                                </h2>
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        New South Wales offers robust employment opportunities across
                                        its key regions. Sydney South West and North West feature
                                        vibrant commercial centers like Liverpool, Campbelltown, and
                                        Parramatta, with retail hubs such as Westfield Penrith. The
                                        Hunter Region, anchored by Newcastle, thrives in healthcare,
                                        education, and manufacturing, supported by institutions like
                                        John Hunter Hospital and the University of Newcastle. The
                                        Central Coast is a growing hub for tourism and professional
                                        services.
                                    </span>
                                </p>

                                <h2>
                                    <b>Community and Leisure in NSW</b>
                                </h2>
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        NSW’s regions offer diverse lifestyles and amenities for
                                        families, professionals, and retirees. Sydney South West and
                                        North West provide vibrant communities with access to parks,
                                        top-rated schools, and major shopping precincts like
                                        Westfield Parramatta. The Central Coast blends coastal living
                                        with cultural attractions, including beaches like Avoca and
                                        events like the Central Coast Regional Show, appealing to
                                        outdoor enthusiasts and families. The Hunter Region offers a
                                        mix of urban and rural charm, with Newcastle’s vibrant arts
                                        scene, historic Maitland, and the renowned Hunter Valley wine
                                        region, ensuring a high quality of life for residents.
                                    </span>
                                </p>
                            </div>
                            {/* VIEW MORE / LESS BUTTON */}
                            <div className="view-more-wrap">
                                <button
                                    className="view-more-btn"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    {expanded ? "View Less" : "View More"}
                                    {/* <span className="arrow">{expanded ? "▲" : "▼"}</span> */}
                                </button>
                            </div>

                        </div>

                        {/* Empty button preserved as in original HTML */}

                    </div>
                </div>
            </section >
            <section className="top-search">
                <div className="container">
                    <div className="search-wrap" ref={wrapperRef}>

                        <div className="search-filters">

                            {/* LOCATION */}
                            <div className="filter">
                                <button
                                    className="filter-btn"
                                    onClick={() => toggleDropdown("location")}
                                >
                                    <i className="icon icon-mapPin"></i> Location
                                </button>

                                <div
                                    className={`dropdown ${openDropdown === "location" ? "active" : ""}`}
                                >
                                    <input type="text" placeholder="Search suburb or region" />
                                    <ul>
                                        <li>Sydney Metro</li>
                                        <li>Hunter Valley</li>
                                        <li>Central Coast</li>
                                        <li>Illawarra</li>
                                    </ul>
                                </div>
                            </div>

                            {/* PRICE */}
                            <div className="filter">
                                <button
                                    className="filter-btn"
                                    onClick={() => toggleDropdown("price")}
                                >
                                    $ Price
                                </button>

                                <div
                                    className={`dropdown ${openDropdown === "price" ? "active" : ""}`}
                                >
                                    <label>Min Price</label>
                                    <input type="number" placeholder="$100,000" />

                                    <label>Max Price</label>
                                    <input type="number" placeholder="$1,500,000" />

                                    <button className="apply-btn">Apply</button>
                                </div>
                            </div>

                            {/* LISTING */}
                            <div className="filter">
                                <button
                                    className="filter-btn"
                                    onClick={() => toggleDropdown("listing")}
                                >
                                    Listing Type
                                </button>

                                <div
                                    className={`dropdown checkbox_friendly ${openDropdown === "listing" ? "active" : ""
                                        }`}
                                >
                                    <label><input type="checkbox" /> Estate</label>
                                    <label><input type="checkbox" /> Private Seller</label>
                                    <label><input type="checkbox" /> Prestige</label>
                                </div>
                            </div>

                            {/* SORT */}
                            <div className="filter">
                                <button
                                    className="filter-btn"
                                    onClick={() => toggleDropdown("sort")}
                                >
                                    Sort
                                </button>

                                <div
                                    className={`dropdown ${openDropdown === "sort" ? "active" : ""}`}
                                >
                                    <ul>
                                        <li>Newest</li>
                                        <li>Price (Low → High)</li>
                                        <li>Price (High → Low)</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <button
                            className="reset-btn"
                            onClick={() => setOpenDropdown(null)}
                        >
                            Reset
                        </button>

                    </div>
                </div>
            </section>
            <section className="flat-section slider_new flat-categories arrow_shadow pt-0">
                <div className="container">
                    <div className="box-title style-1">
                        <h3 className="title mt-4">All Land for Sale in New South Wales</h3>
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
                                0: { slidesPerView: 2 },
                                576: { slidesPerView: 3 },
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
            <section className="section">
                <div className="container">
                    <div className="sponsored-project">
                        <span className="tag">Sponsored Project</span>

                        <div className="overlay">
                            <h2>Lake Narracan Resort</h2>
                            <p>Moe, VIC · Waterfront Land</p>

                            <div className="project-footer">
                                <span>From $245,000 · Multiple lots available</span>

                                <div className="actions">
                                    <Link href="#" className="btn outline">
                                        View Project
                                    </Link>

                                    <Link href="#" className="btn primary">
                                        Enquire <i className="icon icon-arr-r"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="land_list section">
                <div className="container">
                    <div className="card-grid">
                        {landData.map((item, index) => (
                            <article className="land-card" key={index}>
                                <div className="image_card">
                                    <span className="badge">{item.badge}</span>
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="info_content">
                                    <h3>{item.title}</h3>

                                    <p className="location">
                                        <i className="icon icon-mapPin"></i> {item.location}
                                    </p>

                                    <div className="footer_data">
                                        <p className="price">{item.price}</p>
                                        <i className="icon icon-arr-r"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="spot_lite">
                <div className="container">
                    <h2 className="section-title text-center">
                        Consider This Premium Estate in New South Wales
                    </h2>

                    <div className="spot_bg">
                        {/* ESTATE INFO */}
                        <div className="estate-box">
                            <div className="estate-info">
                                <h3>Everdene Estate</h3>
                                <p className="location">Mulgoa, NSW</p>
                                <p className="highlight">Naturally centred</p>
                                <p className="price">From $70/m²</p>

                                <div className="actions">
                                    <Link href="#" className="btn primary">
                                        View Estate <i className="icon icon-arr-r"></i>
                                    </Link>
                                    <Link href="#" className="btn outline">
                                        Enquire <i className="icon icon-arr-r"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* LOT LIST */}
                        <h5>Available Lots in Everdene Estate</h5>

                        <div className="lot-list">
                            {lots.map((lot, index) => (
                                <div className="lot-item" key={index}>
                                    <div className="lot_top">
                                        <img src={lot.image} alt={lot.title} />

                                        <div>
                                            <h3>{lot.title}</h3>
                                            <p className="price">{lot.price}</p>
                                            <span className="sqft">
                                                <i className="icon icon-sqft"></i> {lot.size}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="actions">
                                        <Link href="#" className="btn small primary">
                                            View
                                        </Link>
                                        <Link href="#" className="btn small outline">
                                            Enquire
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="land_list section">
                <div className="container">
                    <div className="card-grid">
                        {landData.map((item, index) => (
                            <article className="land-card" key={index}>
                                <div className="image_card">
                                    <span className="badge">{item.badge}</span>
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className="info_content">
                                    <h3>{item.title}</h3>

                                    <p className="location">
                                        <i className="icon icon-mapPin"></i> {item.location}
                                    </p>

                                    <div className="footer_data">
                                        <p className="price">{item.price}</p>
                                        <i className="icon icon-arr-r"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="footer-quick-links">
                <div className="container">
                    <h2 className="footer-title">Land For Sale by Region</h2>

                    <div className="quick-links-grid">
                        {quickLinks.map((item, index) => (
                            <Link href={item.href} className="quick-link-card" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                                <span className="arrow">
                                    <i className="icon icon-arr-r"></i>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default State;
