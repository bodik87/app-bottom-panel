type Props = { children: React.ReactNode };

export default function BottomPanel({ children }: Props) {
  return (
    <section className="fixed bottom-0 inset-x-0 border-t bg-gray-200">
      <div className="max-w-md mx-auto h-[70px] flex items-center">
        {children}
      </div>
    </section>
  );
}
