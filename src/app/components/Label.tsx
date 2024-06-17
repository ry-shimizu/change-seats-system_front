export default function Label({ name }: { name: string }) {
  return (
    <label className="mb-1 flex items-center">
      <span className="text-gray-700">{name}</span>
      <span className="text-red-500 ml-1">*</span>
    </label>
  );
}
