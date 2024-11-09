interface Props {
  name: string;
  label: string;
}

export default function CheckBox({ name, label }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        className="size-[20px] accent-primary"
        name={name}
      />
      <label className="text-xl">{label}</label>
    </div>
  );
}
