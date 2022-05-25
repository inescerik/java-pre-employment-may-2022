function Exercise7() {
function submitForm(){
  const firstName=document.getElementById("FirstName").value;
  const lastName=document.getElementById("LastName").value;
  alert(`Hello, ${firstName} ${lastName}!`);

}
  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">

          <form>
            <input  type="text" placeholder="Insert your first name here" name="FirstName" id="FirstName"/>
            <input  type="text" placeholder="Insert yor last name here" name="LastName" id="LastName"/>
            <button id="buttonEx7" type="submit" onClick={submitForm}   >Greet me</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;
