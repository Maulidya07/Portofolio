import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semua! Saya <span className="purple">Maulidya Syifa Aszahra</span> dari <span className="purple">Bogor, Indonesia.</span>
            <br />
            Saat ini saya sedang menempuh perkuliahan semester 4 di <span className="purple">STT Terpadu Nurul Fikri</span>, mengambil jurusan Teknik Informatika.
            <br />
            <br />
            Selain fokus coding di bangku perkuliahan, saya aktif mengeksplorasi pembuatan aplikasi web modern serta pengolahan data science dalam proyek tim maupun individu.
            <br />
            <br />
            Beberapa aktivitas lain yang senang saya lakukan di luar coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Menulis Catatan Teknik & Dokumentasi Proyek
            </li>
            <li className="about-activity">
              <ImPointRight /> Mendesain Antarmuka Aplikasi (UI/UX)
            </li>
            <li className="about-activity">
              <ImPointRight /> Menjelajahi Tren Teknologi Baru
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Membangun teknologi bukan sekadar menulis kode, melainkan menciptakan solusi yang mempermudah kehidupan."{" "}
          </p>
          <footer className="blockquote-footer">Maulidya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;