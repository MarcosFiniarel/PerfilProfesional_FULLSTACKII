import React from 'react';
import './App.css';

import PERFIL_IMAGE from './assets/Perfil.jpg';

const REACT_LOGO = '../assets/react.svg';

function App() {
  return (
    <div className="cyberpunk-theme bg-dark text-light min-vh-100 d-flex flex-column">
      {/* Header / Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark border-bottom border-cyan px-4 py-3 sticky-top bg-dark-translucent">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-magenta text-glitch" href="#home">
            MARCOS_LIZANA
          </a>
          <div className="ms-auto d-flex gap-3 align-items-center">
            <a href="#educacion" className="nav-link text-cyan hover-yellow">Educación</a>
            <a href="#experiencia" className="nav-link text-cyan hover-yellow">Experiencia</a>
            <a href="#herramientas" className="nav-link text-cyan hover-yellow">Herramientas</a>
            <a href="#contacto" className="btn btn-outline-cyan btn-sm">Contacto</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container py-5 my-auto">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <span className="badge bg-magenta-glow text-dark fw-bold mb-2 px-3 py-2">
              ESTUDIANTE DE INGENIERÍA EN INFORMÁTICA
            </span>
            <h1 className="display-3 fw-extrabold text-cyan mb-3">
              MARCOS E. <br />
              <span className="text-yellow">LIZANA G.</span>
            </h1>
            <p className="lead text-light-50 mb-4 me-lg-4">
              Estudiante de Ingeniería en Informática en Duoc UC (Sede Puente Alto), cursando tercer semestre. 
              Apasionado por el desarrollo de software, soluciones tecnológicas e innovación constante. 
              Persona responsable, proactiva, comprometida y con fuerte orientación al trabajo en equipo y la resolución de problemas.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-cyber-magenta px-4 py-2">
                Contactar
              </a>
              <a href="#experiencia" className="btn btn-outline-yellow px-4 py-2">
                Ver Trayectoria
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className="cyber-avatar-frame mx-auto">
              <img 
                src={PERFIL_IMAGE} 
                alt="Marcos Lizana - Profile Asset" 
                className="img-fluid cyber-avatar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Secciones Principal */}
      <main className="container py-4">
        <div className="row g-4">
          {/* Educación */}
          <section id="educacion" className="col-md-6">
            <div className="cyber-card p-4 h-100 border-magenta">
              <h2 className="h3 text-magenta mb-4 d-flex align-items-center gap-2">
                <span className="cyber-dot bg-magenta"></span> EDUCACIÓN
              </h2>
              <div className="timeline-item mb-3">
                <h3 className="h5 text-yellow mb-1">Ingeniería en Informática</h3>
                <p className="text-cyan mb-1">Duoc UC - Sede Puente Alto</p>
                <span className="badge bg-dark border border-cyan text-cyan">2025 - Actualidad</span>
                <p className="mt-2 mb-0">Cursando actualmente el tercer semestre.</p>
              </div>
            </div>
          </section>

          {/* Habilidades Bajas/Personales */}
          <section id="habilidades" className="col-md-6">
            <div className="cyber-card p-4 h-100 border-yellow">
              <h2 className="h3 text-yellow mb-4 d-flex align-items-center gap-2">
                <span className="cyber-dot bg-yellow"></span> HABILIDADES
              </h2>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li className="d-flex align-items-center gap-2">
                  <span className="text-magenta">&gt;</span> Orden y organización.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-magenta">&gt;</span> Comunicación respetuosa.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-magenta">&gt;</span> Compromiso con las tareas asignadas.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-magenta">&gt;</span> Responsabilidad y puntualidad.
                </li>
              </ul>
            </div>
          </section>

          {/* Herramientas Técnicas */}
          <section id="herramientas" className="col-12">
            <div className="cyber-card p-4 border-cyan">
              <h2 className="h3 text-cyan mb-4 d-flex align-items-center gap-2">
                <span className="cyber-dot bg-cyan"></span> HERRAMIENTAS TÉCNICAS
              </h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 bg-dark-translucent border border-secondary rounded">
                    <p className="mb-0 text-magenta">Manejo de Microsoft Office y Canva (nivel intermedio).</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-dark-translucent border border-secondary rounded">
                    <p className="mb-0 text-magenta">Herramientas digitales de uso académico.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-dark-translucent border border-secondary rounded">
                    <p className="mb-0 text-magenta">Conocimientos básicos en programación y desarrollo de software.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-dark-translucent border border-secondary rounded">
                    <p className="mb-0 text-magenta">Manejo básico de bases de datos.</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 bg-dark-translucent border border-secondary rounded">
                    <p className="mb-0 text-magenta">Uso de plataformas colaborativas y entornos virtuales.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experiencia Laboral */}
          <section id="experiencia" className="col-12">
            <div className="cyber-card p-4 border-magenta">
              <h2 className="h3 text-magenta mb-4 d-flex align-items-center gap-2">
                <span className="cyber-dot bg-magenta"></span> EXPERIENCIA
              </h2>
              
              <div className="row g-4">
                {/* Experiencia 1 */}
                <div className="col-md-6">
                  <div className="p-3 border-start border-3 border-cyan bg-dark-translucent h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="h5 text-cyan mb-0">Alumno Ayudante</h3>
                      <span className="badge bg-cyan text-dark">Mar 2026 - Actualidad</span>
                    </div>
                    <p className="text-yellow fw-semibold small">Duoc UC</p>
                    <ul className="text-light-50 small ps-3 mb-0">
                      <li>Apoyo en actividades académicas y prácticas.</li>
                      <li>Resolución de dudas básicas de estudiantes.</li>
                      <li>Guía en trabajos, ejercicios o actividades grupales.</li>
                      <li>Colaboración en la preparación de eventos.</li>
                      <li>Orden y control de materiales o equipos utilizados.</li>
                    </ul>
                  </div>
                </div>

                {/* Experiencia 2 */}
                <div className="col-md-6">
                  <div className="p-3 border-start border-3 border-yellow bg-dark-translucent h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="h5 text-yellow mb-0">Barman / Garzón</h3>
                      <span className="badge bg-yellow text-dark">May 2023 - Mar 2026</span>
                    </div>
                    <p className="text-cyan fw-semibold small">Prince of Wales Country Club</p>
                    <ul className="text-light-50 small ps-3 mb-0">
                      <li>Atención personalizada al cliente.</li>
                      <li>Control de stock de inventarios y reposición de productos.</li>
                      <li>Manejo de caja y diversos medios de pago.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sección de Contacto y Disponibilidad */}
      <footer id="contacto" className="mt-auto bg-dark-translucent border-top border-yellow py-4 px-3">
        <div className="container text-center">
          <div className="badge bg-yellow text-dark mb-3 px-3 py-2">
            DISPONIBILIDAD: Interés en trabajos Part Time | Compatible con mis estudios | Horarios a coordinar
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 my-2 text-cyan">
            <span>📍 Puente Alto, Chile</span>
            <span>✉️ <a href="mailto:ma.lizanag@duocuc.cl" className="text-cyan text-decoration-none">ma.lizanag@duocuc.cl</a></span>
            <span>✉️ <a href="mailto:marcoselg14@gmail.com" className="text-cyan text-decoration-none">marcoselg14@gmail.com</a></span>
            <span>📞 <a href="tel:+56920234190" className="text-yellow text-decoration-none">+56 9 2023 4190</a></span>
          </div>
          <p className="text-muted small mb-0 mt-3">&copy; {new Date().getFullYear()} Marcos E. Lizana G. — Cyberpunk Resume Edition</p>
        </div>
      </footer>
    </div>
  );
}

export default App;