import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// IMPORT GAMBAR PROYEK KAMU
import kualitasAirImg from "../../Assets/Projects/kualitas-air.png"; 
import studymateImg from "../../Assets/Projects/studymate.png"; 
import sentimenImg from "../../Assets/Projects/sentimen.png"; 
import greenDepokImg from "../../Assets/Projects/greendepok.png"; 
import fullsnackImg from "../../Assets/Projects/fullsnack.png"; 
import cosmosQImg from "../../Assets/Projects/cosmosQ.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Karya <strong className="purple">Proyek Saya </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek aplikasi web dan data science yang telah saya kembangkan.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kualitasAirImg}
              isBlog={false}
              title="Dashboard Analisis Kualitas Air"
              description="Aplikasi dashboard interaktif untuk pemantauan parameter fisikokimia dan sebaran geografis status mutu aliran sungai di wilayah Jakarta menggunakan Python dan framework visualisasi data."
              ghLink="https://github.com/Maulidya07/analisis-kualitas-air-jakarta.git"
              demoLink="https://hydroinsight.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studymateImg}
              isBlog={false}
              title="NLP StudyMate"
              description="Chatbot pintar tanya jawab materi NLP berbasis RAG (Retrieval-Augmented Generation). Menggunakan LLM Llama yang diintegrasikan via Groq API untuk kecepatan inference kilat, dikombinasikan dengan FAISS & BM25 sebagai sistem pencarian dokumen, serta di-deploy memakai Gradio."
              ghLink="https://github.com/Maulidya07/StudyMate.git"
              demoLink="https://huggingface.co/spaces/Mawrii/StudyMate" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimenImg}
              isBlog={false}
              title="Klasifikasi Sentimen E-Commerce"
              description="Sistem kecerdasan buatan terapan untuk memprediksi sentimen ulasan pengguna (positif/negatif) pada platform e-commerce secara otomatis menggunakan algoritma Decision Tree."
              ghLink="https://github.com/Maulidya07/Klasifikasi-Sentimen-E-commerce.git"
              demoLink="https://huggingface.co/spaces/Mawrii/Ecommerce-Sentiment-Analysis" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenDepokImg}
              isBlog={false}
              title="GREEN Depok"
              description="Platform pemandu ruang terbuka hijau digital untuk mempermudah warga dalam mencari dan mengeksplorasi lokasi taman di wilayah Depok, lengkap dengan integrasi pemetaan fitur jalur jogging dan fasilitas olahraga di sekitarnya."
              ghLink="https://www.figma.com/design/LY5Ji12XkG3xLJSkFVCmYh/GreenDepok?node-id=68-190&t=vwXMnfWnME1SM77P-1"
              demoLink="https://t.maze.co/401915570" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmosQImg}
              isBlog={false}
              title="Sistem Antrean Berbasis Web"
              description="Aplikasi manajemen antrean berbasis web untuk efisiensi layanan pengguna. Berperan aktif sebagai Scrum Master dalam menyusun product backlog, memfasilitasi sprint planning, dan mengoordinasikan pembagian tugas tim developer."
              demoLink="https://cosmos-queue.wildan-chan.com/"
              isScrumMaster={true} 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullsnackImg} 
              isBlog={false}
              title="Fullsnack E-Commerce"
              description="Pengembangan arsitektur backend RESTful API e-commerce menggunakan Node.js dan Express dengan pola MVC untuk manajemen katalog produk secara dinamis."
              ghLink="https://github.com/fatimahazzakiyah/FULLSNACK.git" 
              isOngoing={true} 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;