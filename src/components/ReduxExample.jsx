// App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setArray } from './redux/slices/accountsReducer'
import { useSelector } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  const myArray = useSelector((state) => state.myReducer.myArray);

  // Sample array data
//  const sampleArrayData = [10, 20, 30, 40, 50,69,0];
  const data = [
    {
      name: "Andrew",
      email: "male@gmail.com",
      voilation: "harassement",
      NoOfReports: "2",
      accountReportedBy: "mike",
      status: "completed",
    },
    {
      name: "Hanna",
      email: "male@gmail.com",
      voilation: "harassement",
      NoOfReports: "2",
      accountReportedBy: "mike",
      status: "completed",
    },
    {
      name: "Indiana",
      email: "male@gmail.com",
      voilation: "harassement",
      NoOfReports: "2",
      accountReportedBy: "mike",
      status: "completed",
    },
  ];
  
  useEffect(() => {
    // Dispatch the action to set the array in the Redux store when the component mounts
    dispatch(setArray(data));
  }, [dispatch]);

  return (
    <div>
      <h2>Array from Redux Store:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>  );
};

export default App;
