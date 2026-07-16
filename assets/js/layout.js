/* Đô Thị Vàng — Layout (Sidebar + Header) */
window.DTV = window.DTV || {};

DTV.ICONS = {
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  customers: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  products: '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  categories: '<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  collections: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  orders: '<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  production: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  inventory: '<svg viewBox="0 0 24 24"><path d="M22 12H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>',
  pricing: '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  gold: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M8 10h8"/><path d="M8 14h8"/></svg>',
  debt: '<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  payments: '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  reports: '<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  news: '<svg viewBox="0 0 24 24"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>',
  cms: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  roles: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  logout: '<svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  bell: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  menu: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
};

DTV.MENU = [
  { group: "Tổng quan", items: [
    { id: "dashboard", label: "Tổng quan", icon: "dashboard", href: "index.html" },
  ]},
  { group: "Kinh doanh", items: [
    { id: "customers", label: "Khách hàng", icon: "customers", href: "pages/customers.html" },
    { id: "products", label: "Sản phẩm", icon: "products", href: "pages/products.html" },
    { id: "categories", label: "Danh mục", icon: "categories", href: "pages/categories.html" },
    { id: "collections", label: "Bộ sưu tập", icon: "collections", href: "pages/collections.html" },
    { id: "orders", label: "Đơn hàng", icon: "orders", href: "pages/orders.html" },
  ]},
  { group: "Vận hành", items: [
    { id: "production", label: "Sản xuất", icon: "production", href: "pages/production.html" },
    { id: "inventory", label: "Kho hàng", icon: "inventory", href: "pages/inventory.html" },
  ]},
  { group: "Tài chính", items: [
    { id: "pricing", label: "Bảng giá", icon: "pricing", href: "pages/pricing.html" },
    { id: "gold-price", label: "Giá vàng", icon: "gold", href: "pages/gold-price.html" },
    { id: "debt", label: "Công nợ", icon: "debt", href: "pages/debt.html" },
    { id: "payments", label: "Thanh toán", icon: "payments", href: "pages/payments.html" },
    { id: "reports", label: "Báo cáo", icon: "reports", href: "pages/reports.html" },
  ]},
  { group: "Nội dung", items: [
    { id: "news", label: "Tin tức", icon: "news", href: "pages/news.html" },
    { id: "cms", label: "Nội dung web", icon: "cms", href: "pages/cms.html" },
  ]},
  { group: "Hệ thống", items: [
    { id: "users", label: "Người dùng", icon: "users", href: "pages/users.html" },
    { id: "roles", label: "Vai trò", icon: "roles", href: "pages/roles.html" },
    { id: "settings", label: "Cài đặt", icon: "settings", href: "pages/settings.html" },
    { id: "logout", label: "Đăng xuất", icon: "logout", href: "#" },
  ]},
];

DTV.getAppRoot = () => {
  const path = window.location.pathname;
  if (path.includes("/pages/")) {
    return path.replace(/\/pages\/[^/]*$/, "/");
  }
  // directory containing the current html file
  return path.replace(/[^/]*$/, "") || "/";
};

DTV.getBasePath = () => {
  // Kept for compatibility; prefer getAppRoot for links
  return window.location.pathname.includes("/pages/") ? "../" : "";
};

DTV.resolveHref = (href) => {
  if (!href || href === "#" || href.startsWith("http") || href.startsWith("mailto:")) return href;
  if (href.startsWith("/")) return href;

  const root = DTV.getAppRoot();
  let path = href.split("?")[0];
  const query = href.includes("?") ? href.slice(href.indexOf("?")) : "";

  // Normalize ../ and ./
  if (path.startsWith("../")) path = path.replace(/^\.\.\//, "");
  if (path.startsWith("./")) path = path.replace(/^\.\//, "");

  if (path === "index.html") return root + "index.html" + query;
  if (path.startsWith("pages/")) return root + path + query;
  // Bare filename → pages/
  if (!path.includes("/")) return root + "pages/" + path + query;
  return root + path + query;
};

DTV.buildBreadcrumbHtml = (breadcrumb = []) => {
  let crumbHtml = `<a href="${DTV.resolveHref("index.html")}">Trang chủ</a>`;
  breadcrumb.forEach((c, i) => {
    crumbHtml += `<span class="sep">/</span>`;
    if (i === breadcrumb.length - 1) {
      crumbHtml += `<span class="current">${c.label || c}</span>`;
    } else {
      crumbHtml += `<a href="${c.href || "#"}">${c.label || c}</a>`;
    }
  });
  return crumbHtml;
};

DTV.updateShell = (options = {}) => {
  const { active = "dashboard", breadcrumb = [], title } = options;

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.menu === active);
  });

  const crumb = document.querySelector(".breadcrumb");
  if (crumb) crumb.innerHTML = DTV.buildBreadcrumbHtml(breadcrumb);

  if (title) document.title = `${title} — Đô Thị Vàng`;

  // Mount page-root into content if it was just injected outside
  const pageRoot = document.getElementById("page-root");
  const main = document.getElementById("pageContent");
  if (pageRoot && main && !main.contains(pageRoot)) {
    main.innerHTML = "";
    main.appendChild(pageRoot);
    pageRoot.style.display = "block";
  } else if (pageRoot) {
    pageRoot.style.display = "block";
  }

  // Close mobile sidebar after navigation
  document.getElementById("sidebar")?.classList.remove("mobile-open");
  if (!document.querySelector(".modal.open, .drawer.open")) {
    document.getElementById("overlay")?.classList.remove("open");
  }
};

