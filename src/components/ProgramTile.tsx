import { ArrowRight } from "lucide-react";

interface ProgramTileProps {
  title: string;
  description: string;
  details?: string;
  pricing?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export default function ProgramTile({
  title,
  description,
  details,
  pricing,
  buttonText = "Learn More",
  buttonLink,
  onButtonClick,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
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

  const imageBlock = imageSrc ? (
    <div className="w-full md:w-1/2">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  ) : null;

  const contentBlock = (
    <div className="w-full flex-1 p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      {details && (
        <p className="text-gray-500 leading-relaxed mb-4">{details}</p>
      )}

      {pricing && (
        <p className="text-[#0f3460] font-semibold mb-4">{pricing}</p>
      )}

      {(buttonLink || onButtonClick) && (
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-[#0f3460] font-semibold hover:text-[#0d2540] transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
      <div
        className={`flex flex-col md:flex-row ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {imageBlock}
        {contentBlock}
      </div>
    </div>
  );
}
