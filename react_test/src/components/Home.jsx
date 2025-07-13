import React from 'react'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home