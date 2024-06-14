import {FiSearch} from 'react-icons/fi';

const SearchBar = ({filterContacts}) => {

  return (
    <div className="flex flex-grow relative items-center ">
    <FiSearch className='ml-1 text-white text-3xl absolute'/>
        <input onChange={filterContacts} type="text" className="border border-white bg-transparent rounded-md
        h-10
        flex-grow  text-white pl-9" />
    </div>
  )
}

export default SearchBar