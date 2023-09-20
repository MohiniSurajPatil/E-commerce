import { Grid } from 'semantic-ui-react'

import './Contactus.css'


const Contactus=()=>{
    return(
        <div className='ContactUs'>
               <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
       <h2>Customer Support : </h2> <p>
You can reach us by phone during our business hours at <b>7897899877</b>. Our team is available from <b>9 AM </b>to <b>9 PM</b>.<br></br> Alternatively, you can send us an email at <b>support@Sanwarcustomisedgifts.com</b>, and we will respond to your query as soon as possible.</p>
      </Grid.Column>
      <Grid.Column width={8}>
     <h2>Social Media : </h2> <p> 
Stay connected with us through our social media channels. We are active on platforms, where we share updates, new product releases, and special promotions. </p> <h5>Facebook : Sanwar_customised_gifts</h5>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <h2>Feedback and Suggestions : </h2>
      <p>
If you have any suggestions, ideas, or feedback, we would love to hear them.<br></br> Please email us at <b>suggestion@Sanwarcustomisedgifts.com</b> with your thoughts, and we will carefully consider your input as we continue to grow and evolve.</p>
      </Grid.Column>
      <Grid.Column width={8}>
        <h2>Address : </h2>
      <p>
If you prefer traditional mail, you can send us letters or packages at the following address:<br></br>

<b>Ghansoli,Navi Mumbai
MH 400701
India</b></p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
        </div>
    );
}

export default Contactus;