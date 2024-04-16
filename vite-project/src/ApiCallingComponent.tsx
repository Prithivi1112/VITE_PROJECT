import React, { useState, useEffect } from 'react';
import TableData from './TableData';


interface UserData {
  id: number;
  name: string;
  url: string;
  image: string;
}

const ApiCallingComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data,"data12");
        setUserData(data);
        // setUserData({
        //   id: data.id,
        //   name: data.title,
        //   url: data.url,
        //   image:data.thumbnailUrl
        // });
        setError(null);
      } catch (error) {
        setError('An error occurred while fetching data');
        setUserData(null);
      }
    };

    fetchData();
  }, []);


  console.log(userData, "data");
  return (
    <div>
      {error && <p>{error}</p>}
      {userData && (
        <TableData data ={userData} />
      )}
    </div>
  );
};

export default ApiCallingComponent;
