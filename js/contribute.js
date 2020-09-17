

function donate(){
    console.log("Donate clicked")
    alert("donate clicked")
    document.getElementById("right-half").classList="c1"
    document.getElementById("right-half").innerHTML=`
    <h3> Donate Model Form </h3>
    <input type="text" placeholder="Name" class="rectangle14"></input>
                <input type="email" class="rectangle15" placeholder="Email"></input>
                <input type="text" class="rectangle16" placeholder="Message"></input></br>
                <button class="rectangle17">SEND</button>
    
    `;

}

function fundraise()
{
    console.log("fundraise clicked")
    alert("fundraise clicked")

    document.getElementById("right-half").classList="c1"
    document.getElementById("right-half").innerHTML=`
    <h3> Fundraise Model Form </h3>
    <input type="text" placeholder="Name" class="rectangle14"></input>
                <input type="email" class="rectangle15" placeholder="Email"></input>
                <input type="text" class="rectangle16" placeholder="Message"></input></br>
                <button class="rectangle17">SEND</button>
    
    `;
}

function volunteer()
{
    console.log("volunteer clicked")
    alert("volunteer clicked")

    document.getElementById("right-half").classList="c1"
    document.getElementById("right-half").innerHTML=`
    <h3> Volunteer Model Form </h3>
    <input type="text" placeholder="Name" class="rectangle14"></input>
                <input type="email" class="rectangle15" placeholder="Email"></input>
                <input type="text" class="rectangle16" placeholder="Message"></input></br>
                <button class="rectangle17">SEND</button>
    
    `;
}

function joinev(){
    console.log("Join event Clicked")
    alert("Join event clicked")
    document.getElementById("right-half").classList="c1"
    document.getElementById("right-half").innerHTML=`
    <h3> Join event Model Form </h3>
    <input type="text" placeholder="Name" class="rectangle14"></input>
                <input type="email" class="rectangle15" placeholder="Email"></input>
                <input type="text" class="rectangle16" placeholder="Message"></input> </br>
                <button class="rectangle17">SEND</button>
    
    `;
}