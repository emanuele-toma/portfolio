interface Tweaks {
  showWaxSeals: boolean;
  accent: 'crimson' | 'azure' | 'sable' | 'forest';
  ornamentDensity: 'minimal' | 'balanced' | 'rich';
}

declare global {
  interface Window {
    PORTFOLIO_TWEAKS: Tweaks;
    setTweak: (keyOrObj: Partial<Tweaks> | keyof Tweaks, value?: unknown) => void;
  }
}

const TWEAK_DEFAULTS: Tweaks = {
  showWaxSeals: true,
  accent: 'crimson',
  ornamentDensity: 'balanced',
};

const accentMap: Record<Tweaks['accent'], { c1: string; c2: string; c3: string }> = {
  crimson: { c1: '#722f37', c2: '#8e3a44', c3: '#4a1f25' },
  azure:   { c1: '#2c4769', c2: '#3d5d85', c3: '#1c2f48' },
  sable:   { c1: '#2a2520', c2: '#3a3128', c3: '#1f1a14' },
  forest:  { c1: '#3a5234', c2: '#4d6b46', c3: '#26361f' },
};

function applyTweaks(t: Tweaks): void {
  const a = accentMap[t.accent] ?? accentMap.crimson;
  document.documentElement.style.setProperty('--color-crimson', a.c1);
  document.documentElement.style.setProperty('--color-crimson-bright', a.c2);
  document.documentElement.style.setProperty('--color-crimson-deep', a.c3);
  document.documentElement.dataset.density = t.ornamentDensity;
  document.querySelectorAll<HTMLElement>('[data-wax-seal]').forEach(el => {
    el.style.display = t.showWaxSeals ? '' : 'none';
  });
}

window.PORTFOLIO_TWEAKS = { ...TWEAK_DEFAULTS };

window.setTweak = (keyOrObj, value) => {
  const next: Tweaks = typeof keyOrObj === 'string'
    ? { ...window.PORTFOLIO_TWEAKS, [keyOrObj]: value }
    : { ...window.PORTFOLIO_TWEAKS, ...keyOrObj };
  window.PORTFOLIO_TWEAKS = next;
  applyTweaks(next);
  try {
    window.parent.postMessage(
      { type: '__edit_mode_set_keys', edits: typeof keyOrObj === 'string' ? { [keyOrObj]: value } : keyOrObj },
      '*'
    );
  } catch { /* ignore */ }
};

document.addEventListener('DOMContentLoaded', () => {
  applyTweaks(window.PORTFOLIO_TWEAKS);

  document.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href')!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  let tweaksMounted = false;
  window.addEventListener('message', event => {
    if (event.data?.type === '__activate_edit_mode') {
      if (!tweaksMounted) { mountTweaksPanel(); tweaksMounted = true; }
      const root = document.getElementById('tweaks-root');
      if (root) root.style.display = '';
    }
    if (event.data?.type === '__deactivate_edit_mode') {
      const root = document.getElementById('tweaks-root');
      if (root) root.style.display = 'none';
    }
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch { /* ignore */ }
});

function mountTweaksPanel(): void {
  if (document.getElementById('tweaks-root')) return;
  const root = document.createElement('div');
  root.id = 'tweaks-root';
  root.innerHTML = `
    <style>
      #tweaks-root { position:fixed;right:20px;bottom:20px;z-index:100;width:280px;font-family:var(--font-body);background:var(--color-parchment-lt);color:var(--color-ink-on-parchment);border:1px solid var(--color-gold-dim);box-shadow:0 18px 40px -10px rgba(0,0,0,.55); }
      #tweaks-root::before { content:"";position:absolute;inset:5px;border:1px solid rgba(154,125,42,.45);pointer-events:none; }
      .tw-head { display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:linear-gradient(180deg,var(--color-ink-2),var(--color-ink));color:var(--color-gold);font-family:var(--font-blackletter);font-size:1.15rem;border-bottom:1px solid var(--color-gold-deep); }
      .tw-head button { color:var(--color-gold-bright);font-size:18px;line-height:1;padding:0 6px; }
      .tw-body { padding:14px 16px;display:flex;flex-direction:column;gap:14px; }
      .tw-row { display:flex;flex-direction:column;gap:6px; }
      .tw-row>label { font-family:var(--font-carved);font-size:.75rem;letter-spacing:.22em;text-transform:uppercase;color:var(--color-crimson); }
      .tw-toggle { display:flex;align-items:center;justify-content:space-between;font-size:.92rem; }
      .tw-toggle input { accent-color:var(--color-crimson);transform:scale(1.1); }
      .tw-seg { display:flex;border:1px solid var(--color-gold-dim); }
      .tw-seg button { flex:1;padding:7px 4px;font-family:var(--font-carved);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--color-ink-on-parchment);background:var(--color-parchment-lt);border:none; }
      .tw-seg button+button { border-left:1px solid var(--color-gold-dim); }
      .tw-seg button[aria-pressed="true"] { background:var(--color-gold);color:var(--color-ink); }
      .tw-swatches { display:flex;gap:8px; }
      .tw-swatches button { width:32px;height:32px;border:1px solid var(--color-gold-dim);position:relative; }
      .tw-swatches button[aria-pressed="true"]::after { content:"";position:absolute;inset:-4px;border:1px solid var(--color-ink-2); }
    </style>
    <div class="tw-head"><span>Tweaks</span><button id="tw-close" aria-label="Close">×</button></div>
    <div class="tw-body">
      <div class="tw-row tw-toggle"><label>Wax seals</label><input type="checkbox" id="tw-seals"/></div>
      <div class="tw-row"><label>Accent</label>
        <div class="tw-swatches" id="tw-accent">
          <button data-v="crimson" style="background:#722f37" aria-label="Crimson"></button>
          <button data-v="azure" style="background:#2c4769" aria-label="Azure"></button>
          <button data-v="forest" style="background:#3a5234" aria-label="Forest"></button>
          <button data-v="sable" style="background:#2a2520" aria-label="Sable"></button>
        </div>
      </div>
      <div class="tw-row"><label>Ornament density</label>
        <div class="tw-seg" id="tw-density">
          <button data-v="minimal">Low</button>
          <button data-v="balanced">Mid</button>
          <button data-v="rich">High</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(root);

  const T = window.PORTFOLIO_TWEAKS;
  const seals = root.querySelector<HTMLInputElement>('#tw-seals')!;
  seals.checked = T.showWaxSeals;
  seals.addEventListener('change', () => window.setTweak({ showWaxSeals: seals.checked }));

  const setPressed = (sel: string, val: string) =>
    root.querySelectorAll<HTMLButtonElement>(`${sel} button`).forEach(b =>
      b.setAttribute('aria-pressed', b.dataset.v === val ? 'true' : 'false'));
  setPressed('#tw-accent', T.accent);
  setPressed('#tw-density', T.ornamentDensity);
  root.querySelectorAll<HTMLButtonElement>('#tw-accent button').forEach(b =>
    b.addEventListener('click', () => { window.setTweak({ accent: b.dataset.v as Tweaks['accent'] }); setPressed('#tw-accent', b.dataset.v!); }));
  root.querySelectorAll<HTMLButtonElement>('#tw-density button').forEach(b =>
    b.addEventListener('click', () => { window.setTweak({ ornamentDensity: b.dataset.v as Tweaks['ornamentDensity'] }); setPressed('#tw-density', b.dataset.v!); }));
  root.querySelector<HTMLButtonElement>('#tw-close')!.addEventListener('click', () => {
    root.style.display = 'none';
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch { /* ignore */ }
  });
}
