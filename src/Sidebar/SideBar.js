import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "magnific-popup/dist/jquery.magnific-popup.min.js";
import "isotope-layout/dist/isotope.pkgd.min.js";
// import roundedImage from "./assets/images/man-face-circle.png";
// import developerImage from "./assets/images/man_designer.jpg";

import "./Style.css";

const SideBar = () => {
  useEffect(() => {
    const menuBtn = document.querySelector("#menu-btn");
    const sidebar = document.querySelector("#sidebar");
    const container = document.querySelector(".my-container");
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    });

    // Clean up the event listener on unmount
    return () => {
      menuBtn.removeEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        container.classList.toggle("active-cont");
      });
    };
  }, []);

  return (
    <>
      <div
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column shadow"
        id="sidebar"
      >
        <div className="sitebar-title">
          <h4 className="sidebar-title-text">RETRICA</h4>
        </div>
        <ul className="nav flex-column text-center w-100 mt-auto mb-auto">
          <a href="#" className="text-white my-2">
            {/* <img
              src={roundedImage}
              height="130"
              className="image-rounded-10-white shadow"
            /> */}
          </a>
          <li className="navsidebar-list">
            <a href="/index_sidebar.html" className="nav-sidebar-link active">
              HOME
            </a>
          </li>
          <li className="navsidebar-list">
            <a href="/index_sidebar_about.html" className="nav-sidebar-link">
              ABOUT
            </a>
          </li>
          <li className="navsidebar-list">
            <a
              href="/index_sidebar_portfolio.html"
              className="nav-sidebar-link"
            >
              PORTFOLIO
            </a>
          </li>
          <li className="navsidebar-list">
            <a href="/index_sidebar_blog.html" className="nav-sidebar-link">
              BLOG
            </a>
          </li>
          <li className="navsidebar-list">
            <a href="/index_sidebar_contact.html" className="nav-sidebar-link">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="text-center mb-3">
          <a className="social-link" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="social-link" href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="social-link" href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <p className="text-sm-copyright mt-3">
            &copy; 2022 ZERIFUS. All rights reserved
          </p>
        </div>
      </div>
      <div className="my-container active-cont">
        <nav class="navbar top-navbar px-5">
          <a class="btn border-0" id="menu-btn">
            <i class="bx bx-menu"></i>
          </a>
        </nav>
        <div className="main-container-sidebar">
          <div className="sidebar-page-head">
            <div className="container text-center">
              <h3 className="sidebar-page-title">HI, I AM JOHN DOE</h3>
              <span className="sidebar-page-desc">
                I am here to develope your website.
              </span>
            </div>
          </div>
          <div className="container mt-5 p-4">
            <div className="row">
              <div className="col-sm-4 col-12">
                {/* <img
                  className="border-10px shadow img-fluid"
                  height="300"
                  src={developerImage}
                /> */}
              </div>
              <div className="col-sm-8 col-12">
                <h3>JOHN DOE</h3>
                <p>WEB DEVELOPER</p>
                <p className="sidebar-about-me">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur hendrerit, leo vitae interdum pretium, tortor risus
                  dapibus tortor, eu suscipit orci leo sed nisl. Integer et
                  ipsum eu nulla auctor mattis sit amet in diam. Vestibulum non
                  ornare arcu. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Integer vitae
                  nunc, viverra nisl eget, dictum eros. Maecenas sit amet
                  iaculis massa. Sed dui tellus, pellentesque non enim eget,
                  cursus sollicitudin tellus. Cras eget varius enim. Aenean ac
                  libero finibus, varius nisi a, cursus magna. Vestibulum vitae
                  massa purus. Etiam vulputate ullamcorper diam, a iaculis nulla
                  placerat a. Aenean ac libero finibus, varius nisi a, cursus
                  magna. Vestibulum vitae massa purus. Etiam vulputate
                  ullamcorper diam, a iaculis nulla placerat a.
                </p>
              </div>
              <div className="col-sm-8 col-12 mt-4">
                <div>
                  <h3>EXPERIENCES</h3>
                  <div className="section-title-sidebar"></div>
                </div>
                <div className="sidebar-experience">
                  <h4>SENIOR WEB DEVELOPER</h4>
                  <p>2019-CURRENT</p>
                  <span className="sidebar-about-me">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur hendrerit, leo vitae interdum pretium, tortor
                    risus dapibus tortor, eu suscipit orci leo sed nisl
                  </span>
                </div>
                <div className="sidebar-experience">
                  <h4>JUNIOR WEB DEVELOPER</h4>
                  <p>2017-2019</p>
                  <span className="sidebar-about-me">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur hendrerit, leo vitae interdum pretium, tortor
                    risus dapibus tortor, eu suscipit orci leo sed nisl
                  </span>
                </div>
              </div>
              <div className="col-sm-4 col-12 mt-4">
                <div>
                  <h3>INFORMATION</h3>
                  <div className="section-title-sidebar"></div>
                </div>
                <div className="my-4 d-flex">
                  <i className="bx bx-envelope sidebar-contact-icon"></i>
                  <span className="sidebar-contact-info">mail@domain.com</span>
                </div>
                <div className="my-4 d-flex">
                  <i className="bx bx-phone sidebar-contact-icon"></i>
                  <span className="sidebar-contact-info">+880 1811499160</span>
                </div>
                <div className="my-4 d-flex">
                  <i className="bx bx-map-pin sidebar-contact-icon"></i>
                  <span className="sidebar-contact-info">
                    250/6 Japani bazar, Dhaka
                  </span>
                </div>
                <div className="my-4 d-flex">
                  <i className="bx bxl-whatsapp sidebar-contact-icon"></i>
                  <span className="sidebar-contact-info">+880 1811499160</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
