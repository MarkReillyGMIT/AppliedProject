
    import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contacts.weather[0].description}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contacts.coordinate}</h6>
                <p class="card-text">{contacts.temp}</p>
              </div>
            </div>
        </div>
      )
    };

    export default Contacts