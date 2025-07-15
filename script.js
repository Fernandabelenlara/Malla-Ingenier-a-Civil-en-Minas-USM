const malla = document.getElementById("malla");

const semestres = [
  { nombre: "Primer semestre", ids: ["QUI-010", "MAT-021", "FIS-100", "MIN-100", "DEW-100"] },
  { nombre: "Segundo semestre", ids: ["IWI-131", "MAT-022", "FIS-110", "MIN-101", "DEW-101"] },
  { nombre: "Tercer semestre", ids: ["QUI-021", "MAT-023", "FIS-130", "MIN-102", "MIN-103", "DEW-0"] },
  { nombre: "Cuarto semestre", ids: ["IWM-185", "MAT-024", "FIS-120", "MIN-130", "MIN-205"] },
  { nombre: "Quinto semestre", ids: ["MIN-233", "FIS-140", "MIN-232", "MIN-250", "MIN-240", "HIW-310"] },
  { nombre: "Sexto semestre", ids: ["MIN-265", "MIN-235", "MIN-242", "MIN-260", "MIN-244", "HIW-311"] },
  { nombre: "Séptimo semestre", ids: ["IWN-170", "MIN-324", "MIN-314", "MIN-334", "MIN-270"] },
  { nombre: "Octavo semestre", ids: ["IWN-261", "MIN-1", "MIN-332", "MIN-344", "MIN-280"] },
  { nombre: "Noveno semestre", ids: ["IWN-270", "MIN-2", "MIN-354", "MIN-364", "MIN-220", "HRW-1"] },
  { nombre: "Décimo semestre", ids: ["MIN-384", "MIN-374", "MIN-370", "MIN-394", "MIN-397", "HRW-2"] },
  { nombre: "Onceavo semestre", ids: ["MIN-3", "MIN-398"] }
];

