import { ArrowRight } from 'lucide-react';

interface Program {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <a
      href={program.link}
      className="group bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-[#1B7A4E] flex flex-col h-full"
    >
      <div className="text-4xl mb-4">{program.icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-[#0f3460] mb-3 group-hover:text-[#1B7A4E] transition-colors">
        {program.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
        {program.description}
      </p>
      <div className="flex items-center gap-2 text-[#1B7A4E] font-semibold group-hover:gap-3 transition-all">
        Learn More
        <ArrowRight className="w-5 h-5" />
      </div>
    </a>
  );
}
