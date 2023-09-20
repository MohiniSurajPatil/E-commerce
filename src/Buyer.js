import './Buyer.css';
import { Message, Icon } from 'semantic-ui-react'
const Buyer=()=>{
    return(
        <div className="Buyer">


<Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Apologies for the inconvenience.</Message.Header>
      <br></br>
      As a new project, we are currently focused on developing the Seller/admin functionality, and we haven't implemented the buyer functionality yet. However, we plan to introduce these features in the near future. Thank you for your understanding.
       
    </Message.Content>
  </Message>
             </div>
    )
}

export default Buyer;