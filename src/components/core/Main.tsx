export default function Main({
  children,
  className,
  id,
  container,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}) {
  return (
    <main id={id} className={className}>
      {container === true ? (
        <div className="container w-full max-w-[98%]">{children}</div>
      ) : (
        children
      )}
    </main>
  );
}
