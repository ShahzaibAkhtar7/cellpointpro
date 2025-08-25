

type Props = {
  onClick: () => void;
};

export default function BookDemoButton({ onClick }: Props) {
  return (
    <div className="mt-6">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center px-8 py-3 
                   bg-gradient-to-r from-orange-400 to-orange-500 
                   text-white font-semibold rounded-full shadow-lg 
                   hover:from-orange-500 hover:to-orange-600 
                   transition-all duration-200 font-sans"
      >
        Book a Demo
      </button>
    </div>
  );
}
