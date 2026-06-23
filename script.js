document.addEventListener("DOMContentLoaded", () => {
  const studyData = {
  marks: {
    kicker: "STUD-001",
    title: "Identity Systems",
    text: "A study of marks, symbols, layout, and visual structure. This section explains how SHNK uses graphic systems to turn references, observations, and objects into a recognizable archive language.",
    details: [
      ["WHY MARKS", "Marks create memory. I use them to make objects, places, and ideas feel cataloged and permanent."],
      ["INFLUENCE", "Pulled from artist signatures, industrial labeling, military insignia, museum records, and archive stamps."],
      ["LAYOUT LOGIC", "Strong grids, heavy type, coded IDs, and restrained spacing make the system feel documented rather than decorative."]
    ]
  },

  language: {
    kicker: "STUD-002",
    title: "Naming Logic",
    text: "The naming system gives SHNK a sense of order. Each code, caption, and label turns the site into a field archive instead of a normal portfolio.",
    details: [
      ["WHY CODES", "Codes like SHNK-001, OBJ-200, and FAB-300 make each piece feel logged, classified, and traceable."],
      ["REFERENCE STYLE", "Inspired by military files, sports cards, historian notes, Smithsonian cataloging, and technical documentation."],
      ["TONE", "The writing stays short, direct, and archival. It should feel like a record, not a caption."]
    ]
  },

  materials: {
  kicker: "STUD-003",
  title: "Material Archive",
  text: "A working archive of physical materials used across SHNK objects.",
  cards: [
  {
    code: "MAT-001",
    name: "Felt / Fiber",
    image: "assets/felt.jpg",
    usedIn: "OBJ-003 Field Vessel"
  },
  {
    code: "MAT-003",
    name: "Paper / Board",
    image: "assets/paper.jpg",
    usedIn: "OBJ-004 Archive Book"
  },
  {
    code: "MAT-002",
    name: "Thread / Stitching",
    image: "assets/thread.jpg",
    usedIn: "OBJ-003 Field Vessel"
  }
]
},
};
const studyModal = document.getElementById("studyModal");
const studyKicker = document.getElementById("studyKicker");
const studyTitle = document.getElementById("studyTitle");
const studyText = document.getElementById("studyText");
const studyDetails = document.getElementById("studyDetails");
const studyClose = document.querySelector(".study-close");

function closeStudyModal() {
  if (studyModal) {
    studyModal.classList.remove("active");
  }
}
if (studyClose) {
  studyClose.addEventListener("click", closeStudyModal);
}

if (studyModal) {
  studyModal.addEventListener("click", (event) => {
    if (event.target === studyModal) {
      closeStudyModal();
    }
  });
}

document.querySelectorAll("[data-study]").forEach((card) => {
  card.addEventListener("click", () => {
    const data = studyData[card.dataset.study];
    if (!data || !studyModal) return;

    studyKicker.textContent = data.kicker;
    studyTitle.textContent = data.title;
    studyText.textContent = data.text;

    if (card.dataset.study === "materials") {
  const grouped = {
    "OBJ-003 / Field Vessel": data.cards.filter(material =>
      material.usedIn.includes("OBJ-003")
    ),
    "OBJ-004 / Archive Book": data.cards.filter(material =>
      material.usedIn.includes("OBJ-004")
    )
  };

  studyDetails.innerHTML = `
    <div class="material-grouped-archive">
      ${Object.entries(grouped).map(([groupTitle, materials]) => `
        <section class="material-project-group">
          <div class="material-group-heading">
            <span>USED IN</span>
            <h3>${groupTitle}</h3>
          </div>

          <div class="material-group-grid">
            ${materials.map(material => `
              <article class="material-specimen">
                <img src="${material.image}" alt="${material.name}">

                <div class="material-specimen-info">
                  <span>${material.code}</span>
                  <h4>${material.name}</h4>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
} else {
      studyDetails.innerHTML = data.details.map(([label, title]) => `
        <article class="study-detail">
          <span>${label}</span>
          <p>${title}</p>
        </article>
      `).join("");
    }

    studyModal.classList.add("active");
  });
});

if (studyClose) {
  studyClose.addEventListener("click", closeStudyModal);
}

if (studyModal) {
  studyModal.addEventListener("click", (event) => {
    if (event.target === studyModal) closeStudyModal();
  });
}
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const closeButton = document.querySelector(".modal-close");
  const archiveLoad = document.getElementById("archiveLoad");
const archivePrev = document.getElementById("archivePrev");
const archiveExtra = Array.from(document.querySelectorAll(".archive-extra"));

let archivePage = -1;
const archiveBatchSize = 10;

function updateArchiveBatch() {
  archiveExtra.forEach((item, index) => {
    const start = archivePage * archiveBatchSize;
    const end = start + archiveBatchSize;

    item.style.display =
      archivePage >= 0 && index >= start && index < end
        ? "grid"
        : "none";
  });

  if (archivePrev) {
  archivePrev.style.display =
    archivePage >= 0 ? "inline-flex" : "none";
}

  if (archiveLoad) {
  const moreItemsExist =
    (archivePage + 1) * archiveBatchSize < archiveExtra.length;

  archiveLoad.style.display =
    moreItemsExist ? "inline-flex" : "none";

  archiveLoad.textContent = "NEXT 10";
}
}

updateArchiveBatch();

if (archiveLoad) {
  archiveLoad.addEventListener("click", () => {
    archivePage++;
    updateArchiveBatch();
  });
}

if (archivePrev) {
  archivePrev.addEventListener("click", () => {
    archivePage--;
    updateArchiveBatch();
  });
}

  const eggData = {
    inspiration: {
      kicker: "REF-000",
      title: "Inspiration Field",
      text: "",
      sections: [
        {
          label: "Influences",
          items: [
            {
              name: "Ansel Adams",
              note: "Surf Sequence c. 1940",
              image: "assets/ansel-adams.jpg"
            },
            {
              name: "David Choe",
              note: "Pretty Unrealistic c. 2010",
              image: "assets/david-choe.jpg"
            },
            {
              name: "Andy Warhol",
              note: "Campbell's Noodle Soup Box c. 1986",
              image: "assets/andy-warhol.png"
            }
          ]
        },
        {
          label: "Observations",
          items: [
            {
              name: "OBS-001",
              note: "Convergence / 2025",
              image: "assets/matterhorn.jpeg",
              description: "Study of water, infrastructure, and mountain form meeting at a single point."
            },
            {
              name: "OBS-002",
              note: "Source / 2025",
              image: "assets/alpsriver.jpeg",
              description: "A glacial system reduced to flow, scale, and atmosphere."
            },
            {
              name: "OBS-003",
              note: "Form / 2025",
              image: "assets/matterhorn2.jpeg",
              description: "Isolated mountain geometry observed as object and silhouette."
            },
            {
              name: "OBS-004",
              note: "Boat Corridor / 2022",
              image: "assets/calimari.jpeg",
              description: "Night harbor light, reflection, and motion compressed into a narrow passage."
            },
            {
              name: "OBS-005",
              note: "Monolith / 2022",
              image: "assets/santorini.jpeg",
              description: "White architectural mass shaped by terrain, sun, and human settlement."
            },
            {
              name: "OBS-006",
              note: "Last Light / 2021",
              image: "assets/beachsunset.jpeg",
              description: "A minimal horizon study built from color, darkness, and distance."
            },
            {
              name: "OBS-007",
              note: "Winter Corridor / 2023",
              image: "assets/colorado.jpeg",
              description: "A cleared path through snow, trees, machinery, and weather."
            },
            {
              name: "OBS-008",
              note: "Elevated / 2022",
              image: "assets/athens.jpeg",
              description: "Ancient mass raised above the modern city line."
            }
          ]
        },
        {
          label: "Landscapes",
          items: [
            {
              name: "LND-001",
              note: "Lake Corridor / 2025",
              image: "assets/lakecomo.jpeg",
              description: "A passage through water, terrain, and atmosphere."
            },
            {
              name: "LND-002",
              note: "Storm Basin / 2025",
              image: "assets/storm.jpeg",
              description: "Weather settling into a lake basin between mountain walls."
            },
            {
              name: "LND-003",
              note: "Elevation Change / 2025",
              image: "assets/cablecar.jpeg",
              description: "Infrastructure tracing vertical movement through alpine space."
            },
            {
              name: "LND-004",
              note: "Stillwater / 2025",
              image: "assets/yellow.jpeg",
              description: "A calm lake plane framed by color, leisure, and distant terrain."
            }
          ]
        },
        {
          label: "Places",
          items: [
            {
              name: "PLC-001",
              note: "Bologna Axis / 2025",
              image: "assets/bologna.jpeg",
              description: "A street corridor organized by arches, stone, and a distant tower."
            },
            {
              name: "PLC-002",
              note: "Valley Floor / 2025",
              image: "assets/cloud.jpeg",
              description: "Settlement and field held between low weather and mountain walls."
            },
            {
              name: "PLC-003",
              note: "Settlement Edge / 2025",
              image: "assets/lakecomo2.jpeg",
              description: "Architecture stacked at the boundary between water and mountain."
            }
          ]
        },
        {
          label: "Events",
          items: [
            {
              name: "EVT-001",
              note: "Leaderboard / 2024",
              image: "assets/usopen.jpeg",
              description: "A temporary field record of competition, numbers, and ritual."
            },
            {
              name: "EVT-002",
              note: "Flyover / 2025",
              image: "assets/armynavy.jpeg",
              description: "Ceremony, scale, and engineered spectacle over a gathered crowd."
            }
          ]
        },
        {
          label: "Design References",
          items: [
            {
  name: "DSN-001",
  note: "Valentino Campaign / 1990",
  description: "Graphic Composition",
  caption: "Fashion photography treated as graphic design. Composition, typography, and form operate together as a unified visual system.",
  image: "assets/valentino.png"
},
            {
              name: "DSN-002",
              note: "Red Tatlin Love Seat / 1989",
              image: "assets/tatlin.png",
              description: "Sculptural Form / des. by Roberto Semprini + Mario Cananzi",
              caption: "Form as statement. The chair reduces seating to a continuous sculptural ribbon, showing how a bold singular gesture can create both function and visual presence.",
            },
            {
              name: "DSN-003",
              note: "Arco Lamp / 1962",
              image: "assets/arco.png",
              description: "Engineered Utility / des. by Pier Giacomo + Achille Castiglioni",
              caption: "An example of functional elegance. The design solves a practical problem through a single continuous form while maintaining visual lightness.",
            },
            {
              name: "DSN-004",
              note: "Hyundai Pony / 1974",
              image: "assets/hyundai.png",
              description: "Industrial Geometry / des. by Giorgetto Giugiaro",
              caption: "Geometric simplicity and honest proportion. The restrained surfacing and clear lines create an object that feels both utilitarian and timeless",
            },
            {
              name: "DSN-005",
              note: "Stereo / 1965",
              image: "assets/stereo.png",
              description: "System Design / des. by Pier Giacomo + Achille Castiglioni",
              caption: "Technology expressed as furniture. The design combines modularity, personality, and function into a single coherent system.",
            },
            {
              name: "DSN-006",
              note: "Shinkansen / 2011",
              image: "assets/kingfisher.png",
              description: "Engineered Motion / des. by Eiji Nakatsu",
              caption: "Form derived from function. Inspired by the kingfisher's beak, the Shinkansen demonstrates how natural systems can inform engineering solutions, producing a shape that is simultaneously efficient, recognizable, and elegant.",
              },
            {
              name: "DSN-007",
              note: "Palais Bulles / 1975",
              image: "assets/bubble.png",
              description: "Organic System / des. by Antti Lovag",
              caption: "An exploration of continuous form and spatial fluidity. The architecture rejects rigid geometry in favor of sculpted environments.",
            },
            {
              name: "DSN-008",
              note: "LEGO System / 1947",
              image: "assets/lego.png",
              description: "Constructive Logic / des. by Hilary Fisher Page",
              caption: "A study in modular design. Simple repeatable units create infinite possibilities through structure, connection, and recombination.",
            },
          ]
        }
      ]
    },

   fieldnotes: {
  kicker: "BIO-000",
  title: "Operator Record",
  layout: "playerCard",
  player: {
    code: "BIO-001",
    name: "Jacob Shankel",
    position: "Industrial Designer",
    status: "ACTIVE",
    origin: "Canton, Ohio",
    terrain: "Snake River Basin",
    image: "assets/IMG_2264.jpeg",

    stats: [
  ["PRIMARY DISCIPLINE", "Industrial Design"],
  ["TOOLS", "Digital / Physical"],
  ["OPERATING ENVIRONMENT", "Objects / Systems"],
  ["ACTIVE ARCHIVE", "SHNK Archive OS"],

  ["BASE", "Ohio"],
  ["REFERENCE TERRAIN", "Snake River Basin"],
  ["METHOD", "Observe / Build"],
  ["CLEARANCE", "Open Archive"]
],

    scouting: [
      "Systems thinking",
      "Object development",
      "Visual identity",
      "Fabrication",
      "Field observation",
      "Archive building"
    ],

    report:
  "Designer focused on building systems for collecting, organizing, and translating observations into physical and visual form. Work centers on identifying patterns across landscapes, objects, architecture, and culture, then transforming those observations into archives, identities, and designed artifacts.",
  }
},

  sketches: {
    kicker: "SKT-000",
    title: "Sketch Archive",
    text: "",
    sections: [
      {
        label: "Notebook",
        items: [
          {
            name: "SKT-001",
            note: "River Mark V1",
            image: "assets/IMG_4645.jpeg",
            description:
              "Early exploration of flow and movement."
          },
        ]
      },

    ]
  }
};

  const eggModal = document.getElementById("eggModal");
  const eggKicker = document.getElementById("eggKicker");
  const eggTitle = document.getElementById("eggTitle");
  const eggText = document.getElementById("eggText");
  const eggClose = document.querySelector(".egg-close");
  const eggGallery = document.getElementById("eggGallery");

  const recordModal = document.getElementById("recordModal");
  const recordClose = document.querySelector(".record-close");
  const recordId = document.getElementById("recordId");
  const recordTitle = document.getElementById("recordTitle");
  const recordMeta = document.getElementById("recordMeta");
  const recordImage = document.getElementById("recordImage");
  const recordCaption = document.getElementById("recordCaption");

  function openRecord(item) {
    if (
      !recordModal ||
      !recordId ||
      !recordTitle ||
      !recordMeta ||
      !recordImage
    ) {
      return;
    }

    recordId.textContent = item.name;
    recordTitle.textContent = item.note.split("/")[0].trim();
    recordMeta.textContent = item.description || item.note;
    recordImage.src = item.image;
    recordImage.alt = item.note;
    recordCaption.textContent = item.caption || "";
recordCaption.style.display = item.caption ? "block" : "none";

    recordModal.classList.add("active");
  }

  if (recordClose && recordModal) {
    recordClose.addEventListener("click", () => {
      recordModal.classList.remove("active");
    });

    recordModal.addEventListener("click", (event) => {
      if (event.target === recordModal) {
        recordModal.classList.remove("active");
      }
    });
  }

  if (eggModal && eggKicker && eggTitle && eggText && eggClose) {
    document.querySelectorAll("[data-popup]").forEach((hotspot) => {
      hotspot.addEventListener("click", () => {
        const data = eggData[hotspot.dataset.popup];
        if (!data) return;

        eggKicker.textContent = data.kicker;
        eggTitle.textContent = data.title;

        if (data.text) {
          eggText.innerHTML = data.text.replace(/\n/g, "<br>");
          eggText.style.display = "block";
        } else {
          eggText.innerHTML = "";
          eggText.style.display = "none";
        }

        if (eggGallery) {
          eggGallery.innerHTML = "";
if (data.layout === "playerCard") {
  const p = data.player;

  eggGallery.innerHTML = `
    <section class="player-card">
      <div class="player-card-header">
        <span>ARCHIVE CARD #001</span>
        <span>SHNK / Operator Record</span>
      </div>

      <div class="player-card-top">
        <div class="player-photo">
          ${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}
        </div>

        <div class="player-info">
          <p class="player-code">${p.code}</p>
          <h3>${p.name}</h3>
          <p class="player-position">${p.position}</p>

          <div class="player-meta">
  <span>STATUS / ${p.status}</span>
  <span>CLEARANCE / OPEN ARCHIVE</span>

  <span>ORIGIN / ${p.origin}</span>
  <span>REFERENCE TERRAIN / ${p.terrain}</span>

  <span>ARCHIVE ID / SHNK-001</span>
  <span>LAST UPDATED / JUN 2026</span>
</div>
        </div>
      </div>

      <div class="player-stats">
        ${p.stats.map(([label, value]) => `
          <div>
            <b>${label}</b>
            <span>${value}</span>
          </div>
        `).join("")}
      </div>

      <div class="player-lower">
        <div class="player-report">
          <h4>SCOUTING REPORT</h4>
          <p>${p.report}</p>

          <h4>FIELD METRICS</h4>
<ul>
  <li>6+ Countries Logged</li>
  <li>5,000+ Photographs Archived</li>
  <li>500+ Sketches Recorded</li>
  <li>50+ Design Concepts Developed</li>
  <li>Research Across Europe + North America</li>
</ul>
        </div>

                </div>
      </div>

      <div class="related-record">
        <h4>RELATED RECORDS</h4>

        <a
          class="related-link"
          href="https://jacobvshankel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>ENG-001</span>
          <strong>Engineering Portfolio ↗</strong>
        </a>
      </div>

    </section>
  `;

  eggGallery.style.display = "block";
  eggModal.classList.add("active");
  return;
}
          if (data.sections) {
            data.sections.forEach((section) => {
              const sectionBlock = document.createElement("section");
              sectionBlock.className = "egg-section";

              const heading = document.createElement("h3");
              heading.textContent = section.label;
              sectionBlock.appendChild(heading);

              const grid = document.createElement("div");
              grid.className = "egg-gallery-grid";

              section.items.forEach((item) => {
                const card = document.createElement("article");
                card.className = "egg-card";

                card.innerHTML = `
                  ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                  <div>
                    <strong>${item.name}</strong>
                    <p>${item.note}</p>
                  </div>
                `;

                card.addEventListener("click", () => {
                  openRecord(item);
                });

                grid.appendChild(card);
              });

              sectionBlock.appendChild(grid);
              eggGallery.appendChild(sectionBlock);
            });

            eggGallery.style.display = "block";
          } else {
            eggGallery.style.display = "none";
          }
        }

        eggModal.classList.add("active");
      });
    });

    eggClose.addEventListener("click", () => {
      eggModal.classList.remove("active");
    });

    eggModal.addEventListener("click", (event) => {
      if (event.target === eggModal) {
        eggModal.classList.remove("active");
      }
    });
  }
// Archive image click-to-open
document.querySelectorAll(".archive-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    modalImage.src = thumb.dataset.modalSrc;
    modalTitle.textContent = thumb.dataset.modalTitle || "";
    imageModal.classList.add("is-open");
  });
});

// Close button
closeButton.addEventListener("click", () => {
  imageModal.classList.remove("is-open");
});

// Click outside image to close
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove("is-open");
  }
});

// ESC key closes modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (imageModal) imageModal.classList.remove("is-open");
    if (eggModal) eggModal.classList.remove("active");
    if (recordModal) recordModal.classList.remove("active");
    if (studyModal) studyModal.classList.remove("active");
  }
});
});