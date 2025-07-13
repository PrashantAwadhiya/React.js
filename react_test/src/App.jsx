import React, { useState } from 'react'
import axios from 'axios'
import image from './pages/image'

const App = () => {

  const [data, setdata] = useState([])

  const fetchData = async () => {
    const arr = await axios.get('https://picsum.photos/v2/list')
    console.log(arr.data)
    setdata(arr.data)
  }

  const openimg = (item) => {
    window.open(item.download_url)
    
  }



  return (
    <div>
       <div className='p-5'>
      <button
       className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
       onClick={fetchData}
       >Fetch Images</button>
       <div className='mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {data.map((item) => (
            <div key={item.id}>
              <img onClick={() =>{
                openimg(item)
              }}
              src={item.download_url} alt='image' className='my-2' />
            </div>
          ))}
          </div>
       </div>
       </div>
    </div>
  )
}

export default App