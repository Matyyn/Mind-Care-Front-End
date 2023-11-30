// import React,{useState,useEffect} from 'react';
// import { PieChart, Pie, Cell, Legend } from 'recharts';
// import colors from "../Colors";
// const data = [
//   { gender: 'Male', value: 40 },
//   { gender: 'Female', value: 60 },
// ];
// const COLORS = [colors.primary,colors.secondary];
// const PieGraph = () => (
//   const [therapist,setTherapist] = useState(0);
// const [clients,setClients] = useState(0);
// useEffect(() => {
//   async function getUsers() {
//     try {
//       const response = await axios.get('https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-dashboard-data');
//       console.log('res',response.data);        
//       setTherapist(response.data.therapistCount);
//       setClients(response.data.clientsCount);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }  
//   getUsers();
// }, []);
// const Users = [
//   {role:'Therapists',value:therapist},
//   {role:'Clients',value:clients}
// ]

//   <div>
//     <PieChart width={300} height={285} padding={0} margin={0}>
//       <Pie
//         dataKey="value"
//         isAnimationActive={false}
//         data={Users}
//         cx={150}
//         cy={100}
//         outerRadius={100}
//         fill={colors.secondary}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Legend
//         formatter={(value, entry) => `${entry.payload.gender} - ${entry.payload.value}`}
//         name="Forum Created Posts"
//       />
//     </PieChart>    
//   </div>
// );

// export default PieGraph;
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import axios from 'axios';
import colors from "../Colors";

const COLORS = [colors.primary, colors.secondary];

const PieGraph = () => {
  const [therapist, setTherapist] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get('https://mind-care-backend-7dd9b4794b38.herokuapp.com/api/v1/admin/get-dashboard-data');
        console.log('res', response.data);
        setTherapist(response.data.noOfTherapists);
        setClients(response.data.noOfClients);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUsers();
  }, []);

  const Users = [
    { role: 'Therapists', value: therapist },
    { role: 'Clients', value: clients }
  ]

  return (
    <div>
      <PieChart width={300} height={285} padding={0} margin={0}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={Users}
          cx={150}
          cy={100}
          outerRadius={100}
          fill={colors.secondary}
        >
          {Users.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          formatter={(value, entry) => `${entry.payload.role} - ${entry.payload.value}`}
          name="Forum Created Posts"
        />
      </PieChart>
    </div>
  );
};

export default PieGraph;