import ContactSearch from "../components/ContactSearch";
import GetContacts from "../components/GetContacts";

const Contacts = () => {
  return (
    <div className='background'>
        <ContactSearch />
        <br/>

        {/* <div className='display'>
          <div className='card'>
            <GetContacts />
          </div>

          <br/>

        </div> */}
        
      </div >
  );
};

export default Contacts;
