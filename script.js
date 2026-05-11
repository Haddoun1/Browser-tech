const countries = [
  { code: "AFG", name: "Afghanistan" },
  { code: "ALA", name: "Åland" },
  { code: "ALB", name: "Albanië" },
  { code: "DZA", name: "Algerije" },
  { code: "VIR", name: "Amerikaanse Maagdeneilanden" },
  { code: "ASM", name: "Amerikaans-Samoa" },
  { code: "AND", name: "Andorra" },
  { code: "AGO", name: "Angola" },
  { code: "AIA", name: "Anguilla" },
  { code: "ATA", name: "Antarctica" },
  { code: "ATG", name: "Antigua en Barbuda" },
  { code: "ARG", name: "Argentinië" },
  { code: "ARM", name: "Armenië" },
  { code: "ABW", name: "Aruba" },
  { code: "AUS", name: "Australië" },
  { code: "AZE", name: "Azerbeidzjan" },
  { code: "BHS", name: "Bahama's" },
  { code: "BHR", name: "Bahrein" },
  { code: "BGD", name: "Bangladesh" },
  { code: "BRB", name: "Barbados" },
  { code: "BLR", name: "Belarus (Wit-Rusland)" },
  { code: "BEL", name: "België" },
  { code: "BLZ", name: "Belize" },
  { code: "BEN", name: "Benin" },
  { code: "BMU", name: "Bermuda" },
  { code: "BTN", name: "Bhutan" },
  { code: "BOL", name: "Bolivia" },
  { code: "BES", name: "Bonaire, St. Eustatius en Saba" },
  { code: "BIH", name: "Bosnië en Herzegovina" },
  { code: "BWA", name: "Botswana" },
  { code: "BRA", name: "Brazilië" },
  { code: "VGB", name: "Britse Maagdeneilanden" },
  { code: "IOT", name: "Brits Indische Oceaanterritorium" },
  { code: "BRN", name: "Brunei" },
  { code: "BGR", name: "Bulgarije" },
  { code: "BFA", name: "Burkina Faso" },
  { code: "BDI", name: "Burundi" },
  { code: "KHM", name: "Cambodja" },
  { code: "CAN", name: "Canada" },
  { code: "CAF", name: "Centraal-Afrikaanse Republiek" },
  { code: "CHL", name: "Chili" },
  { code: "CHN", name: "China" },
  { code: "COL", name: "Colombia" },
  { code: "COM", name: "Comoren" },
  { code: "COG", name: "Congo-Brazzaville" },
  { code: "COD", name: "Congo-Kinshasa" },
  { code: "CRI", name: "Costa Rica" },
  { code: "CUB", name: "Cuba" },
  { code: "CUW", name: "Curaçao" },
  { code: "CYP", name: "Cyprus" },
  { code: "DNK", name: "Denemarken" },
  { code: "DJI", name: "Djibouti" },
  { code: "DMA", name: "Dominica" },
  { code: "DOM", name: "Dominicaanse Republiek" },
  { code: "DEU", name: "Duitsland" },
  { code: "ECU", name: "Ecuador" },
  { code: "EGY", name: "Egypte" },
  { code: "SLV", name: "El Salvador" },
  { code: "EST", name: "Estland" },
  { code: "ETH", name: "Ethiopië" },
  { code: "FJI", name: "Fiji" },
  { code: "PHL", name: "Filipijnen" },
  { code: "FIN", name: "Finland" },
  { code: "FRA", name: "Frankrijk" },
  { code: "GAB", name: "Gabon" },
  { code: "GMB", name: "Gambia" },
  { code: "GEO", name: "Georgië" },
  { code: "GHA", name: "Ghana" },
  { code: "GRC", name: "Griekenland" },
  { code: "GRL", name: "Groenland" },
  { code: "GTM", name: "Guatemala" },
  { code: "GIN", name: "Guinee" },
  { code: "GUY", name: "Guyana" },
  { code: "HTI", name: "Haïti" },
  { code: "HND", name: "Honduras" },
  { code: "HUN", name: "Hongarije" },
  { code: "HKG", name: "Hongkong" },
  { code: "IRL", name: "Ierland" },
  { code: "ISL", name: "IJsland" },
  { code: "IND", name: "India" },
  { code: "IDN", name: "Indonesië" },
  { code: "IRQ", name: "Irak" },
  { code: "IRN", name: "Iran" },
  { code: "ISR", name: "Israël" },
  { code: "ITA", name: "Italië" },
  { code: "JAM", name: "Jamaica" },
  { code: "JPN", name: "Japan" },
  { code: "JOR", name: "Jordanië" },
  { code: "KAZ", name: "Kazachstan" },
  { code: "KEN", name: "Kenia" },
  { code: "KWT", name: "Koeweit" },
  { code: "HRV", name: "Kroatië" },
  { code: "LAO", name: "Laos" },
  { code: "LVA", name: "Letland" },
  { code: "LBN", name: "Libanon" },
  { code: "LBY", name: "Libië" },
  { code: "LIE", name: "Liechtenstein" },
  { code: "LTU", name: "Litouwen" },
  { code: "LUX", name: "Luxemburg" },
  { code: "MAC", name: "Macau" },
  { code: "MDG", name: "Madagaskar" },
  { code: "MWI", name: "Malawi" },
  { code: "MYS", name: "Maleisië" },
  { code: "MLT", name: "Malta" },
  { code: "MAR", name: "Marokko" },
  { code: "MEX", name: "Mexico" },
  { code: "MDA", name: "Moldavië" },
  { code: "MCO", name: "Monaco" },
  { code: "MNG", name: "Mongolië" },
  { code: "MNE", name: "Montenegro" },
  { code: "MOZ", name: "Mozambique" },
  { code: "MMR", name: "Myanmar" },
  { code: "NAM", name: "Namibië" },
  { code: "NPL", name: "Nepal" },
  { code: "NLD", name: "Nederland" },
  { code: "NZL", name: "Nieuw-Zeeland" },
  { code: "NIC", name: "Nicaragua" },
  { code: "NER", name: "Niger" },
  { code: "NGA", name: "Nigeria" },
  { code: "PRK", name: "Noord-Korea" },
  { code: "NOR", name: "Noorwegen" },
  { code: "OMN", name: "Oman" },
  { code: "AUT", name: "Oostenrijk" },
  { code: "PAK", name: "Pakistan" },
  { code: "PAN", name: "Panama" },
  { code: "PNG", name: "Papoea-Nieuw-Guinea" },
  { code: "PRY", name: "Paraguay" },
  { code: "PER", name: "Peru" },
  { code: "POL", name: "Polen" },
  { code: "PRT", name: "Portugal" },
  { code: "QAT", name: "Qatar" },
  { code: "ROU", name: "Roemenië" },
  { code: "RUS", name: "Rusland" },
  { code: "RWA", name: "Rwanda" },
  { code: "SAU", name: "Saoedi-Arabië" },
  { code: "SRB", name: "Servië" },
  { code: "SGP", name: "Singapore" },
  { code: "SVK", name: "Slowakije" },
  { code: "SVN", name: "Slovenië" },
  { code: "ESP", name: "Spanje" },
  { code: "LKA", name: "Sri Lanka" },
  { code: "SDN", name: "Soedan" },
  { code: "SOM", name: "Somalië" },
  { code: "SUR", name: "Suriname" },
  { code: "SWE", name: "Zweden" },
  { code: "CHE", name: "Zwitserland" },
  { code: "ZAF", name: "Zuid-Afrika" },
  { code: "KOR", name: "Zuid-Korea" },
  { code: "ZWE", name: "Zimbabwe" },
];

