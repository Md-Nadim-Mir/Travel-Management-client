
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const CustomShapeBarChart = () => {


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

 
 fetch('http://localhost:3000/bookings')
   .then((res) => res.json())
   .then((bookings) => setBooking(bookings));

 // bookings lenth end 

const data = [
    {
      name: 'Users',
      uv: user.length,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Places',
      uv: place.length,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Hotels',
      uv: hotel.length,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Packages',
      uv: packaged.length,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Blogs',
      uv: blog.length,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Bookings',
      uv: booking.length,
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

    return (
        <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          bottom: 10,
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

