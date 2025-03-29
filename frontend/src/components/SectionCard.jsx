export function SectionCard({ title, children }) {
  return (
    <div className="glass-effect rounded-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-semibold text-primary mb-6">{title}</h2>
      {children}
    </div>
  );
}