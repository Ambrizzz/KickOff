document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".news-carousel");
    
    // Navegación con botones
    const leftButton = document.querySelector(".carousel-nav.left");
    const rightButton = document.querySelector(".carousel-nav.right");
  
    leftButton.addEventListener("click", () => {
      carousel.scrollLeft -= 300; // Ajusta la cantidad de desplazamiento
    });
  
    rightButton.addEventListener("click", () => {
      carousel.scrollLeft += 300; // Ajusta la cantidad de desplazamiento
    });
  });
// Array con las semanas y los partidos
const weeks = [
    { week: 15, matches: [
        { team1: "49ers", score1: 6, score2: 12, team2: "Rams", status: "Final", Live: false },
        { team1: "Saints", score1: 19, score2: 20, team2: "Commanders", status: "Final"},
        { team1: "Browns", score1: 7, score2: 21, team2: "Chiefs", status: "Final"},
        { team1: "Titans", score1: 27, score2: 37, team2: "Bengals", status: "Final"},
        { team1: "Texans", score1: 20, score2: 12, team2: "Dolphins", status: "Final"},
        { team1: "Giants", score1: 14, score2: 35, team2: "Ravens", status: "Final"},
        { team1: "Jaguars", score1: 25, score2: 32, team2: "Jets", status: "Final"},
        { team1: "Panthers", score1: 14, score2: 30, team2: "Cowboys", status: "Final"},
        { team1: "Chargers", score1: 17, score2: 23, team2: "Buccaneers", status: "Live", quarter: "Q3"},
        { team1: "Broncos", score1: 10, score2: 13, team2: "Colts", status: "Live", quarter: "Q3"},
        { team1: "Cardinals", score1: 16, score2: 3, team2: "Patriots", status: "Live", quarter: "Q4"},
        { team1: "Lions", score1: 14, score2: 28, team2: "Bills", status: "Live", quarter: "Q3"},
        { team1: "Eagles", score1: 20, score2: 13, team2: "Steelers", status: "Live", quarter: "Q3"},
        { team1: "Seahawks", score1: 0, score2: 0, team2: "Packers", status: "upcoming", quarter: "Q1", startTime: "Today", startTimeHour: "7:20 PM"},
        { team1: "Vikings", score1: 0, score2: 0, team2: "Bears", status: "upcoming", quarter: "Q1", startTime: "Tomorrow", startTimeHour: "7:00 PM"},
        { team1: "Raiders", score1: 0, score2: 0, team2: "Falcons", status: "upcoming", quarter: "Q1", startTime: "Tomorrow", startTimeHour: "7:30 PM"}
      ]
    },
    { week: 16, matches: [
        { team1: "Chargers", score1: 6, score2: 12, team2: "Broncos", status: "upcoming", quarter: "Q3", startTime: "Jue, Dic 19", startTimeHour: "7:15 PM" },
        { team1: "Chiefs", score1: 0, score2: 0, team2: "Texans", status: "upcoming", quarter: "Q3", startTime: "Sab, Dic 21", startTimeHour: "12:00 PM"},
        { team1: "Ravens", score1: 0, score2: 0, team2: "Steelers", status: "upcoming", quarter: "Q3", startTime: "Sab, Dic 21", startTimeHour: "3:30 PM"},
        { team1: "Bills", score1: 0, score2: 0, team2: "Patriots", status: "upcoming", quarter: "Q3", startTime: "Dom, Dic 22", startTimeHour: "12:00 PM"},
        { team1: "Falcons", score1: 0, score2: 0, team2: "Giants", status: "upcoming", quarter: "Q3", startTime: "Dom, Dic 22", startTimeHour: "12:00 PM"},
        { team1: "Bears", score1: 0, score2: 0, team2: "Lions", status: "upcoming", quarter: "Q3", startTime: "Dom, Dic 22", startTimeHour: "12:00 PM"},
        { team1: "Panthers", score1: 0, score2: 0, team2: "Cardinals", status: "upcoming", quarter: "Q3", startTime: "Dom, Dic 22", startTimeHour: "12:00 PM"},
        { team1: "Jets", score1: 0, score2: 0, team2: "Rams", status: "upcoming", quarter: "Q3", startTime: "Dom, Dic 22", startTimeHour: "12:00 PM"},
        { team1: "Commanders", score1: 0, score2: 0, team2: "Eagles", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "12:00 PM"},
        { team1: "Bengals", score1: 0, score2: 0, team2: "Browns", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "12:00 PM"},
        { team1: "Colts", score1: 0, score2: 0, team2: "Titans", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "12:00 PM"},
        { team1: "Seahawks", score1: 0, score2: 0, team2: "Vikings", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "3:05 PM"},
        { team1: "Raiders", score1: 0, score2: 0, team2: "Jaguars", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "3:25 PM"},
        { team1: "Dolphins", score1: 0, score2: 0, team2: "49ers", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 15", startTimeHour: "3:25 PM"},
        { team1: "Cowboys", score1: 0, score2: 0, team2: "Buccaneers", status: "upcoming", quarter: "Q3", startTime: "Sun, Dec 22", startTimeHour: "7:20 PM"},
        { team1: "Packers", score1: 0, score2: 0, team2: "Saints", status: "upcoming", quarter: "Q3", startTime: "Mon, Dec 23", startTimeHour: "7:15 PM"}
      ]
    }
  ];
  
  // Logos de los equipos
  const teamLogos = {
    Buccaneers: "logos/buccaneers.png",
    Chiefs: "logos/chiefs.png",
    Cowboys: "logos/cowboys.png",
    Falcons: "logos/falcons.png",
    Texans: "logos/texans.png",
    Jets: "logos/jets.png",
    Rams: "logos/rams.png",
    "49ers": "logos/49ers.png",
    Bears: "logos/bears.png",
    Packers: "logos/packers.png",
    Saints: "logos/saints.png",
    Commanders: "logos/commanders.png",
    Browns: "logos/browns.png",
    Titans: "logos/titans.png",
    Bengals: "logos/bengals.png",
    Dolphins: "logos/dolphins.png",
    Giants: "logos/giants.png",
    Ravens: "logos/ravens.png",
    Jaguars: "logos/jaguars.png",
    Panthers: "logos/panthers.png",
    Chargers: "logos/chargers.png",
    Broncos: "logos/broncos.png",
    Colts: "logos/colts.png",
    Cardinals: "logos/cardinals.png",
    Patriots: "logos/patriots.png",
    Lions: "logos/lions.png",
    Bills: "logos/bills.png",
    Eagles: "logos/eagles.png",
    Steelers: "logos/steelers.png",
    Seahawks: "logos/seahawks.png",
    Vikings: "logos/vikings.png",
    Raiders: "logos/raiders.png"
  };
  
  // Variables de estado
  let currentWeekIndex = 0;
  const weekNumber = document.getElementById('week-number');
  const matchesContainer = document.getElementById('matches-container');
  
  function renderMatches() {
    // Asegúrate de que el contenedor existe
    if (!matchesContainer) return;
  
    // Aplica la clase "fade-out" para iniciar la animación de salida
    matchesContainer.classList.remove('fade-in'); // Por si tiene la clase de entrada
    matchesContainer.classList.add('fade-out');
  
    // Esperar a que termine la animación de salida antes de actualizar el contenido
    setTimeout(() => {
      matchesContainer.innerHTML = ''; // Limpiar el contenido actual
      const currentWeek = weeks[currentWeekIndex];
      weekNumber.textContent = currentWeek.week; // Actualizar el número de la semana
  
      // Generar el contenido de los partidos
      currentWeek.matches.forEach(match => {
        const matchDiv = document.createElement('div');
        matchDiv.classList.add('score-card');
  
        // Estado del partido: live, final, upcoming
        if (match.status === "Live") {
          matchDiv.classList.add('live-now');
        } else if (match.status === "Final") {
          matchDiv.classList.add('completed');
        } else if (match.status === "upcoming") {
          matchDiv.classList.add('upcoming');
        }
  
        // Determinar al ganador o líder
        const team1IsWinner = match.status === "Final" && match.score1 > match.score2;
        const team2IsWinner = match.status === "Final" && match.score2 > match.score1;
        const team1IsLeading = match.status === "Live" && match.score1 > match.score2;
        const team2IsLeading = match.status === "Live" && match.score2 > match.score1;
  
        // Texto adicional para partidos en vivo
        const liveStatusHTML = match.status === "Live"
          ? `<div>Live</div>
             <div>${match.quarter}</div>`
          : "";
  
        // Formatear fecha y hora para partidos futuros
        const additionalStatusHTML = match.status === "upcoming"
          ? `
            <div>
              <div>${match.startTime}</div>
              <div>${match.startTimeHour}</div>
            </div>
          `
          : match.status;
  
        // Crear el contenido dinámico del partido
        matchDiv.innerHTML = `
          <div class="match">
            <div class="team ${team1IsWinner ? 'winner' : ''} ${team1IsLeading ? 'leading' : ''}">
              <img src="${teamLogos[match.team1]}" alt="${match.team1} logo" class="team-logo">
              ${match.team1}
            </div>
            <div class="team-score">${match.status === "upcoming" ? "-" : match.score1}</div>
            <div class="team-score">${match.status === "upcoming" ? "-" : match.score2}</div>
            <div class="team ${team2IsWinner ? 'winner' : ''} ${team2IsLeading ? 'leading' : ''}">
              <img src="${teamLogos[match.team2]}" alt="${match.team2} logo" class="team-logo">
              ${match.team2}
            </div>
          </div>
          <div class="status">${liveStatusHTML || additionalStatusHTML}</div>
        `;
        matchesContainer.appendChild(matchDiv);
      });
  
      // Cambiar a la animación "fade-in" después de actualizar el contenido
      matchesContainer.classList.remove('fade-out');
      matchesContainer.classList.add('fade-in');
    }, 300); // Duración de la animación de salida (300ms)
  }  
  
  
  
  // Función para parsear formato 'Dom, Dic 15'
  function parseCustomDateHTML(dateString) {
    // Mantener la fecha original como está
    return `
      <div>
        <div>Fecha: ${dateString}</div>
        <div>Hora: --:--</div> <!-- Si quieres hora estática -->
      </div>
    `;
  }
  
  
  // Manejo de las flechas para cambiar de semana
  document.getElementById('week-prev').addEventListener('click', () => {
    if (currentWeekIndex > 0) {
      currentWeekIndex--;
      renderMatches();
    }
  });
  
  document.getElementById('week-next').addEventListener('click', () => {
    if (currentWeekIndex < weeks.length - 1) {
      currentWeekIndex++;
      renderMatches();
    }
  });
  
  // Renderizar la semana inicial al cargar la página
  renderMatches();
