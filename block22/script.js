// 1. Learn how to use asynchronous JavaScript to interact with an API.
// 2. Manipulate and traverse the DOM to render data. 

// API Endpoints
// For this lab, you will be using the following API endpoints:

// Parties
// Method	Endpoint	Description
// GET	/api/parties	Get all parties
// GET	/api/parties/:id	Get a single party
// POST	/api/parties	Create a new party
// PUT	/api/parties/:id	Update a party
// DELETE	/api/parties/:id	Delete a party
// Guests
// Method	Endpoint	Description
// GET	/api/guests	Get all guests
// GET	/api/guests/:id	Get a single guest
// POST	/api/guests	Create a new guest
// PUT	/api/guests/:id	Update a guest
// DELETE	/api/guests/:id	Delete a guest
// RSVPs
// Method	Endpoint	Description
// GET	/api/rsvps	Get all RSVPs
// GET	/api/rsvps/:id	Get a single RSVP
// POST	/api/rsvps	Create a new RSVP
// PUT	/api/rsvps/:id	Update a RSVP
// DELETE	/api/rsvps/:id	Delete a RSVP



const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

const PARTIES_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/parties';
const GUESTS_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/guests';
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    //receive an array of objects 
    return parties;
  } catch (error) {
    console.log(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.log(error);
  }
};

// delete party
const deleteParty = async (id) => {
  // your code here

  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`, {
        method: 'DELETE',
    });
    const party = await response.json();
    getAllParties();

    // reload the window
    window.location.reload();
} catch (error) {
    console.log(error);
}
};


// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    // fetch party details from server
    const party = await getPartyById(id);
  

    // GET - /api/workshop/guests/party/:partyId - get guests by party id
    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();
    

    // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
    const rsvps = await rsvpsResponse.json();

    // GET - get all gifts by party id - /api/workshop/parties/gifts/:partyId -BUGGY?
    // const giftsResponse = await fetch(`${PARTIES_API_URL}/party/gifts/${id}`);
    // const gifts = await giftsResponse.json();

    // create new HTML element to display party details
    const partyDetailsElement = document.createElement('div');
    partyDetailsElement.classList.add('party-details');
    

    partyDetailsElement.innerHTML = `
            <h2 class="header">${party.name}</h2>
            <p>${party.date}</p>
            <p>${party.time}</p>
            <p>${party.location}</p>
            <p>${party.description}</p>
            <h3>Guests:</h3>
            <ul>
            ${guests
              .map(
                (guest, index) => `
              <li>
                <div>${guest.name}</div>
                <div>${rsvps[index].status}</div>
              </li>
            `
              )
              .join('')}
          </ul>
          


            <button class="close-button">Close</button>
        `;
    const partyElement = document.getElementById(id)
  //  console.log(partyElement)
  //  partyElement.classList.add(party)
    partyContainer.appendChild(partyElement);

    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      partyDetailsElement.remove();
    });
  } catch (error) {
    console.error(error);
  }
};

// render all parties
const renderParties = async (parties) => {
  try {
    partyContainer.innerHTML = '';
    parties.forEach((party) => {
      const partyElement = document.createElement('div');
      partyElement.classList.add('party');
      partyElement.id = party.id
      partyElement.innerHTML = `
                <h2 class = "header">${party.name}</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <button class="details-button" data-id="${party.id}">See Details</button>
                <button class="delete-button" data-id="${party.id}">Delete</button>
            `;
      partyContainer.appendChild(partyElement);
      const detailsElement = document.createElement('div');
      detailsElement.classList.add('hidden');
      detailsElement.id = `details-${party.id}`
      detailsElement.innerHTML = (`
      
      <p class = "details" >${party.description}</p>
      <p class = "details" >${party.date}</p>
      <p class = "details" >${party.time}</p>
      <p class = "details" >${party.location}</p>
    
      <button class="closeButton" data-id="${party.id}">Close</button>`)
      const closeButton = detailsElement.querySelector('.closeButton')
     closeButton.addEventListener('click', async (event) => {event.preventDefault();
      const id = event.target.dataset.id
     const selectElement = document.getElementById(`details-${id}`)
     selectElement.classList.add('hidden')})
      partyContainer.appendChild(detailsElement)
      
      
      // see details
      const detailsButton = partyElement.querySelector('.details-button');
      detailsButton.addEventListener('click', async (event) => {
        // your code here
        //get id from event
        // make a div seeable
        //make the div appear when you press see details
        //see the details of the party 
        event.preventDefault();
        const id = event.target.dataset.id
       const selectElement = document.getElementById(`details-${id}`)
       selectElement.classList.remove('hidden')

      

       
      });

      // delete party
      const deleteButton = partyElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', async (event) => {
        // your code here
        event.preventDefault();
        deleteParty(party.id);

      });
    });
  } catch (error) {
    console.error(error);
  }
};

// init function
const init = async () => {
  // your code here
  try {const parties = await getAllParties();
    renderParties(parties);
    
  } catch (error) {
    console.log(error)
    
  }
  
};

init();
