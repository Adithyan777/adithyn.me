import { Section } from '@/components/section';
import { WorkList } from '@/components/work-row';
import { selectedWork } from '@/data/work';

export function SelectedWork() {
  return (
    <Section
      id="work"
      label="Selected work"
      count={selectedWork.length}
      action={{ label: 'All projects', to: '/projects' }}
    >
      <WorkList items={selectedWork} />
    </Section>
  );
}
