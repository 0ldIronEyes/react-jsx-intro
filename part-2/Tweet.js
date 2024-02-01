function Tweet({username, name, date, message})
{
    return ( 
        <div class="tweet">
            <span id="username">{username} </span>
            <span id="namespan"> {name}</span>
            <span id="date"> {date} </span>
            <div id="message"> {message} </div>
        </div>
    );
}