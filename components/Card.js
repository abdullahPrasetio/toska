export default function Card({ children, header }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="p-5 border-b bg-gray-50">{header}</div>
      <div className="p-5">{children}</div>
    </div>
  );
}
