import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export const Graph = ({graph}) => {
    const data = graph.map(item => ({
        satisfactionRate: item.satisfactionRate ? item.satisfactionRate : 0.0,
        time: new Date(item.time),
    }));

    return (
        <LineChart width={900} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#fff"/>
            <XAxis dataKey="time" tickFormatter={time => new Date(time).toLocaleString()}/>
            <YAxis/>
            <Tooltip labelFormatter={time => new Date(time).toLocaleString()}/>
            <Legend/>
            <Line type="monotone" strokeWidth={3} dataKey="satisfactionRate" stroke="#8884d8"/>
        </LineChart>
    )
}
