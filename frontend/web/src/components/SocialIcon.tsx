export default function SocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white shadow hover:shadow-md transition-shadow">
      <a href={link} target="_blank" rel="noopener noreferrer" className="">
        {icon}
      </a>
    </div>
  );
}
