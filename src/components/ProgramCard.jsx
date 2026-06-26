import React from "react";

export default function ProgramCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <div className="bg-amber-100 p-4 rounded-xl w-fit">
        <Icon className="text-amber-600" />
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}