import { NavLinks } from '@/components/nav-links';

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-4 p-4 border-r min-h-screen w-[240px]">
      <NavLinks className="block" />
    </aside>
  );
}