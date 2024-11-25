export default function FeatureCard({ icon, text }) {
  return (
    <div className="bg-[#bc312a] p-4 flex flex-col items-center gap-2 justify-center rounded-xl h-full hover:bg-[#ab342e] hover:cursor-pointer transition">
      {icon}
      <p className="font-bold">{text}</p>
    </div>
  );
}
