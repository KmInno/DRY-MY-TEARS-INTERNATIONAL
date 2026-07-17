import React from "react";

export default function ProgramCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-primary/10">
      <div className="w-fit rounded-xl bg-accent/10 p-4">
        <Icon className="text-accent" />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-3 text-slate-700">
        {description}
      </p>
    </div>
  );
}