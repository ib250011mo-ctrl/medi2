/* @ds-bundle: {"format":3,"namespace":"DesignCompanyLPDesignSystem_b7b319","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardMedia","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9992a42eedd2","components/core/Badge.jsx":"9c961d1e8388","components/core/Button.jsx":"19201a7ee843","components/core/Card.jsx":"d8dfa18be01f","components/core/IconButton.jsx":"d0e9488fb597","components/core/Tag.jsx":"220c72559aab","components/feedback/Banner.jsx":"32efe8b18770","components/feedback/Dialog.jsx":"93408db4a93c","components/feedback/Tooltip.jsx":"937d5c57c313","components/forms/Checkbox.jsx":"7d7538e1416d","components/forms/Input.jsx":"eedf6e448d14","components/forms/Select.jsx":"3b10cc712b49","components/forms/Switch.jsx":"e8766fc57a9e","components/navigation/Tabs.jsx":"1f867c404b63","ui_kits/client-portal/PortalSidebar.jsx":"3f98fe0da042","ui_kits/client-portal/PortalTopbar.jsx":"ef7647ab72ca","ui_kits/client-portal/ProjectOverview.jsx":"db8b18eb4c7c","ui_kits/studio-site/SiteFooter.jsx":"26de4ecd03fe","ui_kits/studio-site/SiteHero.jsx":"c500b6446539","ui_kits/studio-site/SiteNav.jsx":"9af2fe69e8a2","ui_kits/studio-site/SiteServices.jsx":"eb32d2526a1d","ui_kits/studio-site/SiteWork.jsx":"387175af85cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignCompanyLPDesignSystem_b7b319 = window.DesignCompanyLPDesignSystem_b7b319 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-avatar{
  display:inline-flex; align-items:center; justify-content:center; position:relative;
  font-family:var(--font-sans); font-weight:var(--weight-semibold); color:var(--paper-0);
  background:var(--ink-1); border-radius:var(--radius-pill); overflow:hidden; flex:none;
  text-transform:uppercase; line-height:1;
}
.dclp-avatar--square{ border-radius:var(--radius-sm); }
.dclp-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.dclp-avatar--xs{ width:24px; height:24px; font-size:10px; }
.dclp-avatar--sm{ width:32px; height:32px; font-size:12px; }
.dclp-avatar--md{ width:40px; height:40px; font-size:15px; }
.dclp-avatar--lg{ width:56px; height:56px; font-size:20px; }
.dclp-avatar--xl{ width:80px; height:80px; font-size:28px; }
.dclp-avatar__ring{ box-shadow:0 0 0 2px var(--surface-page), 0 0 0 3px var(--border-strong); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'avatar');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('');
}
function Avatar({
  name = '',
  src,
  size = 'md',
  shape = 'circle',
  ring = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-avatar', `dclp-avatar--${size}`, shape === 'square' ? 'dclp-avatar--square' : '', ring ? 'dclp-avatar__ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-mono); font-size:var(--text-2xs); font-weight:var(--weight-regular);
  letter-spacing:var(--tracking-wide); text-transform:uppercase; line-height:1; white-space:nowrap;
  padding:5px 9px; border-radius:var(--radius-xs); border:var(--border-width) solid transparent;
}
.dclp-badge--solid{ background:var(--ink-0); color:var(--paper-0); }
.dclp-badge--accent{ background:var(--accent); color:var(--text-on-accent); }
.dclp-badge--outline{ background:transparent; color:var(--text-body); border-color:var(--border-strong); }
.dclp-badge--muted{ background:var(--paper-2); color:var(--text-muted); }
.dclp-badge--success{ background:var(--status-success-wash); color:var(--status-success); }
.dclp-badge--warning{ background:var(--status-warning-wash); color:#8a5e0f; }
.dclp-badge--danger{ background:var(--status-danger-wash); color:var(--status-danger); }
.dclp-badge--info{ background:var(--status-info-wash); color:var(--status-info); }
.dclp-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'badge');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Badge({
  children,
  variant = 'muted',
  dot = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-badge', `dclp-badge--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dclp-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-btn{
  --_bg: var(--ink-0); --_fg: var(--text-on-ink); --_bd: var(--ink-0);
  display:inline-flex; align-items:center; justify-content:center; gap:var(--space-2);
  font-family:var(--font-sans); font-weight:var(--weight-semibold); line-height:1;
  white-space:nowrap; cursor:pointer; user-select:none; text-decoration:none;
  border:var(--border-width) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-sm);
  transition:transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out),
             border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out);
}
.dclp-btn:focus-visible{ outline:none; box-shadow:var(--shadow-ring); }
.dclp-btn:active{ transform:translateY(0.5px) scale(0.99); }
.dclp-btn[disabled]{ cursor:not-allowed; opacity:0.45; }
.dclp-btn--sm{ height:32px; padding:0 var(--space-4); font-size:var(--text-sm); }
.dclp-btn--md{ height:40px; padding:0 var(--space-5); font-size:var(--text-sm); }
.dclp-btn--lg{ height:50px; padding:0 var(--space-7); font-size:var(--text-md); }
.dclp-btn--block{ width:100%; }

/* primary — ink */
.dclp-btn--primary{ --_bg:var(--ink-0); --_fg:var(--text-on-ink); --_bd:var(--ink-0); }
.dclp-btn--primary:hover:not([disabled]){ --_bg:var(--ink-2); --_bd:var(--ink-2); }

