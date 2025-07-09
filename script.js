// Datos de los equipos
const equipos = [
  { nombre: "Custom 3 - Core I y II", integrantes: 13, asistencia: "On-site", DiasDeasistencia: "Lunes, Jueves, Viernes" },
  { nombre: "Custom 5 - Dynamics", integrantes: 10, asistencia: "On-site", DiasDeasistencia: "Martes, Miércoles, Jueves" },
  { nombre: "Producto", integrantes: 6, asistencia: "On-site", DiasDeasistencia: "Martes, Miércoles" },
  { nombre: "Consilium", integrantes: 2, asistencia: "On-site", DiasDeasistencia: "Jueves, Viernes" },
  { nombre: "Automatizaciones", integrantes: 3, asistencia: "On-site", DiasDeasistencia: "Miércoles, Jueves" },
  { nombre: "Vueling", integrantes: 11, asistencia: "On-site", DiasDeasistencia: "Lunes, Jueves" },
  { nombre: "Riyadh", integrantes: 15, asistencia: "On-site", DiasDeasistencia: "Martes, Jueves, Viernes" },
  { nombre: "Cyprus - Message - Infras - Infra Members", integrantes: 5, asistencia: "On-site", DiasDeasistencia: "Miércoles, Jueves, Viernes" },
  { nombre: "Sun Express", integrantes: 7, asistencia: "On-site", DiasDeasistencia: "Martes, Miércoles, Viernes" },
  { nombre: "Next Gen (Delta - Omega - AM) y Core UI", integrantes: 17, asistencia: "On-site", DiasDeasistencia: "Lunes, Martes, Miércoles" },
  { nombre: "Custom 1 - Platform", integrantes: 7, asistencia: "On-site", DiasDeasistencia: "Miércoles, Jueves, Viernes" },
  { nombre: "Scrum Master", integrantes: 12, asistencia: "On-site", DiasDeasistencia: "N/A" },
];

// Referencias a elementos del DOM  (Document Object Model)
const resultado = document.getElementById("resultado");
const inputBuscar = document.getElementById("buscarEquipo");
const totalEquipos = document.getElementById("totalEquipos");
const totalIntegrantes = document.getElementById("totalIntegrantes");
const equiposMostrados = document.getElementById("equiposMostrados");

// Función para actualizar estadísticas
function actualizarEstadisticas(lista) {
  totalEquipos.textContent = equipos.length;
  totalIntegrantes.textContent = equipos.reduce((total, equipo) => total + equipo.integrantes, 0);
  equiposMostrados.textContent = lista.length;
}

// Función para crear badges de días (Insignia de asistencia)
function crearBadgesDias(dias) {
  if (dias === "N/A") {
    return '<span class="day-badge">N/A</span>';
  }
  
  return dias.split(', ').map(dia => 
    `<span class="day-badge">${dia}</span>`
  ).join('');
}

// Función principal para mostrar equipos
function mostrarEquipos(lista) {
  if (lista.length === 0) {
    resultado.innerHTML = `
      <div class="error-message">
        <div class="error-icon">🔍</div>
        <div class="error-text">No se encontraron equipos que coincidan con tu búsqueda</div>
      </div>`;
    actualizarEstadisticas(lista);
    return;
  }

  resultado.innerHTML = lista
    .map(eq => `
      <div class="team-card">
        <h3>${eq.nombre}</h3>
        <div class="team-info">
          <div class="info-item">
            <div class="info-icon members">
              <i class="fas fa-users"></i>
            </div>
            <div class="info-text">
              <div class="info-label">Integrantes</div>
              <div class="info-value">${eq.integrantes} miembros</div>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon attendance">
              <i class="fas fa-building"></i>
            </div>
            <div class="info-text">
              <div class="info-label">Tipo de Asistencia</div>
              <div class="info-value">${eq.asistencia}</div>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon days">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="info-text">
              <div class="info-label">Días de Asistencia</div>
              <div class="days-badges">
                ${crearBadgesDias(eq.DiasDeasistencia)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
    .join("");
  
  actualizarEstadisticas(lista);
}

// Inicialización de la aplicación
function inicializarApp() {
  // Mostrar loading inicial
  resultado.innerHTML = '<div class="loading">Cargando equipos...</div>';
  
  // Simular carga y mostrar todos los equipos
  setTimeout(() => {
    mostrarEquipos(equipos);
  }, 500);
}

// Función de búsqueda con debounce
function configurarBusqueda() {
  let timeout;
  
  inputBuscar.addEventListener("input", function () {
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      const busqueda = this.value.trim().toLowerCase();
      
      if (busqueda === "") {
        mostrarEquipos(equipos);
        return;
      }
      
      const filtrados = equipos.filter(eq =>
        eq.nombre.toLowerCase().includes(busqueda) ||
        eq.DiasDeasistencia.toLowerCase().includes(busqueda)
      );
      
      mostrarEquipos(filtrados);
    }, 300);
  });
}

// Configurar animaciones adicionales
function configurarAnimaciones() {
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
}

// Inicializar aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  inicializarApp();
  configurarBusqueda();
  configurarAnimaciones();
});