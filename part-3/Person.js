function Person(name, age, hobbies)
{
    const message = age >= 18 ? "Please go vote" : "You must be 18";
    const hobbieslist = hobbies.map(h=> <li>{h}</li>)
    return(
    <div>
        <p>Learn some information about this person.</p>
        <div> Name: {name.slice(0, 6)}</div>
        <h3> {message} </h3>
        <div>
            Hobbies:
            <ul>
                {hobbieslist}
            </ul>
        </div>
        
    </div>
    );
}