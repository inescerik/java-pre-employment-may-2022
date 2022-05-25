import { useEffect, useState } from "react";
function Exercise9() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    await fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        return data;
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <p>
          Fetch the data from this URL:
          <a href="https://random-data-api.com/api/users/random_user?size=10">
            https://random-data-api.com/api/users/random_user?size=10
          </a>
          . This will return a list of 10 random users.
          <br />
          Store it in React state and render a list with the information
          retrieved.
        </p>
        <div className="solution-container">
         
          {users.map((user) => (
            <>
              <ol>Name: {user.first_name}  {user.last_name}
                <ol>
                  <p>Account:</p>
                  <ul>
                    <li>Id: {user.id}    </li>
                    <li>Username:: {user.username}    </li>
                    <li>Password: {user.password} </li>
                    <li >Email: {user.email}  </li>
                    <li >Avatar: {user.avatar}  </li>
                    <li >Gender: {user.gender}  </li>
                    <li >social_insurance_number: {user.social_insurance_number}  </li>
                    <li >date_of_birth: {user.date_of_birth}  </li>


                  </ul>
                  <p>Employment:</p>
                  <ul>
                    <li >title: {user.employment.title}  </li>
                    <li >key_skill: {user.employment.key_skill}  </li>
                  </ul>
                  <p>Adress</p>
                  <ul>
                    <li >city: {user.address.city}</li>
                    <li >street_name: {user.address.street_name}</li>
                    <li >street_address: {user.address.street_address}</li>
                    <li >zip_code: {user.address.zip_code}</li>
                    <li >state: {user.address.state}</li>
                    <li >country: {user.address.country}</li>

                    <ul>
                      <p>Coords:</p>
                      <li >lat: {user.address.coordinates.lat}</li>
                      <li >lng: {user.address.coordinates.lng}</li>
                    </ul>

                  </ul>
                  <p>Credit:</p>
                  <ul>
                    <li >cc_number: {user.credit_card.cc_number}</li>
                  </ul>
                  <p>Subscription:</p>
                  <ul>
                    <li >plan: {user.subscription.plan}</li>
                    <li >status: {user.subscription.status}</li>
                    <li>payment_method: {user.subscription.payment_method}</li>
                    <li >term: {user.subscription.term}</li>

                  </ul>
                  <p> </p>
                </ol>
              </ol>

            </>
          )
          )
          }
          
        </div>
        
      </div>
    </div>
  );
}

export default Exercise9;
