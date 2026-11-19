
  
    /* ==============================================================
       1. CONFIGURATION WHATSAPP
    ============================================================== */
    const WHATSAPP_NUMBER = "243898014307";
    const DEFAULT_MESSAGE = "Bonjour LBK (Lobiko), j'aimerais prendre contact avec le garage.";

    function buildWhatsAppUrl(message) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    document.querySelectorAll(".js-wa-link").forEach((link) => {
      link.href = buildWhatsAppUrl(DEFAULT_MESSAGE);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    /* ==============================================================
       2. DONNÉES DES 6 SERVICES (PHOTOS & TEXTES MODALES À PERSONNALISER)
    ============================================================== */
    const servicesData = [
      {
        code: "SERVICE 1",
        title: "Mécanique générale",
        image: "images/mec-generale.jpeg",
        modalDesc: "Nous assurons la remise en état mécanique de votre véhicule avec des outils de précision et des pièces fiables pour garantir sécurité et longévité.",
        tasks: [
          "Réfection et réparation complète du moteur",
          "Remplacement d'embrayage, boîte de vitesses et transmission",
          "Entretien du système de freinage, suspension et direction",
          "Contrôle et remplacement de courroies et joints"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
      },
      {
        code: "SERVICE 2",
        title: "Diagnostic Pro",
        image: "images/diagn.jpg",
        modalDesc: "Grâce à nos scanners professionnels, nous lisons en temps réel les calculateurs de votre véhicule pour identifier l'origine exacte des pannes.",
        tasks: [
          "Lecture et effacement des codes défauts multimarques",
          "Analyse en temps réel des capteurs moteur, ABS et Airbag",
          "Recherche de pannes électriques et électroniques complexes",
          "Rapport de santé complet avant achat ou long trajet"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
      },
      {
        code: "SERVICE 3",
        title: "Réparation véhicule toute marque",
        image: "images/toutcar.jpg",
        modalDesc: "Quel que soit le constructeur ou l'année de votre véhicule, nos techniciens appliquent les protocoles officiels adaptés à chaque motorisation.",
        tasks: [
          "Prise en charge berlines, 4x4, SUV et utilitaires",
          "Intervention sur moteurs essence, diesel et turbocompressés",
          "Remplacement de pièces selon les normes constructeurs",
          "Suivi personnalisé jusqu'à la remise en circulation"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`
      },
      {
        code: "SERVICES 4",
        title: "Programmation et duplication des clés",
        image: "images/cles.jpg",
        modalDesc: "Clé perdue, cassée ou besoin d'un double sécurisé ? Nous programmons directement vos clés et cartes de démarrage sur le calculateur antidémarrage.",
        tasks: [
          "Duplication de clés codées et clés intelligentes (Keyless)",
          "Programmation de clés même en cas de perte totale",
          "Synchronisation de télécommandes et centralisation",
          "Réparation de boîtiers et remplacement de transpondeurs"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`
      },
      {
        code: "SERVICE 5",
        title: "Entretien professionnel",
        image: "images/entretien.jpg",
        modalDesc: "Un entretien régulier est la meilleure prévention. Nous réalisons des révisions complètes avec des fluides et filtres de haute qualité.",
        tasks: [
          "Vidange moteur avec huiles synthétiques certifiées",
          "Remplacement complet des filtres (huile, air, carburant, habitacle)",
          "Contrôle des niveaux, batterie, climatisation et pneumatiques",
          "Réinitialisation des indicateurs de maintenance au tableau de bord"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
      },
      {
        code: "SERVICE 06",
        title: "Entretien des véhicules hybrides",
        image: "images/hybrid.jpg",
        modalDesc: "Les véhicules hybrides demandent un savoir-faire spécifique. LBK réalise le diagnostic et l'entretien sécurisé des systèmes électriques haute tension.",
        tasks: [
          "Test de santé et équilibrage des cellules de batterie hybride",
          "Entretien du système de refroidissement batterie et onduleur",
          "Diagnostic des défauts haute tension et gestion d'énergie",
          "Maintenance combinée du bloc thermique et électrique"
        ],
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
      }
    ];

    /* ==============================================================
       3. GÉNÉRATION DES CARTES & INTERACTIONS MODALE
    ============================================================== */
    const servicesGrid = document.getElementById("servicesGrid");
    const modal = document.getElementById("serviceModal");
    const modalCode = document.getElementById("modalCode");
    const modalTitle = document.getElementById("modalTitle");
    const modalPhoto = document.getElementById("modalPhoto");
    const modalDesc = document.getElementById("modalDesc");
    const modalTasks = document.getElementById("modalTasks");
    const modalWaLink = document.getElementById("modalWaLink");
    const modalClose = document.getElementById("modalClose");

    servicesData.forEach((service, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "service-card";
      card.innerHTML = `
        <div class="card-header">
          <div class="card-meta">
            <span class="module-code">${service.code}</span>
            <span class="service-mini-icon">${service.icon}</span>
          </div>
          <h3>${service.title}</h3>
        </div>
        <div class="card-photo-wrap">
          <img src="${service.image}" alt="${service.title}" loading="lazy" />
        </div>
        <div class="card-footer">
          <span class="card-action">En savoir plus &rarr;</span>
          <span class="card-plus" aria-hidden="true">+</span>
        </div>
      `;

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });

      card.addEventListener("click", () => openModal(index));
      servicesGrid.appendChild(card);
    });

    function openModal(index) {
      const service = servicesData[index];
      modalCode.textContent = service.code;
      modalTitle.textContent = service.title;
      modalPhoto.src = service.image;
      modalPhoto.alt = service.title;
      modalDesc.textContent = service.modalDesc;

      modalTasks.innerHTML = service.tasks
        .map((task) => `<li><span style="color:#38bdf8;">&#9656;</span><span>${task}</span></li>`)
        .join("");

      modalWaLink.href = buildWhatsAppUrl(
        `Bonjour LBK (Lobiko), je souhaite des informations sur le service : ${service.title}.`
      );

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });

    document.getElementById("year").textContent = new Date().getFullYear();
  