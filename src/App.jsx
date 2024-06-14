import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PlusBtn from "./components/PlusBtn";
import SearchBar from "./components/searchBar";
import Contactinfo from "./components/Contactinfo";


import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
// import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";


import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/ReactToastify.css"
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contactData, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} =useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {

        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) =>{
          const contactsLists = snapshot.docs.map((doc) =>{
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
  
          setContacts(contactsLists);
          return contactsLists;
        })
        

      } catch (error) {}
    }; 
    getContacts();
  }, []);

  const filterContacts = (e) =>{
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) =>{
      const contactsLists = snapshot.docs.map((doc) =>{
        return {
          id: doc.id,
          ...doc.data(),
        };
      })

      const filteredContacts = contactsLists.filter(contacts => contacts.name.toLowerCase().includes(value.toLowerCase()))

      setContacts(filteredContacts);
      return filteredContacts;
    })
  }

  return (
    <>
    <div className="mx-auto max-w-[400px]">
      <Navbar />
      <div className="flex gap-2">
        <SearchBar filterContacts={filterContacts} />
        <PlusBtn onOpen={onOpen} />
      </div>

      {contactData.length <= 0 ? <NotFoundContact /> :<Contactinfo contacts={contactData}/>}
      

    </div>
    <AddAndUpdateContact contacts={contactData} isOpen={isOpen} onClose={onClose}/>
    <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;