const datalist = document.getElementById("countries");
countries.forEach(({ name }) => {
  const option = document.createElement("option");
  option.value = name;
  datalist.appendChild(option);
});

const countryMap = Object.fromEntries(countries.map((c) => [c.name, c.code]));

const countryInput = document.getElementById("countryInput");
const countryCodeInput = document.getElementById("countryCode");
const countryCodeDisplay = document.getElementById("country-code-display");

countryInput.addEventListener("change", function () {
  const code = countryMap[this.value];
  if (code) {
    countryCodeInput.value = code;
    countryCodeDisplay.textContent = `Landcode: ${code}`;
  } else {
    countryCodeInput.value = "";
    countryCodeDisplay.textContent = "";
  }
});

const infoBtn = document.getElementById("country-info-btn");
const tooltip = document.getElementById("country-tooltip");

infoBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  const isOpen = tooltip.classList.toggle("open");
  tooltip.setAttribute("aria-hidden", String(!isOpen));
});

document.addEventListener("click", function (e) {
  if (!tooltip.contains(e.target) && e.target !== infoBtn) {
    tooltip.classList.remove("open");
    tooltip.setAttribute("aria-hidden", "true");
  }
});

const MESSAGES = {
  "initial-deceased": {
    valueMissing: "Vul de voorletter(s) in.",
    patternMismatch: "Gebruik alleen letters en punten, bijv. A. of A.B.",
  },
  "lname-deceased": {
    valueMissing: "Vul de achternaam in.",
    tooShort: "De achternaam moet minimaal 2 tekens bevatten.",
  },
  "bsn-deceased": {
    valueMissing: "Vul het BSN in.",
    patternMismatch: "Een BSN bestaat uit precies 9 cijfers.",
  },
  "date-of-death-deceased": {
    valueMissing: "Vul de overlijdensdatum in.",
    rangeUnderflow: "De datum moet na 1 januari 2025 liggen.",
    rangeOverflow: "De datum mag niet later dan 10 maart 2025 zijn.",
  },
  "bsn-deceased-2": {
    valueMissing: "Vul het BSN ter bevestiging in.",
    patternMismatch: "Een BSN bestaat uit precies 9 cijfers.",
    customError: "Het BSN komt niet overeen met het eerder ingevulde BSN.",
  },
  "notary-number": {
    valueMissing: "Vul het protocolnummer in.",
    rangeUnderflow: "Voer een geldig protocolnummer in.",
  },
  "initial-notary": {
    valueMissing: "Vul de voorletter(s) in.",
    patternMismatch: "Gebruik alleen letters en punten.",
  },
  "lname-notary": {
    valueMissing: "Vul de achternaam van de notaris in.",
  },
  "date-of-will": {
    valueMissing: "Vul de datum van het testament in.",
  },
  "initial-representative": {
    valueMissing: "Vul de voorletter(s) in.",
    patternMismatch: "Gebruik alleen letters en punten.",
  },
  "lname-representative": {
    valueMissing: "Vul de achternaam in.",
    tooShort: "De achternaam moet minimaal 2 tekens bevatten.",
  },
  "street-name-nl": { valueMissing: "Vul de straatnaam in." },
  "housenumber-nl": {
    valueMissing: "Vul het huisnummer in.",
    rangeUnderflow: "Voer een geldig huisnummer in.",
  },
  "zipcode-nl": {
    valueMissing: "Vul de postcode in.",
    patternMismatch: "Gebruik het formaat 1234 AB.",
  },
  "city-nl": { valueMissing: "Vul de woonplaats in." },
  "bsn-representative": {
    valueMissing: "Vul het BSN/RSIN in.",
    patternMismatch: "Een BSN bestaat uit precies 9 cijfers.",
  },
  "becon-number-advisor": {
    valueMissing: "Vul het beconnummer in.",
    patternMismatch: "Een beconnummer bestaat uit 5 of 6 cijfers.",
  },
  "send-file": { customError: "Het bestand mag maximaal 10 MB zijn." },
  email: {
    typeMismatch: "Vul een geldig e-mailadres in, bijv. naam@voorbeeld.nl.",
  },
  phonenumber: { typeMismatch: "Vul een geldig telefoonnummer in." },
};