DTV.bindShellEvents = () => {
  if (DTV._shellBound) return;
  DTV._shellBound = true;

  document.getElementById("collapseBtn")?.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const appMain = document.getElementById("appMain");
    if (window.innerWidth <= 992) {
      sidebar.classList.toggle("mobile-open");
      document.getElementById("overlay").classList.toggle("open");
    } else {
      sidebar.classList.toggle("collapsed");
      appMain.classList.toggle("sidebar-collapsed");
      localStorage.setItem("dtv-sidebar-collapsed", sidebar.classList.contains("collapsed") ? "1" : "0");
    }
  });

  document.getElementById("overlay")?.addEventListener("click", () => {
    document.getElementById("sidebar")?.classList.remove("mobile-open");
    document.getElementById("overlay")?.classList.remove("open");
    document.querySelectorAll(".modal.open, .drawer.open").forEach((el) => el.classList.remove("open"));
  });

  document.addEventListener("click", (e) => {
    const logout = e.target.closest('[data-menu="logout"]');
    if (!logout) return;
    e.preventDefault();
    DTV.toast("Đăng xuất", "Bạn đã đăng xuất khỏi hệ thống.", "info");
  });
};

DTV.renderLayout = (options = {}) => {
  // SPA: shell already exists — only update chrome
  if (document.getElementById("sidebar")) {
    DTV.updateShell(options);
    return;
  }

  const { active = "dashboard", breadcrumb = [], title } = options;
  const collapsed = localStorage.getItem("dtv-sidebar-collapsed") === "1";

  let menuHtml = "";
  DTV.MENU.forEach((group) => {
    menuHtml += `<div class="menu-group-title">${group.group}</div>`;
    group.items.forEach((item) => {
      const isActive = item.id === active ? "active" : "";
      const href = DTV.resolveHref(item.href);
      menuHtml += `
        <a class="menu-item ${isActive}" href="${href}" title="${item.label}" data-menu="${item.id}">
          <span class="menu-icon">${DTV.ICONS[item.icon]}</span>
          <span class="menu-label">${item.label}</span>
        </a>`;
    });
  });

  const layout = `
    <div class="app-layout">
      <aside class="sidebar ${collapsed ? "collapsed" : ""}" id="sidebar">
        <div class="sidebar-logo">
          <div class="logo-mark">ĐV</div>
          <span class="logo-text">Đô Thị Vàng</span>
        </div>
        <nav class="sidebar-nav">${menuHtml}</nav>
      </aside>
      <div class="app-main ${collapsed ? "sidebar-collapsed" : ""}" id="appMain">
        <header class="header">
          <div class="header-left">
            <button class="collapse-btn" id="collapseBtn" title="Thu gọn menu">${DTV.ICONS.menu}</button>
            <div class="breadcrumb">${DTV.buildBreadcrumbHtml(breadcrumb)}</div>
          </div>
          <div class="header-right">
            <div class="header-search">
              <span class="search-icon">${DTV.ICONS.search}</span>
              <input type="text" placeholder="Tìm kiếm đơn hàng, khách hàng..." id="globalSearch">
            </div>
            <button class="header-action" title="Thông báo" id="notifBtn">
              ${DTV.ICONS.bell}
              <span class="badge-dot"></span>
            </button>
            <div class="user-profile" title="Hồ sơ">
              <div class="user-avatar">QT</div>
              <div>
                <div class="user-name">Nguyễn Quản Trị</div>
                <div class="user-role">Quản trị viên</div>
              </div>
            </div>
          </div>
        </header>
        <main class="content" id="pageContent"></main>
      </div>
    </div>
    <div class="overlay" id="overlay"></div>
    <div class="toast-container" id="toastContainer"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", layout);

  const pageContent = document.getElementById("page-root");
  const main = document.getElementById("pageContent");
  if (pageContent && main) {
    main.appendChild(pageContent);
    pageContent.style.display = "block";
  }

  if (title) document.title = `${title} — Đô Thị Vàng`;
  DTV.bindShellEvents();
};

/* Toast */
DTV.toast = (title, desc = "", type = "success") => {
  const colors = { success: "#52c41a", error: "#ff4d4f", warning: "#faad14", info: "#1677ff" };
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `
    <div class="toast-icon" style="color:${colors[type] || colors.success}">●</div>
    <div>
      <div class="toast-title">${title}</div>
      ${desc ? `<div class="toast-desc">${desc}</div>` : ""}
    </div>`;
  document.getElementById("toastContainer").appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 250); }, 3000);
};

/* Modal helpers */
DTV.openModal = (id) => {
  document.getElementById("overlay").classList.add("open");
  document.getElementById(id)?.classList.add("open");
};
DTV.closeModal = (id) => {
  document.getElementById(id)?.classList.remove("open");
  if (!document.querySelector(".modal.open, .drawer.open")) {
    document.getElementById("overlay").classList.remove("open");
  }
};
DTV.openDrawer = (id) => {
  document.getElementById("overlay").classList.add("open");
  document.getElementById(id)?.classList.add("open");
};
DTV.closeDrawer = (id) => {
  document.getElementById(id)?.classList.remove("open");
  if (!document.querySelector(".modal.open, .drawer.open")) {
    document.getElementById("overlay").classList.remove("open");
  }
};

/* Tabs */
DTV.initTabs = (container) => {
  const root = typeof container === "string" ? document.querySelector(container) : container;
  if (!root) return;
  root.querySelectorAll(".tab-item").forEach(tab => {
    tab.addEventListener("click", () => {
      root.querySelectorAll(".tab-item").forEach(t => t.classList.remove("active"));
      root.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const panel = root.querySelector(`[data-panel="${tab.dataset.tab}"]`);
      if (panel) panel.classList.add("active");
    });
  });
};

/* Simple bar chart */
DTV.renderBarChart = (containerId, data, opts = {}) => {
  const el = document.getElementById(containerId);
  if (!el) return;
  const max = Math.max(...data.map(d => d.value), 1);
  const color = opts.color || "var(--primary)";
  el.innerHTML = `<div class="chart-bars">${data.map(d => `
    <div class="chart-bar-group">
      <div class="chart-bar" style="height:${(d.value / max) * 100}%; background:${color}" title="${d.value}"></div>
      <span class="chart-label">${d.label}</span>
    </div>`).join("")}</div>`;
};

/* Simple line chart (SVG) */
DTV.renderLineChart = (containerId, data, opts = {}) => {
  const el = document.getElementById(containerId);
  if (!el) return;
  const w = 600, h = 200, pad = 20;
  const max = Math.max(...data.map(d => d.value), 1);
  const stepX = (w - pad * 2) / (data.length - 1 || 1);
  const points = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (d.value / max) * (h - pad * 2);
    return `${x},${y}`;
  });
  const area = `${pad},${h - pad} ${points.join(" ")} ${pad + (data.length - 1) * stepX},${h - pad}`;
  el.innerHTML = `
    <div class="chart-line-wrap">
      <svg class="chart-line-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
        <polygon points="${area}" fill="rgba(201,162,39,0.12)" />
        <polyline points="${points.join(" ")}" fill="none" stroke="#c9a227" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
        ${data.map((d, i) => {
          const x = pad + i * stepX;
          const y = h - pad - (d.value / max) * (h - pad * 2);
          return `<circle cx="${x}" cy="${y}" r="3.5" fill="#c9a227" stroke="#fff" stroke-width="2"/>`;
        }).join("")}
      </svg>
      <div style="display:flex;justify-content:space-between;padding:0 12px;margin-top:4px">
        ${data.map(d => `<span class="chart-label">${d.label}</span>`).join("")}
      </div>
    </div>`;
};

/* Pagination helper */
DTV.renderPagination = (containerId, total, page = 1, pageSize = 10) => {
  const el = document.getElementById(containerId);
  if (!el) return;
  const pages = Math.ceil(total / pageSize) || 1;
  let btns = "";
  for (let i = 1; i <= Math.min(pages, 5); i++) {
    btns += `<button class="page-btn ${i === page ? "active" : ""}">${i}</button>`;
  }
  el.innerHTML = `
    <span class="pagination-info">Hiển thị ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, total)} / ${total}</span>
    <button class="page-btn" disabled>‹</button>
    ${btns}
    <button class="page-btn" ${page >= pages ? "disabled" : ""}>›</button>`;
};

/* ========== SPA Router (no full page reload) ========== */
DTV._navToken = 0;

DTV.isInternalUrl = (url) => {
  try {
    const u = new URL(url, location.href);
    if (u.origin !== location.origin) return false;
    const root = DTV.getAppRoot();
    if (!u.pathname.startsWith(root)) return false;
    return /\.html?$/i.test(u.pathname) || u.pathname === root;
  } catch {
    return false;
  }
};

DTV.clearPageExtras = () => {
  document.querySelectorAll("body > .drawer, body > .modal, [data-spa-page]").forEach((el) => el.remove());
  document.querySelectorAll(".modal.open, .drawer.open").forEach((el) => el.classList.remove("open"));
  document.getElementById("overlay")?.classList.remove("open");
};

DTV.runPageScripts = (doc) => {
  const scripts = [...doc.querySelectorAll("script")].filter((s) => {
    const src = s.getAttribute("src") || "";
    if (src) return false; // external already loaded (mock-data, layout, tailwind)
    const code = (s.textContent || "").trim();
    if (!code) return false;
    // Skip CDN config snippets only
    if (/^tailwind\.config\s*=/.test(code)) return false;
    return true;
  });

  scripts.forEach((old) => {
    try {
      (0, eval)(old.textContent);
    } catch (err) {
      console.error("[DTV SPA] Page script error:", err);
    }
  });
};

DTV.navigate = async (url, { replace = false, skipHistory = false } = {}) => {
  const target = new URL(url, location.href);
  const current = new URL(location.href);

  // Same page (ignore hash-only)
  if (
    target.pathname === current.pathname &&
    target.search === current.search &&
    skipHistory
  ) {
    return;
  }

  const token = ++DTV._navToken;
  const main = document.getElementById("pageContent");
  if (!main) {
    location.href = target.href;
    return;
  }

  main.classList.add("is-navigating");

  try {
    const res = await fetch(target.href, { credentials: "same-origin" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    if (token !== DTV._navToken) return;

    const doc = new DOMParser().parseFromString(html, "text/html");
    const pageRoot = doc.getElementById("page-root");
    if (!pageRoot) throw new Error("Missing #page-root");

    DTV.clearPageExtras();

    // Inject page content
    const imported = document.importNode(pageRoot, true);
    imported.style.display = "block";
    imported.setAttribute("data-spa-page", "1");
    main.innerHTML = "";
    main.appendChild(imported);

    // Inject drawers / modals from the fetched page body
    [...doc.body.children].forEach((child) => {
      if (child.id === "page-root") return;
      if (child.matches("script")) return;
      if (child.matches(".drawer, .modal")) {
        const node = document.importNode(child, true);
        node.setAttribute("data-spa-page", "1");
        document.body.appendChild(node);
      }
    });

    if (!skipHistory) {
      if (replace) history.replaceState({ spa: true }, "", target.href);
      else history.pushState({ spa: true }, "", target.href);
    }

    // Scroll content to top
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    main.scrollTop = 0;

    DTV.runPageScripts(doc);
  } catch (err) {
    console.error("[DTV SPA] Navigation failed, falling back:", err);
    location.href = target.href;
    return;
  } finally {
    if (token === DTV._navToken) {
      main.classList.remove("is-navigating");
    }
  }
};

DTV.initRouter = () => {
  if (DTV._routerReady) return;
  DTV._routerReady = true;

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const a = e.target.closest("a[href]");
    if (!a) return;
    if (a.hasAttribute("download")) return;
    if (a.target && a.target !== "_self") return;
    if (a.dataset.menu === "logout") return;

    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;
    if (!DTV.isInternalUrl(a.href)) return;

    // Same full URL — still prevent reload if already there
    e.preventDefault();
    if (a.href === location.href) return;
    DTV.navigate(a.href);
  });

  window.addEventListener("popstate", () => {
    DTV.navigate(location.href, { skipHistory: true });
  });
};

// Boot router after DOM is ready (layout may render synchronously in page scripts)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => DTV.initRouter());
} else {
  // Defer so first renderLayout can finish
  queueMicrotask(() => DTV.initRouter());
}
