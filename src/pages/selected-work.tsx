import { Section } from '@/components/section';
import { WorkList } from '@/components/work-row';
import { featuredWork } from '@/lib/content';

export function SelectedWork() {
  const items = featuredWork.map((entry) => entry.meta);

  return (
    <Section
      id="work"
      label="Selected work"
      count={items.length}
      action={{ label: 'All projects', to: '/projects' }}
    >
      <WorkList items={items} />
    </Section>
  );
}