function getValidityKey(input) {
  const v = input.validity;
  if (v.customError) return "customError";
  if (v.valueMissing) return "valueMissing";
  if (v.typeMismatch) return "typeMismatch";
  if (v.patternMismatch) return "patternMismatch";
  if (v.tooShort) return "tooShort";
  if (v.rangeUnderflow) return "rangeUnderflow";
  if (v.rangeOverflow) return "rangeOverflow";
  return null;
}

function showError(inputId, message) {
  const el = document.getElementById(inputId + "-error");
  if (el) el.textContent = message || "";

  const input = document.getElementById(inputId);
  if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
}

function isVisible(el) {
  return el.offsetParent !== null;
}

function validateField(input) {
  if (input.id === "bsn-deceased-2") {
    const original = document.getElementById("bsn-deceased").value;
    if (input.value && input.value !== original) {
      input.setCustomValidity("BSN komt niet overeen.");
    } else {
      input.setCustomValidity("");
    }
  }

  if (input.type === "file" && input.files.length > 0) {
    const maxBytes = 10 * 1024 * 1024;
    if (input.files[0].size > maxBytes) {
      input.setCustomValidity("Bestand te groot.");
    } else {
      input.setCustomValidity("");
    }
  }

  if (input.validity.valid) {
    showError(input.id, "");
    return true;
  }

  const key = getValidityKey(input);
  const msgs = MESSAGES[input.id];
  const msg =
    (msgs && msgs[key]) ||
    "Dit veld is verplicht of heeft een ongeldige waarde.";
  showError(input.id, msg);
  return false;
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => {
    input.classList.add("touched");
    validateField(input);
  });
  input.addEventListener("input", () => {
    if (input.classList.contains("touched")) {
      validateField(input);
    }
  });
});

