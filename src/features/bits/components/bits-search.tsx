import { useState } from 'react';

interface BitsSearchProps {
  placeholder: string;
  emptyLabel: string;
}

export function BitsSearch({ placeholder, emptyLabel }: BitsSearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (raw: string) => {
    setQuery(raw);
    const needle = raw.trim().toLowerCase();
    let matches = 0;

    document.querySelectorAll<HTMLElement>('[data-bit-search]').forEach(card => {
      const hit = needle === '' || (card.dataset.bitSearch ?? '').includes(needle);
      card.style.display = hit ? '' : 'none';
      if (hit) matches += 1;
    });

    const empty = document.querySelector<HTMLElement>('[data-bits-empty]');
    if (empty) empty.style.display = matches === 0 ? '' : 'none';
  };

  return (
    <div className="mx-auto mb-12 max-w-xl">
      <input
        type="search"
        value={query}
        onChange={e => handleSearch(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full border border-gold-dim bg-[rgba(212,175,55,.06)] px-4 py-3 font-body text-ink-on-parchment placeholder:text-ink-on-parchment-soft focus-visible:border-gold focus-visible:outline-none"
      />
      <p data-bits-empty className="mt-6 hidden text-center italic text-ink-on-parchment-soft">
        {emptyLabel}
      </p>
    </div>
  );
}
