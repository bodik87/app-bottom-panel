type Props = { children: React.ReactNode };

export default function BottomPanel({ children }: Props) {
  return (
    <div className="mt-auto h-20 border-t bg-gray-100 flex items-center">
      {children}
    </div>
  );
}
