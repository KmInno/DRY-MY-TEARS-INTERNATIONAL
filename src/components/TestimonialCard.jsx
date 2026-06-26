import React from "react";

export default function TestimonialCard({
  name,
  role,
  quote,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <p className="italic text-gray-600">
        "{quote}"
      </p>

      <div className="mt-4">
        <h4 className="font-semibold">
          {name}
        </h4>
        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>
    </div>
  );
}