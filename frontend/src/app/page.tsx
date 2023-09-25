"use client"
import { useEffect, useState } from 'react'
import ImgMediaCard from './components/ImgMediaCard';


export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:1337/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [])
  if (isLoading) return <p>Loading user data...</p>
  if (!data) return <p>No user data found</p>

  
  // console.log(data);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="grid grid-cols-4 items-center justify-center gap-2 ">
       {data && data.map(({attributes}) => (
        <ImgMediaCard attributes={attributes} />
      ))}
    
    </div>
  )
}

