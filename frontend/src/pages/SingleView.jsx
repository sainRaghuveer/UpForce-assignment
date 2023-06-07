import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleUSerCard from '../components/SingleUserCard';

const SingleView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getSingleData = async () => {
    try {
      const response = await fetch(`https://agile-pear-cape-buffalo.cyclic.app/api/user/${id}`);
      const res = await response.json();
      if (response.ok) {
        console.log(res)
        setData(res.data);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    getSingleData();
    console.log("data", data);
  }, [id]);

  console.log(id)
  return (
    <div>
      {<SingleUSerCard data={data}/>}
    </div>
  )
}

export default SingleView