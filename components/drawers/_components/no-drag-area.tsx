type Props = { children: React.ReactNode };

export default function NoDragArea({ children }: Props) {
  return (
    <div data-vaul-no-drag className="w-full bg-gray-400 p-4 rounded-xl">
      {children}
    </div>
  );
}