const vraag1RequiredIds = [
  "initial-deceased",
  "lname-deceased",
  "bsn-deceased",
  "date-of-death-deceased",
];

const radioGroups1 = ["deceased-married", "kids", "will-deceased"];

function isVraag1Valid() {
  for (const id of vraag1RequiredIds) {
    const el = document.getElementById(id);
    if (!el || !el.validity.valid) return false;
  }

  for (const name of radioGroups1) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (!checked) return false;
  }
  return true;
}

const continueWrap = document.querySelector(".continue-wrap");
const vraag2 = document.querySelector(".vraag2");
const submitWrap = document.querySelector(".submit-wrap");

function updateContinueVisibility() {
  if (isVraag1Valid()) {
    continueWrap.classList.add("visible");
  } else {
    continueWrap.classList.remove("visible");
    vraag2.classList.remove("active");
    submitWrap.classList.remove("visible");
  }
}

[...vraag1RequiredIds, ...radioGroups1].forEach((idOrName) => {
  const byId = document.getElementById(idOrName);
  if (byId) {
    byId.addEventListener("input", updateContinueVisibility);
    byId.addEventListener("blur", updateContinueVisibility);
    byId.addEventListener("change", updateContinueVisibility);
  } else {
    document.querySelectorAll(`input[name="${idOrName}"]`).forEach((radio) => {
      radio.addEventListener("change", updateContinueVisibility);
    });
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  if (isVraag1Valid()) {
    vraag2.classList.add("active");
    vraag2.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

const vraag2RadioGroups = ["representative-type"];
const vraag2RequiredIds = [
  "initial-representative",
  "lname-representative",
  "zipcode-nl",
  "city-nl",
];

function isVraag2Valid() {
  if (!vraag2.classList.contains("active")) return false;
  for (const id of vraag2RequiredIds) {
    const el = document.getElementById(id);
    if (!el || !el.validity.valid) return false;
  }
  for (const name of vraag2RadioGroups) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (!checked) return false;
  }
  return true;
}

function updateSubmitVisibility() {
  if (isVraag1Valid() && isVraag2Valid()) {
    submitWrap.classList.add("visible");
  } else {
    submitWrap.classList.remove("visible");
  }
}

[...vraag2RequiredIds].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", updateSubmitVisibility);
    el.addEventListener("blur", updateSubmitVisibility);
    el.addEventListener("change", updateSubmitVisibility);
  }
});

vraag2RadioGroups.forEach((name) => {
  document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
    radio.addEventListener("change", updateSubmitVisibility);
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let firstInvalid = null;

  this.querySelectorAll("input").forEach((input) => {
    if (!isVisible(input)) return;
    input.classList.add("touched");
    if (!validateField(input) && !firstInvalid) {
      firstInvalid = input;
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    alert("Aangifte succesvol verzonden!");
    this.reset();
    vraag2.classList.remove("active");
    continueWrap.classList.remove("visible");
    submitWrap.classList.remove("visible");
    document
      .querySelectorAll("input")
      .forEach((i) => i.classList.remove("touched"));
  }
});
