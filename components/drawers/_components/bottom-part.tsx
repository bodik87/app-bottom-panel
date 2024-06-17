type Props = {};

export default function BottomPart({}: Props) {
  return (
    <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
      <div className="flex gap-6 justify-end max-w-md mx-auto">
        <a
          className="text-xs text-zinc-600 flex items-center gap-0.25"
          href="#"
          target="_blank"
        >
          Link 1
        </a>
        <a
          className="text-xs text-zinc-600 flex items-center gap-0.25"
          href="#"
          target="_blank"
        >
          Link 2
        </a>
      </div>
    </div>
  );
}