const ramos = [const ramos = [
  { id: "QUI-010", nombre: "Química y sociedad", requisitos: [] },
  { id: "MAT-021", nombre: "Matemática I", requisitos: [] },
  { id: "FIS-100", nombre: "Introducción a la física", requisitos: [] },
  { id: "MIN-100", nombre: "Introducción a la ingeniería de Minas", requisitos: [] },
  { id: "DEW-100", nombre: "Educación física I", requisitos: [] },
  { id: "IWI-131", nombre: "Programación", requisitos: [] },
  { id: "MAT-022", nombre: "Matemática II", requisitos: ["MAT-021"] },
  { id: "FIS-110", nombre: "Física general I", requisitos: ["FIS-100"] },
  { id: "MIN-101", nombre: "Trabajo en equipo", requisitos: ["MIN-100"] },
  { id: "DEW-101", nombre: "Educación física II", requisitos: ["DEW-100"] },
  { id: "QUI-021", nombre: "Química Básica", requisitos: ["QUI-010"] },
  { id: "MAT-023", nombre: "Matemática III", requisitos: ["MAT-022"] },
  { id: "FIS-130", nombre: "Física general III", requisitos: ["FIS-110"] },
  { id: "MIN-102", nombre: "Industria minera", requisitos: ["MIN-100"] },
  { id: "MIN-103", nombre: "Ciencia ambiental", requisitos: ["MIN-100"] },
  { id: "DEW-0", nombre: "Deporte", requisitos: ["DEW-101"] },
  { id: "IWM-185", nombre: "Gráfica en ingeniería", requisitos: ["IWI-131"] },
  { id: "MAT-024", nombre: "Matemática IV", requisitos: ["MAT-023"] },
  { id: "FIS-120", nombre: "Física general II", requisitos: ["FIS-110", "MAT-022"] },
  { id: "MIN-130", nombre: "Geología", requisitos: ["MIN-102"] },
  { id: "MIN-205", nombre: "Materiales para la industria minera", requisitos: ["FIS-110", "QUI-010"] },
  { id: "MIN-233", nombre: "Geomática", requisitos: ["MIN-102"] },
  { id: "FIS-140", nombre: "Física general IV", requisitos: ["FIS-130", "FIS-120"] },
  { id: "MIN-232", nombre: "Geología estructural y geotecnia", requisitos: ["MIN-130"] },
  { id: "MIN-250", nombre: "Procesamiento de minerales I", requisitos: ["MIN-130", "MIN-102"] },
  { id: "MIN-240", nombre: "Resistencia de materiales", requisitos: ["MIN-205", "MAT-023", "FIS-110"] },
  { id: "HIW-310", nombre: "Inglés para la ingeniería I", requisitos: [] },
  { id: "MIN-265", nombre: "Fluidodinámica en minería", requisitos: ["MAT-024", "FIS-130"] },
  { id: "MIN-235", nombre: "Geoestadística y análisis espacial", requisitos: ["MIN-233", "MIN-101"] },
  { id: "MIN-242", nombre: "Mecánica de rocas", requisitos: ["MIN-232", "MIN-240", "MAT-024"] },
  { id: "MIN-260", nombre: "Procesamiento de minerales II", requisitos: ["MIN-130", "MIN-102", "QUI-021", "MIN-103"] },
  { id: "MIN-244", nombre: "Perforación y tronadura", requisitos: ["MIN-232", "QUI-021", "FIS-130"] },
  { id: "HIW-311", nombre: "Inglés para la ingeniería II", requisitos: ["HIW-310"] },
  { id: "IWN-170", nombre: "Economía I-A", requisitos: ["MAT-023"] },
  { id: "MIN-324", nombre: "Ingeniería de medios granulares", requisitos: ["MIN-240"] },
  { id: "MIN-314", nombre: "Ingeniería de rocas", requisitos: ["MIN-244", "MIN-242"] },
  { id: "MIN-334", nombre: "Minería de superficie", requisitos: ["MIN-242", "MIN-244", "MIN-233"] },
  { id: "MIN-270", nombre: "Procesamiento de minerales III", requisitos: ["MIN-250", "MIN-260"] },
  { id: "IWN-261", nombre: "Administración general", requisitos: [] },
  { id: "MIN-1", nombre: "Electivo I", requisitos: [] },
  { id: "MIN-332", nombre: "Geología económica", requisitos: ["MIN-250", "MIN-260"] },
  { id: "MIN-344", nombre: "Minería subterránea", requisitos: ["MIN-233", "MIN-324", "MIN-314"] },
  { id: "MIN-280", nombre: "Procesamiento de minerales IV", requisitos: ["MIN-270"] },
  { id: "IWN-270", nombre: "Información y control financiero", requisitos: ["IWN-170"] },
  { id: "MIN-2", nombre: "Electivo II", requisitos: [] },
  { id: "MIN-354", nombre: "Automatización y robótica", requisitos: ["MIN-270", "MIN-334"] },
  { id: "MIN-364", nombre: "Evaluación de yacimientos y planificación minera", requisitos: ["MIN-235", "MIN-344", "MIN-334", "MIN-270"] },
  { id: "MIN-220", nombre: "Simulación y modelación", requisitos: ["MIN-270", "IWI-131", "MIN-334"] },
  { id: "HRW-1", nombre: "Humanístico I", requisitos: [] },
  { id: "MIN-384", nombre: "Legislación minera y laboral", requisitos: ["IWN-270", "IWN-261", "MIN-233"] },
  { id: "MIN-374", nombre: "Negocio minero sustentable", requisitos: ["MIN-280", "MIN-332"] },
  { id: "MIN-370", nombre: "Seguridad industrial y ventilación", requisitos: ["MIN-314", "MIN-265"] },
  { id: "MIN-394", nombre: "Taller de gestión y proyectos", requisitos: ["MIN-334", "MIN-270"] },
  { id: "MIN-397", nombre: "Trabajo de titulación I", requisitos: ["MIN-332", "MIN-344", "MIN-280"] },
  { id: "HRW-2", nombre: "Humanístico II", requisitos: [] },
  { id: "MIN-3", nombre: "Electivo III", requisitos: [] },
  { id: "MIN-398", nombre: "Trabajo de titulación II", requisitos: ["MIN-397"] }
];
];

const estadoRamos = {};

semestres.forEach(semestre => {
  const divSem = document.createElement("div");
  divSem.className = "semestre";
  const h2 = document.createElement("h2");
  h2.textContent = semestre.nombre;
  divSem.appendChild(h2);

  const fila = document.createElement("div");
  fila.className = "fila";

  semestre.ids.forEach(id => {
    const ramo = ramos.find(r => r.id === id);
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre + "\n(" + ramo.id + ")";
    div.dataset.id = ramo.id;

    if (ramo.requisitos.length > 0) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;
      div.classList.add("aprobado");
      estadoRamos[ramo.id] = true;
      actualizarEstado();
    });

    fila.appendChild(div);
  });

  divSem.appendChild(fila);
  malla.appendChild(divSem);
});

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const id = div.dataset.id;
    const info = ramos.find(r => r.id === id);
    if (!estadoRamos[id]) {
      const desbloqueado = info.requisitos.every(req => estadoRamos[req]);
      if (desbloqueado) {
        div.classList.remove("bloqueado");
      }
    }
  });
}