/* accent — persimmon */
.dclp-btn--accent{ --_bg:var(--accent); --_fg:var(--text-on-accent); --_bd:var(--accent); }
.dclp-btn--accent:hover:not([disabled]){ --_bg:var(--accent-hover); --_bd:var(--accent-hover); }

/* secondary — hairline outline */
.dclp-btn--secondary{ --_bg:transparent; --_fg:var(--text-strong); --_bd:var(--border-strong); }
.dclp-btn--secondary:hover:not([disabled]){ --_bg:var(--paper-2); --_bd:var(--ink-0); }

/* ghost — no border */
.dclp-btn--ghost{ --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent; }
.dclp-btn--ghost:hover:not([disabled]){ --_bg:var(--paper-2); }

/* link */
.dclp-btn--link{ --_bg:transparent; --_fg:var(--text-link); --_bd:transparent; height:auto; padding:0; border-radius:0; }
.dclp-btn--link:hover:not([disabled]){ text-decoration:underline; text-underline-offset:3px; }

/* danger */
.dclp-btn--danger{ --_bg:var(--status-danger); --_fg:#fff; --_bd:var(--status-danger); }
.dclp-btn--danger:hover:not([disabled]){ filter:brightness(0.93); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'button');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  as = 'button',
  iconLeft = null,
  iconRight = null,
  className = '',
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const cls = ['dclp-btn', `dclp-btn--${variant}`, `dclp-btn--${size}`, block ? 'dclp-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-card{
  display:flex; flex-direction:column; position:relative;
  background:var(--surface-card); color:var(--text-body);
  border:var(--border-width) solid var(--border-default);
  border-radius:var(--radius-md); overflow:hidden;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out),
             transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.dclp-card--flat{ box-shadow:none; }
.dclp-card--raised{ background:var(--surface-raised); box-shadow:var(--shadow-sm); }
.dclp-card--interactive{ cursor:pointer; }
.dclp-card--interactive:hover{ border-color:var(--ink-0); box-shadow:var(--shadow-md); transform:translateY(-2px); }
.dclp-card--inverse{ background:var(--ink-0); color:var(--paper-0); border-color:var(--ink-0); }
.dclp-card__media{ display:block; width:100%; aspect-ratio:4/3; object-fit:cover; background:var(--paper-2); }
.dclp-card__body{ padding:var(--space-6); display:flex; flex-direction:column; gap:var(--space-3); }
.dclp-card--pad-sm .dclp-card__body{ padding:var(--space-4); }
.dclp-card--pad-lg .dclp-card__body{ padding:var(--space-8); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'card');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Card({
  children,
  variant = 'flat',
  interactive = false,
  inverse = false,
  padding = 'md',
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-card', `dclp-card--${variant}`, `dclp-card--pad-${padding}`, interactive ? 'dclp-card--interactive' : '', inverse ? 'dclp-card--inverse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
function CardMedia({
  src,
  alt = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    className: "dclp-card__media",
    src: src,
    alt: alt
  }, rest));
}
function CardBody({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dclp-card__body"
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardMedia, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-iconbtn{
  --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center;
  cursor:pointer; border:var(--border-width) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-sm);
  transition:background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out),
             transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.dclp-iconbtn svg{ display:block; width:1.15em; height:1.15em; }
.dclp-iconbtn:focus-visible{ outline:none; box-shadow:var(--shadow-ring); }
.dclp-iconbtn:active{ transform:scale(0.94); }
.dclp-iconbtn[disabled]{ opacity:0.45; cursor:not-allowed; }
.dclp-iconbtn--sm{ width:32px; height:32px; font-size:15px; }
.dclp-iconbtn--md{ width:40px; height:40px; font-size:18px; }
.dclp-iconbtn--lg{ width:48px; height:48px; font-size:20px; }
.dclp-iconbtn--ghost:hover:not([disabled]){ --_bg:var(--paper-2); }
.dclp-iconbtn--outline{ --_bd:var(--border-strong); }
.dclp-iconbtn--outline:hover:not([disabled]){ --_bg:var(--paper-2); --_bd:var(--ink-0); }
.dclp-iconbtn--solid{ --_bg:var(--ink-0); --_fg:var(--text-on-ink); --_bd:var(--ink-0); }
.dclp-iconbtn--solid:hover:not([disabled]){ --_bg:var(--ink-2); --_bd:var(--ink-2); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'iconbutton');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-iconbtn', `dclp-iconbtn--${variant}`, `dclp-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-tag{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  line-height:1; white-space:nowrap; color:var(--text-body);
  padding:6px 12px; border-radius:var(--radius-pill);
  border:var(--border-width) solid var(--border-default); background:var(--surface-card);
  transition:background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
}
.dclp-tag--interactive{ cursor:pointer; }
.dclp-tag--interactive:hover{ border-color:var(--ink-0); }
.dclp-tag--selected{ background:var(--ink-0); border-color:var(--ink-0); color:var(--paper-0); }
.dclp-tag__x{
  display:inline-flex; align-items:center; justify-content:center; margin-right:-4px;
  width:16px; height:16px; border-radius:50%; cursor:pointer; opacity:0.6;
}
.dclp-tag__x:hover{ opacity:1; background:rgba(0,0,0,0.08); }
.dclp-tag--selected .dclp-tag__x:hover{ background:rgba(255,255,255,0.18); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'tag');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  ensureStyles();
  const interactive = !!onClick || !!onRemove;
  const cls = ['dclp-tag', interactive ? 'dclp-tag--interactive' : '', selected ? 'dclp-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "dclp-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "11",
    height: "11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5l14 14M19 5L5 19"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-banner{
  display:flex; align-items:flex-start; gap:var(--space-3); font-family:var(--font-sans);
  padding:var(--space-4) var(--space-4); border-radius:var(--radius-sm);
  border:var(--border-width) solid var(--border-default); background:var(--surface-card);
  border-left-width:3px;
}
.dclp-banner__icon{ flex:none; display:flex; margin-top:1px; }
.dclp-banner__icon svg{ width:18px; height:18px; }
.dclp-banner__body{ flex:1; min-width:0; display:flex; flex-direction:column; gap:2px; }
.dclp-banner__title{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.dclp-banner__msg{ font-size:var(--text-sm); color:var(--text-muted); line-height:var(--leading-normal); }
.dclp-banner__close{ flex:none; cursor:pointer; color:var(--text-faint); background:none; border:none; padding:2px; display:flex; }
.dclp-banner__close:hover{ color:var(--text-body); }
.dclp-banner--info{ border-left-color:var(--status-info); }
.dclp-banner--info .dclp-banner__icon{ color:var(--status-info); }
.dclp-banner--success{ border-left-color:var(--status-success); }
.dclp-banner--success .dclp-banner__icon{ color:var(--status-success); }
.dclp-banner--warning{ border-left-color:var(--status-warning); }
.dclp-banner--warning .dclp-banner__icon{ color:var(--status-warning); }
.dclp-banner--danger{ border-left-color:var(--status-danger); }
.dclp-banner--danger .dclp-banner__icon{ color:var(--status-danger); }
.dclp-banner--neutral{ border-left-color:var(--ink-0); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'banner');
  el.textContent = CSS;
  document.head.appendChild(el);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M9 12l2 2 4-4M12 22a10 10 0 100-20 10 10 0 000 20z"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
  }),
  neutral: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M12 22a10 10 0 100-20 10 10 0 000 20z"
  })
};
function Banner({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-banner', `dclp-banner--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "dclp-banner__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[variant])), /*#__PURE__*/React.createElement("div", {
    className: "dclp-banner__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "dclp-banner__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "dclp-banner__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "dclp-banner__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.dclp-dialog__overlay{
  position:fixed; inset:0; z-index:var(--z-modal); display:flex; align-items:center; justify-content:center;
  padding:var(--space-6); background:rgba(27,25,21,0.42); backdrop-filter:blur(2px);
  animation:dclp-fade var(--dur-base) var(--ease-out);
}
.dclp-dialog{
  position:relative; width:100%; max-width:480px; max-height:calc(100vh - 96px); overflow:auto;
  background:var(--surface-page); color:var(--text-body);
  border:var(--border-width) solid var(--border-default); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg); animation:dclp-pop var(--dur-base) var(--ease-out);
}
.dclp-dialog--lg{ max-width:640px; }
.dclp-dialog__head{ display:flex; align-items:flex-start; gap:var(--space-4); padding:var(--space-6) var(--space-6) var(--space-4); }
.dclp-dialog__titles{ flex:1; min-width:0; display:flex; flex-direction:column; gap:4px; }
.dclp-dialog__eyebrow{ font-family:var(--font-mono); font-size:var(--text-2xs); letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--accent); }
.dclp-dialog__title{ font-family:var(--font-display); font-size:var(--text-2xl); line-height:var(--leading-tight); letter-spacing:var(--tracking-tight); color:var(--text-strong); margin:0; }
.dclp-dialog__close{ flex:none; cursor:pointer; color:var(--text-faint); background:none; border:none; padding:4px; display:flex; border-radius:var(--radius-sm); }
.dclp-dialog__close:hover{ color:var(--text-body); background:var(--paper-2); }
.dclp-dialog__body{ padding:0 var(--space-6) var(--space-6); font-size:var(--text-sm); line-height:var(--leading-relaxed); color:var(--text-muted); }
.dclp-dialog__foot{ display:flex; justify-content:flex-end; gap:var(--space-3); padding:var(--space-4) var(--space-6) var(--space-6); }
@keyframes dclp-fade{ from{ opacity:0; } to{ opacity:1; } }
@keyframes dclp-pop{ from{ opacity:0; transform:translateY(8px) scale(0.985); } to{ opacity:1; transform:none; } }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'dialog');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Dialog({
  open = true,
  onClose,
  eyebrow,
  title,
  size = 'md',
  footer,
  children
}) {
  ensureStyles();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dclp-dialog__overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ['dclp-dialog', size === 'lg' ? 'dclp-dialog--lg' : ''].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dclp-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dclp-dialog__titles"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "dclp-dialog__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "dclp-dialog__title"
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "dclp-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))), children && /*#__PURE__*/React.createElement("div", {
    className: "dclp-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "dclp-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS = `
.dclp-tip{ position:relative; display:inline-flex; }
.dclp-tip__pop{
  position:absolute; z-index:var(--z-overlay); left:50%; transform:translateX(-50%) translateY(-6px);
  bottom:calc(100% + 8px); white-space:nowrap; pointer-events:none;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-medium); line-height:1.3;
  color:var(--paper-0); background:var(--ink-0); padding:6px 10px; border-radius:var(--radius-sm);
  box-shadow:var(--shadow-md); opacity:0;
  transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.dclp-tip__pop::after{
  content:""; position:absolute; top:100%; left:50%; transform:translateX(-50%);
  border:5px solid transparent; border-top-color:var(--ink-0);
}
.dclp-tip:hover .dclp-tip__pop, .dclp-tip:focus-within .dclp-tip__pop{ opacity:1; transform:translateX(-50%) translateY(0); }
.dclp-tip--bottom .dclp-tip__pop{ bottom:auto; top:calc(100% + 8px); transform:translateX(-50%) translateY(6px); }
.dclp-tip--bottom .dclp-tip__pop::after{ top:auto; bottom:100%; border-top-color:transparent; border-bottom-color:var(--ink-0); }
.dclp-tip--bottom:hover .dclp-tip__pop, .dclp-tip--bottom:focus-within .dclp-tip__pop{ transform:translateX(-50%) translateY(0); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'tooltip');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tooltip({
  label,
  placement = 'top',
  children,
  className = ''
}) {
  ensureStyles();
  const cls = ['dclp-tip', placement === 'bottom' ? 'dclp-tip--bottom' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "dclp-tip__pop",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-check{ display:inline-flex; align-items:flex-start; gap:var(--space-3); cursor:pointer; font-family:var(--font-sans); }
.dclp-check input{ position:absolute; opacity:0; width:0; height:0; }
.dclp-check__box{
  flex:none; width:20px; height:20px; margin-top:1px; display:inline-flex; align-items:center; justify-content:center;
  background:var(--surface-raised); border:var(--border-width-strong) solid var(--border-strong);
  border-radius:var(--radius-xs); color:transparent;
  transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.dclp-check__box--radio{ border-radius:50%; }
.dclp-check:hover input:not(:disabled) ~ .dclp-check__box{ border-color:var(--ink-0); }
.dclp-check input:checked ~ .dclp-check__box{ background:var(--ink-0); border-color:var(--ink-0); color:var(--paper-0); }
.dclp-check input:focus-visible ~ .dclp-check__box{ box-shadow:var(--shadow-ring); }
.dclp-check input:disabled ~ .dclp-check__box{ background:var(--paper-2); border-color:var(--border-default); }
.dclp-check input:disabled ~ .dclp-check__label{ color:var(--text-disabled); }
.dclp-check__dot{ width:8px; height:8px; border-radius:50%; background:currentColor; }
.dclp-check__label{ font-size:var(--text-sm); color:var(--text-body); line-height:1.45; }
.dclp-check__label small{ display:block; color:var(--text-muted); font-size:var(--text-xs); margin-top:2px; }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'check');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['dclp-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dclp-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "13",
    height: "13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "dclp-check__label"
  }, label, description && /*#__PURE__*/React.createElement("small", null, description)));
}
function Radio({
  label,
  description,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['dclp-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dclp-check__box dclp-check__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dclp-check__dot"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "dclp-check__label"
  }, label, description && /*#__PURE__*/React.createElement("small", null, description)));
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-field{ display:flex; flex-direction:column; gap:var(--space-2); font-family:var(--font-sans); }
.dclp-field__label{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.dclp-field__req{ color:var(--accent); margin-left:2px; }
.dclp-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.dclp-field__error{ font-size:var(--text-xs); color:var(--status-danger); font-weight:var(--weight-medium); }

.dclp-input{
  font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body);
  background:var(--surface-raised); border:var(--border-width) solid var(--border-default);
  border-radius:var(--radius-sm); width:100%;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.dclp-input::placeholder{ color:var(--text-faint); }
.dclp-input:hover:not(:disabled){ border-color:var(--border-strong); }
.dclp-input:focus{ outline:none; border-color:var(--ink-0); box-shadow:var(--shadow-ring); }
.dclp-input:disabled{ background:var(--paper-2); color:var(--text-disabled); cursor:not-allowed; }
.dclp-input--sm{ height:34px; padding:0 var(--space-3); }
.dclp-input--md{ height:42px; padding:0 var(--space-4); }
.dclp-input--lg{ height:50px; padding:0 var(--space-5); font-size:var(--text-base); }
.dclp-input--invalid{ border-color:var(--status-danger); }
.dclp-input--invalid:focus{ box-shadow:0 0 0 3px var(--status-danger-wash); }
.dclp-input--textarea{ height:auto; min-height:96px; padding:var(--space-3) var(--space-4); resize:vertical; line-height:var(--leading-normal); }
.dclp-inputwrap{ position:relative; display:flex; align-items:center; }
.dclp-inputwrap .dclp-input{ padding-left:38px; }
.dclp-inputwrap__icon{ position:absolute; left:12px; display:flex; color:var(--text-faint); pointer-events:none; }
.dclp-inputwrap__icon svg{ width:16px; height:16px; }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'input');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['dclp-field', className].filter(Boolean).join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "dclp-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "dclp-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "dclp-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dclp-field__hint"
  }, hint) : null);
}
function Input({
  size = 'md',
  invalid = false,
  icon = null,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-input', `dclp-input--${size}`, invalid ? 'dclp-input--invalid' : '', className].filter(Boolean).join(' ');
  if (icon) {
    return /*#__PURE__*/React.createElement("span", {
      className: "dclp-inputwrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dclp-inputwrap__icon"
    }, icon), /*#__PURE__*/React.createElement("input", _extends({
      className: cls
    }, rest)));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
function Textarea({
  invalid = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-input', 'dclp-input--textarea', invalid ? 'dclp-input--invalid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Field, Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const CSS = `
.dclp-select{ position:relative; display:inline-flex; width:100%; }
.dclp-select select{
  appearance:none; -webkit-appearance:none; width:100%; cursor:pointer;
  font-family:var(--font-sans); font-size:var(--text-sm); color:var(--text-body);
  background:var(--surface-raised); border:var(--border-width) solid var(--border-default);
  border-radius:var(--radius-sm); padding:0 38px 0 var(--space-4); height:42px;
  transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.dclp-select--sm select{ height:34px; font-size:var(--text-sm); }
.dclp-select--lg select{ height:50px; font-size:var(--text-base); }
.dclp-select select:hover:not(:disabled){ border-color:var(--border-strong); }
.dclp-select select:focus{ outline:none; border-color:var(--ink-0); box-shadow:var(--shadow-ring); }
.dclp-select select:disabled{ background:var(--paper-2); color:var(--text-disabled); cursor:not-allowed; }
.dclp-select__chev{ position:absolute; right:14px; top:50%; transform:translateY(-50%); pointer-events:none; color:var(--text-muted); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'select');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  children,
  size = 'md',
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['dclp-select', size !== 'md' ? `dclp-select--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("select", rest, children), /*#__PURE__*/React.createElement("span", {
    className: "dclp-select__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.dclp-switch{ display:inline-flex; align-items:center; gap:var(--space-3); cursor:pointer; font-family:var(--font-sans); }
.dclp-switch input{ position:absolute; opacity:0; width:0; height:0; }
.dclp-switch__track{
  position:relative; flex:none; width:42px; height:24px; border-radius:var(--radius-pill);
  background:var(--paper-3); border:var(--border-width) solid var(--border-strong);
  transition:background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.dclp-switch__thumb{
  position:absolute; top:2px; left:2px; width:18px; height:18px; border-radius:50%;
  background:var(--surface-raised); box-shadow:var(--shadow-xs);
  transition:transform var(--dur-base) var(--ease-out);
}
.dclp-switch:hover input:not(:disabled) ~ .dclp-switch__track{ border-color:var(--ink-0); }
.dclp-switch input:checked ~ .dclp-switch__track{ background:var(--ink-0); border-color:var(--ink-0); }
.dclp-switch input:checked ~ .dclp-switch__track .dclp-switch__thumb{ transform:translateX(18px); }
.dclp-switch input:focus-visible ~ .dclp-switch__track{ box-shadow:var(--shadow-ring); }
.dclp-switch input:disabled ~ .dclp-switch__track{ opacity:0.5; }
.dclp-switch__label{ font-size:var(--text-sm); color:var(--text-body); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'switch');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  label,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['dclp-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dclp-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dclp-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "dclp-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.dclp-tabs{ display:flex; gap:var(--space-1); font-family:var(--font-sans); border-bottom:var(--border-width) solid var(--border-default); }
.dclp-tabs--pill{ border-bottom:none; gap:var(--space-1); background:var(--paper-2); padding:4px; border-radius:var(--radius-md); display:inline-flex; }
.dclp-tab{
  position:relative; cursor:pointer; background:none; border:none; font-family:inherit;
  font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-muted);
  padding:var(--space-3) var(--space-4); margin-bottom:-1px;
  border-bottom:2px solid transparent;
  transition:color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.dclp-tab:hover{ color:var(--text-strong); }
.dclp-tab--active{ color:var(--text-strong); border-bottom-color:var(--ink-0); }
.dclp-tab__count{ font-family:var(--font-mono); font-size:var(--text-2xs); color:var(--text-faint); margin-left:6px; }
.dclp-tabs--pill .dclp-tab{ border-radius:var(--radius-sm); border-bottom:none; padding:var(--space-2) var(--space-4); margin-bottom:0; }
.dclp-tabs--pill .dclp-tab--active{ background:var(--surface-raised); color:var(--text-strong); box-shadow:var(--shadow-xs); }
`;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const el = document.createElement('style');
  el.setAttribute('data-dclp', 'tabs');
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  ensureStyles();
  const cls = ['dclp-tabs', variant === 'pill' ? 'dclp-tabs--pill' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'string' ? undefined : it.count;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      className: ['dclp-tab', active ? 'dclp-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(id)
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      className: "dclp-tab__count"
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/PortalSidebar.jsx
try { (() => {
/* Client portal — left sidebar nav. */
const PORTAL_ICON = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  folder: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  message: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  invoice: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 13h6M9 17h4',
  settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2a2 2 0 010-4h.09A1.65 1.65 0 003.6 8a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H8a1.65 1.65 0 001-1.51V2a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V8a1.65 1.65 0 001.51 1H22a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z'
};
function PIcon({
  d
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
window.PIcon = PIcon;
function PortalSidebar({
  active,
  onNav
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Avatar,
    Badge
  } = DS;
  const nav = [{
    id: 'overview',
    label: 'Overview',
    icon: PORTAL_ICON.grid
  }, {
    id: 'files',
    label: 'Files',
    icon: PORTAL_ICON.folder
  }, {
    id: 'activity',
    label: 'Activity',
    icon: PORTAL_ICON.activity
  }, {
    id: 'messages',
    label: 'Messages',
    icon: PORTAL_ICON.message,
    badge: 3
  }, {
    id: 'invoices',
    label: 'Invoices',
    icon: PORTAL_ICON.invoice
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "pside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pside__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark.svg",
    alt: "",
    width: "26",
    height: "26"
  }), /*#__PURE__*/React.createElement("span", null, "Design Company", /*#__PURE__*/React.createElement("small", null, "LP"))), /*#__PURE__*/React.createElement("div", {
    className: "pside__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Project"), /*#__PURE__*/React.createElement("nav", {
    className: "pside__nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    className: 'pside__item' + (active === n.id ? ' is-active' : ''),
    onClick: () => onNav(n.id)
  }, /*#__PURE__*/React.createElement(PIcon, {
    d: n.icon
  }), /*#__PURE__*/React.createElement("span", null, n.label), n.badge && /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    className: "pside__badge"
  }, n.badge))))), /*#__PURE__*/React.createElement("div", {
    className: "pside__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pside__item",
    onClick: () => onNav('settings')
  }, /*#__PURE__*/React.createElement(PIcon, {
    d: PORTAL_ICON.settings
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("div", {
    className: "pside__user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mar\xE9 Studios",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pside__userinfo"
  }, /*#__PURE__*/React.createElement("strong", null, "Mar\xE9e Studios"), /*#__PURE__*/React.createElement("span", null, "Client \xB7 Atlas")))));
}
window.PortalSidebar = PortalSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/PortalSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/PortalTopbar.jsx
try { (() => {
/* Client portal — top bar with search + actions. */
function PortalTopbar({
  onInvite
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Button,
    IconButton,
    Avatar
  } = DS;
  const search = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }));
  const bell = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0"
  }));
  return /*#__PURE__*/React.createElement("header", {
    className: "ptop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptop__crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Atlas Capital"), /*#__PURE__*/React.createElement("h1", {
    className: "ptop__title"
  }, "Rebrand & site")), /*#__PURE__*/React.createElement("div", {
    className: "ptop__search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ptop__searchicon"
  }, search), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search files, messages\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ptop__actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, bell), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onInvite
  }, "Invite teammate")));
}
window.PortalTopbar = PortalTopbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/PortalTopbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/ProjectOverview.jsx
try { (() => {
/* Client portal — main overview panel: tabs, milestones, deliverables, rail. */
const PORTAL_DELIVERABLES = [{
  name: 'Brand strategy deck',
  stage: 'Approved',
  who: 'Theo Vale',
  when: 'Mar 4',
  variant: 'success'
}, {
  name: 'Logo & wordmark v3',
  stage: 'In review',
  who: 'Mara Quinn',
  when: 'Mar 11',
  variant: 'warning'
}, {
  name: 'Type & color system',
  stage: 'In review',
  who: 'Mara Quinn',
  when: 'Mar 12',
  variant: 'warning'
}, {
  name: 'Marketing site — design',
  stage: 'In progress',
  who: 'Jun Park',
  when: 'Mar 20',
  variant: 'info'
}, {
  name: 'Guidelines PDF',
  stage: 'Not started',
  who: 'Unassigned',
  when: 'Apr 2',
  variant: 'muted'
}];
function ProjectOverview() {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Tabs,
    Banner,
    Badge,
    Avatar,
    Card,
    CardBody,
    Button
  } = DS;
  const [tab, setTab] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    className: "pmain"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'files',
      label: 'Files',
      count: 38
    }, {
      id: 'activity',
      label: 'Activity'
    }, {
      id: 'invoices',
      label: 'Invoices',
      count: 2
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "pmain__body"
  }, /*#__PURE__*/React.createElement(Banner, {
    variant: "info",
    title: "Two items need your review"
  }, "Logo v3 and the type & color system are waiting on Mar\xE9e's sign-off."), /*#__PURE__*/React.createElement("div", {
    className: "pstats"
  }, [['Progress', '62%'], ['Phase', '3 of 5'], ['Days left', '18'], ['Budget used', '$31k']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    className: "pstat",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, k), /*#__PURE__*/React.createElement("strong", null, v)))), /*#__PURE__*/React.createElement("section", {
    className: "pdeliv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdeliv__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pmain__h2"
  }, "Deliverables"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "pdeliv__list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdeliv__row pdeliv__row--head"
  }, /*#__PURE__*/React.createElement("span", null, "Item"), /*#__PURE__*/React.createElement("span", null, "Stage"), /*#__PURE__*/React.createElement("span", null, "Owner"), /*#__PURE__*/React.createElement("span", null, "Due")), PORTAL_DELIVERABLES.map(d => /*#__PURE__*/React.createElement("div", {
    className: "pdeliv__row",
    key: d.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "pdeliv__name"
  }, d.name), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    variant: d.variant,
    dot: true
  }, d.stage)), /*#__PURE__*/React.createElement("span", {
    className: "pdeliv__who"
  }, d.who !== 'Unassigned' ? /*#__PURE__*/React.createElement(Avatar, {
    name: d.who,
    size: "xs"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "pdeliv__none"
  }), d.who), /*#__PURE__*/React.createElement("span", {
    className: "pdeliv__when"
  }, d.when)))))), /*#__PURE__*/React.createElement("aside", {
    className: "prail"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Next milestone"), /*#__PURE__*/React.createElement("strong", {
    className: "prail__milestone"
  }, "Brand handoff"), /*#__PURE__*/React.createElement("p", {
    className: "prail__date"
  }, "March 20 \xB7 in 18 days"), /*#__PURE__*/React.createElement("div", {
    className: "prail__bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: '62%'
    }
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Your studio team"), /*#__PURE__*/React.createElement("div", {
    className: "prail__team"
  }, [['Mara Quinn', 'Design lead'], ['Theo Vale', 'Strategy'], ['Jun Park', 'Engineering']].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    className: "prail__member",
    key: n
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, n), /*#__PURE__*/React.createElement("span", null, r))))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    block: true,
    style: {
      marginTop: 4
    }
  }, "Message the team")))));
}
window.ProjectOverview = ProjectOverview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/ProjectOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/SiteFooter.jsx
try { (() => {
/* Studio marketing site — contact dialog + footer. */
function ContactDialog({
  open,
  onClose
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Dialog,
    Field,
    Input,
    Textarea,
    Select,
    Button
  } = DS;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    eyebrow: "New project",
    title: sent ? 'Thanks — talk soon.' : 'Tell us about the work',
    footer: sent ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Close") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => setSent(true)
    }, "Send brief"))
  }, sent ? /*#__PURE__*/React.createElement("p", null, "We read every note ourselves and reply within two working days.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    htmlFor: "cn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    placeholder: "Jane Studio"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "ce"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ce",
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?",
    htmlFor: "cs"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "cs",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a service\u2026"), /*#__PURE__*/React.createElement("option", null, "Brand identity"), /*#__PURE__*/React.createElement("option", null, "Digital product"), /*#__PURE__*/React.createElement("option", null, "Editorial & web"))), /*#__PURE__*/React.createElement(Field, {
    label: "A few lines on the project",
    htmlFor: "cm"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "cm",
    placeholder: "What are you building, and by when?"
  }))));
}
window.ContactDialog = ContactDialog;
function SiteFooter({
  onContact
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-foot on-ink",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-foot__cta"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "site-foot__title"
  }, "Have something", /*#__PURE__*/React.createElement("br", null), "worth making?"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onContact
  }, "Start a project")), /*#__PURE__*/React.createElement("div", {
    className: "site-foot__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark-reverse.svg",
    alt: "",
    width: "34",
    height: "34"
  }), /*#__PURE__*/React.createElement("span", null, "Design Company", /*#__PURE__*/React.createElement("small", null, "LP"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Studio"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Lisbon"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "New York")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Index"), /*#__PURE__*/React.createElement("a", {
    href: "#work"
  }, "Work"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Journal")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Elsewhere"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Are.na"))), /*#__PURE__*/React.createElement("div", {
    className: "site-foot__legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Design Company LP"), /*#__PURE__*/React.createElement("span", null, "A limited partnership")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/SiteHero.jsx
