type Props = {
  title: string;
  onClick: any;
};

export default function DrawerButton({ title, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="my-4 rounded-full w-full bg-black p-4 font-semibold text-white hover:bg-black/80 outline-none transition-all select-none"
    >
      {title}
    </button>
  );
}
