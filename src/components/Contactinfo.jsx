import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const Contactinfo = ({ contacts }) => {
  const {isOpen, onClose, onOpen} =useDisclouse();


  const deleteContact = async (id) =>{
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Succefully")
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    <div className="mt-4 gap-3 flex flex-col">
      {contacts.map((contacts) => (
        <div
          key={contacts.id}
          className="bg-yellow flex justify-between items-center p-2 rounded-lg"
        >
          <div className="flex gap-1 items-center mr-0 p-0">
            <HiOutlineUserCircle className="text-orange text-4xl mr-2" />
            <div className="">
              <h2 className="font-medium">{contacts.name}</h2>
              <p className="text-sm">{contacts.email}</p>
            </div>
          </div>

          <div className="flex text-2xl">
            <RiEditCircleLine onClick={onOpen} className="mr-2 cursor-pointer" />
            <IoMdTrash onClick={() => deleteContact(contacts.id)} className="text-orange mr-2 cursor-pointer" />
          </div>
        </div>
        
        
      ))}
    </div>
    <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default Contactinfo;
