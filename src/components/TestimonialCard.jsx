import React from "react";

export default function TestimonialCard({
  name,
  role,
  quote,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-primary/10">
      <p className="italic text-slate-700">
        "{quote}"
      </p>

      <div className="mt-4">
        <h4 className="font-semibold text-primary">
          {name}
        </h4>
        <p className="text-sm text-slate-600">
          {role}
        </p>
      </div>
    </div>
  );
}