import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container py-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">Mengajar</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/">Pemrograman Web</a>
              </li>
              <li>
                <a href="/">Pemrograman Android</a>
              </li>
              <li>
                <a href="/">Pemrograman Desktop</a>
              </li>
              <li>
                <a href="/">Pemrograman Berbasis Block</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
            <div className="fw-bold d-flex align-items-center mb-2">
              <span>Wengdev Community</span>
            </div>
            <p className="text-muted ">
              Sebuah Divisi Komunitas Coding dari{" "}
              <a href="https://wengdev.tech">Wengdev Tech</a> yang Berfokus Pada
              Pelatihan IT
            </p>
          </div>
        </div>
        <hr />
        <div className="text-muted d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">Copyright © 2024 Wengdev Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
