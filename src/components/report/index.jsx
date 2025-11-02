"use client";
import React, { useState } from "react";
import complaintsData from "./report.json";

export default function ComplaintsTable() {
  const [visibleCount, setVisibleCount] = useState(7);

  const handleViewAll = () => {
    setVisibleCount(complaintsData.length);
  };

  return (
    <div className="px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        প্রাপ্ত অভিযোগ
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Subject</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Location</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {complaintsData.slice(0, visibleCount).map((complaint) => (
              <tr key={complaint.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">{complaint.id}</td>
                <td className="py-3 px-4 text-sm">{complaint.name}</td>
                <td className="py-3 px-4 text-sm">{complaint.email}</td>
                <td className="py-3 px-4 text-sm">{complaint.subject}</td>
                <td className="py-3 px-4 text-sm">{complaint.date}</td>
                <td className="py-3 px-4 text-sm">{complaint.location}</td>
                <td className="py-3 px-4 text-sm">{complaint.description}</td>
                <td className="py-3 px-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
                      complaint.status === "Resolved"
                        ? "bg-green-500"
                        : complaint.status === "In Progress"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {complaint.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Button */}
      {visibleCount < complaintsData.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewAll}
            className="px-6 py-2 bg-sky-800 hover:bg-sky-800 text-white rounded-lg transition"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}
