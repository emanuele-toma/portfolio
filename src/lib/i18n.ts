import type { Lang, I18nDict } from '../types/index';

export function t(lang: Lang, key: string): string {
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

export const I18N: Record<Lang, I18nDict> = {
  en: {
    'meta.title.home': 'Emanuele Toma - Full Stack Developer',
    'meta.title.bits': 'Bits - Emanuele Toma',
    'meta.title.contact': 'Hail - Emanuele Toma',

    'nav.home': 'Home',
    'nav.bits': 'Bits',
    'nav.contact': 'Hail',

    'hero.kicker': 'Full Stack Developer',
    'hero.cta.hail': 'Send a Message',

    'intro.kicker': 'A few words about myself',
    'intro.now.label': 'Presently',
    'intro.now.text':
      'Full Stack Developer at AISent since July 2023. Python on the backend, React with TypeScript on the frontend, and AWS and Docker on infrastructure. I also wear the IT hat there: maintaining internal servers and the network, and onboarding new hires.',
    'intro.trained.label': 'Background',
    'intro.trained.text':
      'Two-year Cloud Development program at ITS Jobs Academy (Sep 2023-Dec 2025). I studied CI/CD, orchestration with Docker, machine learning and deep learning in Python. I also got to use React, Vue, Angular, TypeScript and MongoDB.',
    'intro.side.label': 'On the side',
    'intro.side.text':
      'I tinker for the pure joy of building. Small tools, half-finished experiments, things I want to see exist. Most of them live on GitHub.',
    'intro.side.cta': '→ See on GitHub',

    'bits.title': 'Bits',
    'bits.lede': 'Short notes: ideas, discoveries, small demos. Low cortisol.',
    'bits.search.placeholder': 'Search bits…',
    'bits.search.empty': 'No bits match your search.',
    'bits.back': 'All bits',

    'contact.title': 'Send Word',
    'contact.lede': 'Always happy to chat about projects, opportunities, or just tech and stuff',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.msg': 'Message',
    'contact.form.send': 'Send a carrier pigeon',
    'contact.aside.title': 'Other ways to reach me',
    'contact.aside.by': 'By the hand of Emanuele Toma.',
    'contact.aside.email': 'Email',
    'contact.aside.gh': 'GitHub',
    'contact.aside.li': 'LinkedIn',
    'contact.thanks': 'Your message has been sealed and sent.',

    'foot.copy': 'Emanuele Toma · MMXXVI',
  },

  it: {
    'meta.title.home': 'Emanuele Toma - Sviluppatore Full Stack',
    'meta.title.bits': 'Bits - Emanuele Toma',
    'meta.title.contact': 'Contatti - Emanuele Toma',

    'nav.home': 'Home',
    'nav.bits': 'Bits',
    'nav.contact': 'Contatti',

    'hero.kicker': 'Sviluppatore Full Stack',
    'hero.cta.hail': 'Contattami',

    'intro.kicker': 'Due parole su di me',
    'intro.now.label': 'Attualmente',
    'intro.now.text':
      "Sviluppatore Full Stack presso AISent da luglio 2023. Python sul backend, React con TypeScript sul frontend, AWS e Docker sull'infrastruttura. Lì ricopro anche il ruolo IT: gestione dei server interni e della rete, e onboarding dei nuovi colleghi.",
    'intro.trained.label': 'Formazione',
    'intro.trained.text':
      'Percorso biennale di Sviluppo Cloud presso ITS Jobs Academy (set 2023-dic 2025). Ho studiato CI/CD, orchestrazione con Docker, machine learning e deep learning in Python. Ho anche usato React, Vue, Angular, TypeScript e MongoDB.',
    'intro.side.label': 'Nel tempo libero',
    'intro.side.text':
      'Sviluppo per il puro piacere di costruire. Piccoli tool, esperimenti lasciati a metà, cose che voglio vedere esistere. La maggior parte è su GitHub.',
    'intro.side.cta': '→ Vedi su GitHub',

    'bits.title': 'Bits',
    'bits.lede': 'Note brevi: idee, scoperte, piccoli esperimenti. Senza stress.',
    'bits.search.placeholder': 'Cerca bits…',
    'bits.search.empty': 'Nessun bit corrisponde alla ricerca.',
    'bits.back': 'Tutti i bits',

    'contact.title': 'Mandami un Messaggio',
    'contact.lede': 'Sempre felice di parlare di progetti, opportunità, tech e altro',
    'contact.form.name': 'Il tuo nome',
    'contact.form.email': 'La tua email',
    'contact.form.msg': 'Messaggio',
    'contact.form.send': 'Invia un piccione viaggiatore',
    'contact.aside.title': 'Altri modi per raggiungermi',
    'contact.aside.by': 'Per mano di Emanuele Toma.',
    'contact.aside.email': 'Email',
    'contact.aside.gh': 'GitHub',
    'contact.aside.li': 'LinkedIn',
    'contact.thanks': 'Il tuo messaggio è stato sigillato e spedito.',

    'foot.copy': 'Emanuele Toma · MMXXVI',
  },
};
