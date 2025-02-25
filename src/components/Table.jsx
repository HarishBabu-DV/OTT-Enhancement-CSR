import React from 'react'
import { Link } from 'react-router'

const Table = ({moviesList}) => {
  return (
    <table className='w-full border-collapse'>
    
        <thead>
          <tr className='bg-[#f2f2f2] border-t-1 border-[#dddddd]'>
            <th className='py-3'>Name</th>
            <th className='py-3'>Id</th>
            <th className='py-3'>Created By</th>
            <th className='py-3'>Duration</th>
            <th className='py-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          moviesList.map((movie,index)=>(
            <tr key={index} className='bg-[#fcfcfb]'>
              <td className='py-3 text-center border-b-1 border-gray-300'>{movie.name}</td>
              <td className='py-3 text-center border-b-1 border-gray-300'>{movie.id}</td>
              <td className='py-3 text-center border-b-1 border-gray-300'>{movie.createdBy}</td>
              <td className='py-3 text-center border-b-1 border-gray-300'>{movie.duration}</td>
              <td className='py-3 text-center border-b-1 border-gray-300 space-x-1'>
                <Link className='bg-[#2b2b2b] text-white px-5 py-1.5 rounded-lg' to={`/admin/movies/${movie._id}`}>View</Link>
                <Link className='bg-[#2b2b2b] text-white px-5 py-1.5 rounded-lg'>Edit</Link>
                <Link className='bg-[#2b2b2b] text-white px-5 py-1.5 rounded-lg'>Delete</Link>
              </td>
            </tr>
          ))
        }               
        </tbody>
    </table>
  )
}

export default Table