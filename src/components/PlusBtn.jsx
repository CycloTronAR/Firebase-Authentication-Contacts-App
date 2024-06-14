import {AiFillPlusCircle} from 'react-icons/ai'

const PlusBtn = ({onOpen}) => {
  return (
    
    <AiFillPlusCircle onClick={onOpen}  className='text-5xl text-white cursor-pointer'/>
   
    
  )
}

export default PlusBtn