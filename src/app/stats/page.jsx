"use client";
import { AuthContext } from "@/component/ContextProvider/AuthProvider";
import React, { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StatsPage = () => {
  const { selectedFriend } = useContext(AuthContext);
  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

  const interactionCount = selectedFriend.reduce((acc, friend) => {
    const type = friend.actiontype || "Other";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  
  const chartData = Object.keys(interactionCount).map((key) => ({
    name: key,
    value: interactionCount[key],
  }));

  return (
    <div className="min-h-screen mt-40 container mx-auto">
      <h1 className="text-4xl font-bold">Friendship Analytics</h1>
      <div className="shadow-md p-5 mt-5 rounded-2xl">
        <h1 className="text-lg font-semibold">By Interaction Type</h1>
        <div className="w-full h-[350px]">
            {selectedFriend.length === 0 && <p className="text-gray-500 mt-24 text-center">No interactions yet. Add some from friend details page.</p>}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
