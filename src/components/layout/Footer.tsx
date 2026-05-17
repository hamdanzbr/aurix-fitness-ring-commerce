const footerGroups = [
  {
    title: "Product",
    links: ["Aurix Ring", "Features", "Sizing", "App"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Shipping & Returns", "Warranty", "FAQ"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-[0.18em]">
            <span className="h-4 w-4 rounded-full border border-white/70" />
            AURIX
          </a>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
            The future of wellness is on your finger. Premium materials meeting cutting-edge technology.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-white" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.08] px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 AURIX Inc. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
