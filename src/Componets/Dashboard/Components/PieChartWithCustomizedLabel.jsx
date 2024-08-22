// import React, { PureComponent } from 'react';
import { useState } from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';



const PieChartWithCustomizedLabel = () => {


    // data load 

// users length find
const [user, setUser] = useState([]);
 
fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((users) => setUser(users));

// users lenth end 


 // places length find
 const [place, setPlace] = useState([]);

  
 fetch('http://localhost:3000/places')
   .then((res) => res.json())
   .then((places) => setPlace(places));

 // places lenth end 


 // hotels length find
 const [hotel, setHotel] = useState([]);

 
 fetch('http://localhost:3000/hotels')
   .then((res) => res.json())
   .then((hotels) => setHotel(hotels));

 // hotels lenth end 


 // packages length find
 const [packaged, setPackage] = useState([]);

 
 fetch('http://localhost:3000/packages')
   .then((res) => res.json())
   .then((packages) => setPackage(packages));

 // packages lenth end 


 // blogs length find
 const [blog, setBlog] = useState([]);

 
 fetch('http://localhost:3000/blogs')
   .then((res) => res.json())
   .then((blogs) => setBlog(blogs));

 // blogs lenth end 


 // booking length find
 const [booking, setBooking] = useState([]);

 
 fetch('http://localhost:3000/blogs')
   .then((res) => res.json())
   .then((bookings) => setBooking(bookings));

 // bookings lenth end 


    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
 
};

export default PieChartWithCustomizedLabel;















// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

//   render() {
//     return (
     
//   }
// }
