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
    // IMPORTANT: buttonLink must win when both exist
    if (buttonLink) {
      window.location.href = buttonLink;
      return;
    }

    if (onButtonClick) {
      onButtonClick();
    }
  };

  const imageBlock = imageSrc ? (
    <div className="w-full md:w-[42%] relative min-h-[260px] md:min-h-[320px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0f3460]/35" />
    </div>
  ) : null;

  const contentBlock = (
    <div className="w-full md:w-[58%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-[#0f3460] mb-4">
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        {description}
      </p>

      {details && (
        <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
          {details}
        </p>
      )}

      {pricing && (
        <p className="text-[#0f3460] font-semibold mb-5">{pricing}</p>
      )}

      {(buttonLink || onButtonClick) && (
        <div>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#156a3d] transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div
            className={`flex flex-col ${
              imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {imageBlock}
            {contentBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
