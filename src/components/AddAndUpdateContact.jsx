import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("Name is Required"),
  email:Yup.string().email("Invalid Email").required("Email is Required"),
})

const AddAndUpdateContact = ({ contacts, isOpen, onClose, isUpdate }) => {
  const addContact = async (contacts) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contacts);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contacts, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contacts);
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemaValidation}
          initialValues={
            // isUpdate
              // ? {
              //     name: contacts.name, //error
              //     email: contacts.email,
              //   }
              // : 
              {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            // isUpdate ? updateContact(values, contacts.id) : addContact(values); //error
            addContact(values)
            toast.success("Contact Add Succefully")
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <Field type="email" name="email" className="border h-10" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
              </div>
            </div>

            <button type="submit" className="bg-orange px-3 py-1.5 border self-end">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
