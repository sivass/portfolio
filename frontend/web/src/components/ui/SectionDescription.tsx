export function SectionDescription({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-5xl font-bold ">{title}</h2>
      {title && (
        <p className="text-md text-gray-400 font-semibold  pt-3 mb-2">
          {description}
        </p>
      )}
    </div>
  );
}
