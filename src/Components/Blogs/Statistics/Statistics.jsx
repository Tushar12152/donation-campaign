
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Legend, Cell, Label } from 'recharts';

const Statistics = () => {
  const donation = JSON.parse(localStorage.getItem('donation'));
  const totalData = useLoaderData();

  const COLORS = ['#00C49F','#FF444A']; 


  const yourDonations = donation ? donation.length : 0;
  const restDonations = totalData.length - yourDonations;

  const data = [
    { name: 'Your Donation', value: yourDonations },
    { name: 'Total Donation', value: restDonations },
  ];

  return (
    <div className=' lg:ml-[500px]'>

      <Helmet>
             <title> Statistic</title>
      </Helmet>
    
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          {data.map((entry, index) => (
          <Label key={`label-${index}`} position="inside"  content={({ percent }) => `${(percent * 100).toFixed(2)}%`} fill="#ffffff"/>
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>

    </div>
  );
};

export default Statistics;














