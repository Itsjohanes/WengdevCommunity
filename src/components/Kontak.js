//File: scr/components/Kontak.js

import emailjs from "emailjs-com";
import React, { useRef } from "react";

const Kontak = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_59pbig2",
        "template_smz8vaj",
        form.current,
        "Bu9pYcC97Ax-rv_sK"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className="fw-bold text-success mb-2">Kontak</p>
            <h2 className="fw-bold">Tertarik Belajar Private bersama Kami?</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div>
              <form className="p-3 p-xl-4" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    id="name-1"
                    name="name"
                    placeholder="Nama"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    id="email-1"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message-1"
                    name="message"
                    rows="6"
                    placeholder="Pesan"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary shadow d-block w-100"
                    type="submit"
                    value="send"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
            <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
            
              <div className="d-flex align-items-center p-3">
                <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-envelope"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                    ></path>
                  </svg>
                </div>
                <div className="px-2">
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="text-muted mb-0">info@wengdevlab.my.id</p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-pin"
                  >
                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"></path>
                  </svg>
                </div>
                <div className="px-2">
                  <h6 className="fw-bold mb-0">Lokasi Kami:</h6>
                  <p className="text-muted mb-0">Kota Bandung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
