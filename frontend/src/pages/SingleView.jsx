import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleUSerCard from '../components/SingleUserCard';
import { Skeleton } from '@chakra-ui/react';

const SingleView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getSingleData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://agile-pear-cape-buffalo.cyclic.app/api/user/${id}`);
      const res = await response.json();
      if (response.ok) {
        // console.log(res)
        setData(res.data);
        setLoading(false);
      } else {
        console.log('Failed to fetch users');
      }
    } catch (error) {
      console.log('Error:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleData();
    console.log("data", data);
  }, [id]);

  console.log(id)
  return loading?<Skeleton/>:(
    <div>
      {<SingleUSerCard data={data}/>}
    </div>
  )
}

export default SingleView