import GetContacts from "../components/GetContacts";

const Contacts = () => {
  return (
    <div className='background'>
        <div className='display'>
        <div className='card1'>
          <GetContacts />
        </div>

        <br/>

        <div className='card2'>
          <GetContacts />
        </div>

        <br/>

        <div className='card3'>
          <GetContacts />
        </div>

        <br/>

        <div className='card1'>
          <GetContacts />
        </div>

        <br/>

        <div className='card2'>
          <GetContacts />
        </div>

        <br/>

        <div className='card3'>
          <GetContacts />
        </div>

        </div>
        
      </div >
  );
};

export default Contacts;
