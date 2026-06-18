import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ava.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let <span className="purple"> Me </span> Introduce My Self
            </h1>

            <div className="home-about-body" style={{ color: "white", textAlign: "left", marginTop: "30px" }}>
              <p style={{ marginBottom: "20px" }}>
                Saya adalah seorang mahasiswi <b className="purple">Teknik Informatika</b> yang suka mengubah data dan ide kreatif menjadi aplikasi web yang andal dan solutif.
              </p>
              
              <p style={{ marginBottom: "20px" }}>
                Saya menguasai bahasa pemrograman utama seperti 
                <i>
                  <b className="purple"> JavaScript dan Python </b>
                </i>
                serta terbiasa bekerja di seluruh lini pengembangan aplikasi, baik frontend maupun backend menggunakan <b className="purple">React.js dan Node.js</b>.
              </p>
              
              <p style={{ marginBottom: "20px" }}>
                Fokus ketertarikan saya ada pada pengembangan &nbsp;
                <i>
                  <b className="purple">Web Aplikasi</b> serta eksplorasi di bidang{" "}
                  <b className="purple">
                    Data Science, Analisis Data, dan Machine Learning.
                  </b>
                </i>
              </p>
              
              <p style={{ marginBottom: "20px" }}>
                Di waktu luang, saya senang membangun backend API dengan <b className="purple">Express.js</b>, merancang manajemen alur kerja tim, serta mendeploy model kecerdasan buatan terapan ke platform modern seperti <b className="purple">Streamlit dan Hugging Face.</b>
              </p>
            </div>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;