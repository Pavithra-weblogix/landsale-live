"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header id="header" className="main-header header-fixed fixed-header">
      <div className="container">
        <div className="header-lower">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                {/* LEFT */}
                <div className="inner-header-left">
                  <div className="logo-box flex">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/images/logo-white.svg"
                          alt="logo"
                          className="logo-white"
                          width={180}
                          height={50}
                        />
                        <Image
                          src="/images/logo.svg"
                          alt="logo"
                          className="logo-dark"
                          width={180}
                          height={50}
                        />
                      </Link>
                    </div>
                  </div>

                  {/* DESKTOP NAV */}
                  <div className="nav-outer flex align-center">
                    <nav className="main-menu show navbar-expand-md">
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li>
                            <Link href="/">Home</Link>
                          </li>

                          <li className="dropdown2">
                            <Link href="#">Land for sale</Link>
                            <ul>
                              <li><Link href="#">New South Wales</Link></li>
                              <li><Link href="#">Queensland</Link></li>
                              <li><Link href="#">Western Australia</Link></li>
                              <li><Link href="#">Victoria</Link></li>
                              <li><Link href="#">South Australia</Link></li>
                              <li><Link href="#">Australian Capital Territory</Link></li>
                              <li><Link href="#">Tasmania</Link></li>
                              <li><Link href="#">Northern Territory</Link></li>
                            </ul>
                          </li>

                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact us</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>

                {/* MOBILE TOGGLER */}
                <div
                  className="mobile-nav-toggler mobile-button"
                  onClick={() => setMobileOpen(true)}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
          <div
            className="menu-backdrop"
            onClick={() => setMobileOpen(false)}
          ></div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/images/logo/logo.svg"
                  alt="nav-logo"
                  width={174}
                  height={44}
                />
              </Link>
            </div>

            <div className="bottom-canvas">
              {/* Clone desktop menu via CSS/JS if needed */}
              <div className="menu-outer">
                <ul className="navigation clearfix">
                  <li><Link href="/">Home</Link></li>
                  <li className="dropdown2">
                    <Link href="#">Land for sale</Link>
                    <ul>
                      <li><Link href="#">New South Wales</Link></li>
                      <li><Link href="#">Queensland</Link></li>
                      <li><Link href="#">Western Australia</Link></li>
                      <li><Link href="#">Victoria</Link></li>
                      <li><Link href="#">South Australia</Link></li>
                      <li><Link href="#">Australian Capital Territory</Link></li>
                      <li><Link href="#">Tasmania</Link></li>
                      <li><Link href="#">Northern Territory</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact us</Link></li>
                </ul>
              </div>
            </div>

            <div
              className="close-btn"
              onClick={() => setMobileOpen(false)}
            >
              <span className="icon flaticon-cancel-1"></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
