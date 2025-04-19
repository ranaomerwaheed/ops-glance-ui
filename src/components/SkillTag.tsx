
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface SkillTagProps {
  skill: Skill;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  const getCategoryColor = (category: 'frontend' | 'backend' | 'tools') => {
    switch (category) {
      case 'frontend':
        return 'bg-primary/10 text-primary border border-primary/20';
      case 'backend':
        return 'bg-accent/10 text-accent border border-accent/20';
      case 'tools':
        return 'bg-secondary/50 text-secondary-foreground border border-secondary/20';
      default:
        return 'bg-primary/10 text-primary border border-primary/20';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-full ${getCategoryColor(skill.category)}`}>
      {skill.name}
    </div>
  );
};

export default SkillTag;
