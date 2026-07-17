function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-sm backdrop-blur">
      <p className="text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-sm text-slate-700">{label}</p>
    </div>
  );
}

export default StatCard;
