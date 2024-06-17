type Props = { children: React.ReactNode };

export default function BottomPanel({ children }: Props) {
  return (
    <section className="mt-auto border-t bg-gray-100">
      <div className="max-w-md mx-auto h-20 flex items-center">{children}</div>
    </section>
  );
}
