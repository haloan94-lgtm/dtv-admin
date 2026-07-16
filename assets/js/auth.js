/* Đô Thị Vàng — Auth mock (standalone, dùng trước layout.js) */
(function (global) {
  const DTV = (global.DTV = global.DTV || {});

  DTV.AUTH_KEY = "dtv-admin-session";
  DTV.DEMO_USER = { username: "admin", password: "admin" };

  DTV.isLoginPage = function () {
    return /\/login(?:\.html)?$/i.test(location.pathname);
  };

  DTV.getAppRoot = function () {
    const path = location.pathname;
    if (path.includes("/pages/")) {
      return path.replace(/\/pages\/[^/]*$/, "/");
    }
    const lastSlash = path.lastIndexOf("/");
    return lastSlash >= 0 ? path.slice(0, lastSlash + 1) : "/";
  };

  DTV.getSession = function () {
    try {
      const raw = localStorage.getItem(DTV.AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  DTV.isAuthenticated = function () {
    const s = DTV.getSession();
    return !!(s && s.username);
  };

  DTV.login = function (username, password) {
    const u = String(username || "").trim();
    const p = String(password || "");
    if (u === DTV.DEMO_USER.username && p === DTV.DEMO_USER.password) {
      const session = {
        username: u,
        name: "Nguyễn Quản Trị",
        role: "Quản trị viên",
        at: Date.now(),
      };
      localStorage.setItem(DTV.AUTH_KEY, JSON.stringify(session));
      return { ok: true, session: session };
    }
    return { ok: false, error: "Tài khoản hoặc mật khẩu không đúng." };
  };

  DTV.logout = function () {
    localStorage.removeItem(DTV.AUTH_KEY);
    location.href = DTV.getAppRoot() + "login.html";
  };

  DTV.requireAuth = function () {
    if (DTV.isLoginPage()) return true;
    if (DTV.isAuthenticated()) return true;
    const next = encodeURIComponent(
      location.pathname + location.search + location.hash,
    );
    location.replace(DTV.getAppRoot() + "login.html?next=" + next);
    return false;
  };

  DTV.redirectAfterLogin = function () {
    const params = new URLSearchParams(location.search);
    const next = params.get("next");
    const safe =
      next && next.startsWith("/") && !next.startsWith("//") ? next : null;
    location.replace(safe || DTV.getAppRoot() + "index.html");
  };
})(window);