try { (() => {
/* Studio marketing site — hero. Editorial statement + meta row. */
function SiteHero({
  onContact
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Button,
    Badge
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow t-eyebrow"
  }, "Design Company LP \u2014 Independent design studio, est. 2016"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "We build brands that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "behave like products"), /*#__PURE__*/React.createElement("br", null), "and products that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "feel like brands.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, "A small studio working at the seam of identity, product, and editorial \u2014 for founders who want the work to earn its keep."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onContact
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "#work"
  }, "See selected work")), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Clients"), /*#__PURE__*/React.createElement("strong", null, "48")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Avg. engagement"), /*#__PURE__*/React.createElement("strong", null, "14 wks")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "Based in"), /*#__PURE__*/React.createElement("strong", null, "Lisbon \xB7 NYC")))));
}
window.SiteHero = SiteHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/SiteNav.jsx
try { (() => {
/* Studio marketing site — top navigation. Composes DS IconButton + Button. */
function SiteNav({
  onContact
}) {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Button
  } = DS;
  const [open, setOpen] = React.useState(false);
  const links = ['Work', 'Studio', 'Services', 'Journal'];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "site-nav__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logomark.svg",
    alt: "",
    width: "30",
    height: "30"
  }), /*#__PURE__*/React.createElement("span", null, "Design Company", /*#__PURE__*/React.createElement("small", null, "LP"))), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase()
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "site-nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onContact
  }, "Start a project"))));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/SiteServices.jsx
