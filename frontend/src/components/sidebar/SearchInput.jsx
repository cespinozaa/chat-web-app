import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className='input input-bordered outline-none rounded-full'/>
        <button type='submit' className='btn btn-circle bg-orange-400 border-orange-400 text-white hover:bg-orange-500 hover:border-orange-500'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput



/*
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className='input input-bordered outline-none rounded-full'/>
        <button type='submit' className='btn btn-circle bg-orange-400 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput
*/