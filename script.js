const equipos = [
  { nombre: "Custom 3 - Core I y II", integrantes: 13, asistencia: "On-site" },
  { nombre: "Custom 5 - Dynamics", integrantes: 10, asistencia: "On-site" },
  { nombre: "Producto", integrantes: 6, asistencia: "On-site" },
  { nombre: "Consilium", integrantes: 2, asistencia: "On-site" },
  { nombre: "Automatizaciones", integrantes: 3, asistencia: "On-site" },
  { nombre: "Vueling", integrantes: 11, asistencia: "On-site" },
  { nombre: "Riyadh ", integrantes: 15, asistencia: "On-site" },
  { nombre: "Cyprus - Message - Infras - Infra Members", integrantes: 5, asistencia: "On-site" },
  { nombre: "Sun Express", integrantes: 7, asistencia: "On-site" },
  { nombre: "Next Gen (Delta - Omega - AM ) y Core UI", integrantes: 17, asistencia: "On-site" },
  { nombre: "Custom 1 - Platform ", integrantes: 7, asistencia: "On-site" },
];

const resultado = document.getElementById("resultado");
const inputBuscar = document.getElementById("buscarEquipo");

function mostrarEquipos(lista) {
  if (lista.length === 0) {
    resultado.innerHTML = `<div class="error-message">❌ No se encontraron equipos.</div>`;
    return;
  }

  resultado.innerHTML = lista
    .map(eq => `
      <div class="team-card">
        <h3>🧩 Equipo: ${eq.nombre}</h3>
        <p><strong>Integrantes:</strong> ${eq.integrantes}</p>
        <p><strong>Tipo de Asistencia:</strong> ${eq.asistencia}</p>
      </div>
    `)
    .join("");
}

// Mostrar todos los equipos inicialmente
mostrarEquipos(equipos);

// Filtrar al escribir
inputBuscar.addEventListener("input", function () {
  const busqueda = this.value.trim().toLowerCase();

  const filtrados = equipos.filter(eq =>
    eq.nombre.toLowerCase().includes(busqueda)
  );

  mostrarEquipos(filtrados);
});
