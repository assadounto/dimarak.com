export function SectionHeading({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {kicker}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h2>
      {desc && <p className="mt-2 text-sm text-muted-foreground">{desc}</p>}
    </div>
  );
}
