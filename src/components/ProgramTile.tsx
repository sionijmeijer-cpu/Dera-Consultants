import { ArrowRight } from "lucide-react";

interface ProgramTileProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function ProgramTile({
  title,
  description,
  buttonText = "Learn More",
  buttonLink,
  onButtonClick,
}: ProgramTileProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }

    if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {(buttonLink || onButtonClick) && (
        <button
          onClick={handleClick}
          className="mt-6 inline-flex items-center gap-2 text-[#0f3460] font-semibold hover:text-[#0d2540] transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