try { (() => {
/* Studio marketing site — services list + ink callout. */
function SiteServices() {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Badge
  } = DS;
  const rows = [{
    n: '01',
    name: 'Brand identity',
    desc: 'Naming, identity systems, voice, and the guidelines that keep them alive.'
  }, {
    n: '02',
    name: 'Digital product',
    desc: 'Interface design, design systems, and front-end partnership through ship.'
  }, {
    n: '03',
    name: 'Editorial & web',
    desc: 'Marketing sites, reports, and publications with a point of view.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "services",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Three things, done properly.")), /*#__PURE__*/React.createElement("div", {
    className: "services__list"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "services__row",
    key: r.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "services__n"
  }, r.n), /*#__PURE__*/React.createElement("div", {
    className: "services__name"
  }, r.name), /*#__PURE__*/React.createElement("p", {
    className: "services__desc"
  }, r.desc)))));
}
window.SiteServices = SiteServices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/SiteServices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/SiteWork.jsx
try { (() => {
/* Studio marketing site — selected work index with filtering. */
const SITE_WORK = [{
  id: 1,
  name: 'Atlas',
  client: 'Atlas Capital',
  cat: 'Branding',
  year: '25',
  bg: '#1B1915',
  fg: '#FBF9F5',
  accent: false
}, {
  id: 2,
  name: 'Marée',
  client: 'Marée Studios',
  cat: 'Editorial',
  year: '25',
  bg: '#D85230',
  fg: '#FBF9F5',
  accent: true
}, {
  id: 3,
  name: 'Field Notes',
  client: 'Field Inc.',
  cat: 'Web',
  year: '24',
  bg: '#ECE6DA',
  fg: '#1B1915',
  accent: false
}, {
  id: 4,
  name: 'Quenya',
  client: 'Quenya Health',
  cat: 'Branding',
  year: '24',
  bg: '#3F4A3C',
  fg: '#FBF9F5',
  accent: false
}, {
  id: 5,
  name: 'Tideline',
  client: 'Tideline',
  cat: 'Web',
  year: '24',
  bg: '#FBF9F5',
  fg: '#1B1915',
  accent: false
}, {
  id: 6,
  name: 'Pressroom',
  client: 'Pressroom Co.',
  cat: 'Editorial',
  year: '23',
  bg: '#2C2820',
  fg: '#ECA98E',
  accent: false
}];
function WorkThumb({
  item
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "work__card",
    style: {
      background: item.bg,
      color: item.fg,
      borderColor: item.bg === '#FBF9F5' ? 'var(--border-default)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "work__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "work__cat"
  }, item.cat), /*#__PURE__*/React.createElement("span", {
    className: "work__year"
  }, "\u2019", item.year)), /*#__PURE__*/React.createElement("div", {
    className: "work__name"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "work__client"
  }, item.client));
}
function SiteWork() {
  const DS = window.DesignCompanyLPDesignSystem_b7b319;
  const {
    Tabs
  } = DS;
  const [filter, setFilter] = React.useState('all');
  const cats = ['Branding', 'Web', 'Editorial'];
  const items = filter === 'all' ? SITE_WORK : SITE_WORK.filter(w => w.cat === filter);
  const tabs = [{
    id: 'all',
    label: 'All work',
    count: SITE_WORK.length
  }, ...cats.map(c => ({
    id: c,
    label: c,
    count: SITE_WORK.filter(w => w.cat === c).length
  }))];
  return /*#__PURE__*/React.createElement("section", {
    className: "work",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Selected work"), /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: tabs
  })), /*#__PURE__*/React.createElement("div", {
    className: "work__grid"
  }, items.map(it => /*#__PURE__*/React.createElement(WorkThumb, {
    key: it.id,
    item: it
  }))));
}
window.SiteWork = SiteWork;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/SiteWork.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardMedia = __ds_scope.CardMedia;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
