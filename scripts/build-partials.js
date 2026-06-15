const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const caseLinks = [
  ["LumeLuxe case", "case-study-template.html"],
  ["Swire Group case", "case-study-swire-group.html"],
  ["RSVP case", "case-study-rsvp-ig-monitoring.html"],
  ["Harbour Weekly case", "case-study-harbour-weekly-edm.html"],
  ["Well Played case", "case-study-well-played-quotation.html"],
  ["Shiftwise Staffing case", "case-study-part-time-staff-timesheet.html"]
];

const baseNav = [
  ["About", "index.html#about"],
  ["Services", "index.html#capabilities"],
  ["Resources", "automation-blueprints.html"],
  ["Case study", "index.html#work", "", "", caseLinks],
  ["Pricing", "pricing.html"],
  ["Method", "index.html#method"],
  ["Start audit", "index.html#contact", "nav-cta"]
];

const baseFooter = [
  ["Pages", [["About", "index.html#about"], ["Services", "index.html#capabilities"], ["Resources", "automation-blueprints.html"], ...caseLinks, ["Pricing", "pricing.html"], ["Signals", "index.html#lab"]]],
  ["Stacks", [["Make", "index.html#capabilities"], ["n8n", "index.html#capabilities"], ["Power Automate", "index.html#capabilities"]]],
  ["Focus", [["Lead flow", "index.html#lab"], ["Ecommerce ops", "index.html#lab"], ["AI routing", "index.html#lab"]]],
  ["Contact", [["WhatsApp", "https://wa.me/85200000000?text=Hi%20Flow2%2C%20I%20want%20to%20automate%20one%20business%20workflow.", "target=\"_blank\" rel=\"noreferrer\""], ["Audit request", "index.html#contact"]]]
];

const pages = {
  "index-hero-scroll-prototype.html": {
    navClass: " is-hidden",
    navAttrs: " data-nav-mode=\"landing\"",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: "",
    nav: baseNav,
    footer: baseFooter
  },
  "index.html": {
    navClass: " is-hidden",
    navAttrs: " data-nav-mode=\"landing\"",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: "",
    nav: baseNav,
    footer: baseFooter
  },
  "pricing.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["<b>Flow2</b> pricing", "Workflow automation for Hong Kong SMEs", "Starting prices"]),
    nav: markCurrent(baseNav, "Pricing"),
    footer: baseFooter
  },
  "automation-blueprints.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["<b>Flow2</b> free resources", "Make.com blueprints for SMEs", "Download first / customize later"]),
    nav: markCurrent(baseNav, "Resources"),
    footer: baseFooter
  },
  "case-study-template.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "LumeLuxe", "Consignment operations"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  },
  "case-study-swire-group.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "Swire Group", "Knowledge base automation"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  },
  "case-study-rsvp-ig-monitoring.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "RSVP", "Instagram monitoring"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  },
  "case-study-harbour-weekly-edm.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "Harbour Weekly", "EDM automation"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  },
  "case-study-well-played-quotation.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "Well Played", "Quotation automation"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  },
  "case-study-part-time-staff-timesheet.html": {
    navClass: "",
    navAttrs: "",
    toggleClass: "menu-button",
    homeHref: "index.html#top",
    topbar: topbar(["Flow2 case study", "Shiftwise Staffing", "Roster automation"]),
    nav: markCurrent(baseNav, "Case study"),
    footer: baseFooter
  }
};

function markCurrent(nav, label) {
  return nav.map((item) => item[0] === label ? [item[0], item[1], item[2] || "", "page", item[4]] : item);
}

function topbar(items) {
  return [
    "<div class=\"topbar\">",
    "  <div class=\"container topbar-inner\">",
    ...items.map((item) => `    <span>${item}</span>`),
    "  </div>",
    "</div>"
  ].join("\n");
}

function renderTemplate(file, data) {
  let template = fs.readFileSync(path.join(root, "partials", file), "utf8");
  const replacements = {
    topbar: data.topbar || "",
    navClass: data.navClass || "",
    navAttrs: data.navAttrs || "",
    toggleClass: data.toggleClass || "menu-button",
    homeHref: data.homeHref || "index.html#top",
    navLinks: renderNavLinks(data.nav || []),
    footerColumns: renderFooterColumns(data.footer || [])
  };

  Object.entries(replacements).forEach(([key, value]) => {
    template = template.replaceAll(`{{${key}}}`, value);
  });
  return template.trim();
}

function renderNavLinks(items) {
  return items.map(([label, href, className, current, children]) => {
    if (children && children.length) {
      const currentAttr = current ? ` aria-current="${current}"` : "";
      const childLinks = children.map(([childLabel, childHref]) => {
        return `        <a href="${childHref}">${childLabel}</a>`;
      }).join("\n");
      return [
        `      <div class="nav-dropdown"${currentAttr}>`,
        `        <a class="nav-drop-link" href="${href}">${label}</a>`,
        `        <div class="nav-submenu" aria-label="${label} pages">`,
        childLinks,
        "        </div>",
        "      </div>"
      ].join("\n");
    }
    const attrs = [
      `href="${href}"`,
      className ? `class="${className}"` : "",
      current ? `aria-current="${current}"` : ""
    ].filter(Boolean).join(" ");
    return `      <a ${attrs}>${label}</a>`;
  }).join("\n");
}

function renderFooterColumns(columns) {
  return columns.map(([title, links]) => {
    const body = links.map(([label, href, extra]) => {
      return `<a href="${href}"${extra ? ` ${extra}` : ""}>${label}</a>`;
    }).join("");
    return `      <div><h4>${title}</h4>${body}</div>`;
  }).join("\n");
}

function replaceBlock(source, name, rendered) {
  const start = `<!-- @partial ${name} -->`;
  const end = `<!-- /@partial ${name} -->`;
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`);
  const replacement = `${start}\n${rendered}\n${end}`;

  if (pattern.test(source)) return source.replace(pattern, replacement);

  const fallback = name === "nav"
    ? /(?:\s*<div class="topbar">[\s\S]*?<\/div>\s*)?\s*<nav class="nav[\s\S]*?<\/nav>/
    : /\s*<footer class="site-footer">[\s\S]*?<\/footer>/;

  if (!fallback.test(source)) {
    throw new Error(`Could not find ${name} block`);
  }

  return source.replace(fallback, `\n${replacement}`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

Object.entries(pages).forEach(([page, config]) => {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, "utf8");
  html = replaceBlock(html, "nav", renderTemplate("nav.html", config));
  html = replaceBlock(html, "footer", renderTemplate("footer.html", config));
  fs.writeFileSync(file, html);
  console.log(`Rendered partials: ${page}`);
});
