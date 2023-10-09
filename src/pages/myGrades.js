import React from "react";
import{PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar,} from "recharts";

export default function myGrades() {
    const data = [
        { name: "Semester 1", grades: 3.5 },
        { name: "Semester 2", grades: 3.63 },
        { name: "Semester 3", grades: 2.85 },
        { name: "Semester 4", grades: 3.84 },
      ];
    return(
        <div style={{ textAlign: "center" }}>
        <h1>My Grades</h1>
        <div className="App">
            <BarChart
            width={1800}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
            }}
            barSize={80}
            >
            <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 70, right: 100 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="grades" fill="lightseagreen" background={{ fill: "#eee" }} />
            </BarChart>
        </div>
        </div>
    );
}
