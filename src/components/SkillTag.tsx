
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface SkillTagProps {
  skill: Skill;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-accent/20 text-accent';
      case 'backend':
        return 'bg-blue-500/20 text-blue-400';
      case 'tools':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-primary/20 text-primary';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-full ${getCategoryColor(skill.category)}`}>
      {skill.name}
    </div>
  );
};

export default SkillTag;
