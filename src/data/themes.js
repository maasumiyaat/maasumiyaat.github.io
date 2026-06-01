export const themes = {
  default: {
    label: 'Default',
    buttonText: 'change the vibe',
    allowLightMode: true,
    vars: { '--bg':'#0d0f14','--bg2':'#12151c','--bg3':'#1a1e28','--border':'rgba(255,255,255,0.07)','--text':'#e8eaf0','--muted':'#b3b9ce','--accent':'#00e5c0','--accentLight':'#7ff6e2','--accent2':'#5b8fff','--accent3':'#ff6b6b','--card':'#141720','--nav-bg':'rgba(13,15,20,0.85)' },
  },
      notebook: {
        label: 'Notebook',
        buttonText: 'Notebook',
        allowLightMode: false,
        vars: {
          '--bg': '#f4efe2',
          '--bg2': '#ede6d6',
          '--bg3': '#e4dcc9',

          '--border': 'rgba(80,60,30,0.14)',

          '--text': '#2b241d',
          '--muted': '#6e6255',

          '--accent': '#3b82f6',       
          '--accentLight': '#93c5fd',
          '--accent2': '#8b5e3c',      
          '--accent3': '#d97706',      

          '--card': '#fffaf0',
          '--nav-bg': 'rgba(244,239,226,0.88)',
        },
      },
terminalX: {
  label: 'Terminal-X',
  buttonText: 'Terminal-X',
  allowLightMode: false,

  vars: {
    /* =========================
       BACKGROUND / SURFACES
    ========================= */
    '--bg': '#05080a',
    '--bg2': '#0a0f0d',
    '--bg3': '#101814',
    '--card': '#0b120f',
    '--nav-bg': 'rgba(5,8,10,0.92)',

    /* =========================
       TEXT
    ========================= */
    '--text': '#b7ffcc',
    '--muted': '#5fa37a',

    /* =========================
       ACCENTS (CRT GREEN STYLE)
    ========================= */
    '--accent': '#00ff66',
    '--accentLight': '#7dffb3',
    '--accent2': '#00cc55',
    '--accent3': '#33ff99',

    /* =========================
       UI ELEMENTS
    ========================= */
    '--border': 'rgba(0,255,120,0.12)',

    /* =========================
       TYPOGRAPHY (IMPORTANT)
    ========================= */
    '--font-body': '"Share Tech Mono", "VT323", monospace',
    '--font-mono': '"VT323", "Share Tech Mono", monospace',
    '--font-ui': '"Share Tech Mono", monospace',
  },
},
}
export const defaultTheme = 'default'
