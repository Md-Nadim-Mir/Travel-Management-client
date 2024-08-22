
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


// data load 

// users length find
const [user, setUser] = useState([]);
 
fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((users) => setUser(users));

// users lenth end 

const data = [
  {
    name: 'Users',
    uv: user.length,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 10,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 6,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 9,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 7,
    pv: 3800,
    amt: 2500,
  },
 
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

const CustomShapeBarChart = () => {


    return (
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    );
};

export default CustomShapeBarChart;

