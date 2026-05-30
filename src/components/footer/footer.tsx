interface FooterProps {
  copy: string;
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="relative z-1 mx-auto flex w-full max-w-295 flex-col items-center gap-4 px-8 max-[720px]:px-6">
        <p className="my-3 text-parchment-shade">{copy}</p>
      </div>
    </footer>
  );
}
