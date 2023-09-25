"use client"
import { useEffect, useState } from 'react'
import ImgMediaCard from '../components/ImgMediaCard'

export default function Blog() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:1337/api/articles?_sort=viewCount:DESC&pagination[start]=1&pagination[limit]=5')
        .then((res) => res.json())
        .then((data) => {
            setData(data.data)
            setLoading(false)
        })
    }, [])
    if (isLoading) return <p>Loading user data...</p>
    if (!data) return <p>No user data found</p>

    return (
        <div className="grid grid-cols-4 items-center justify-center gap-2 ">
            {data && data.map(({attributes}) => (
            <ImgMediaCard attributes={attributes} />
        ))}
     
        </div>
    )
  }