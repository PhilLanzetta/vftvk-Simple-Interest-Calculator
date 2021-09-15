function updateRate() {
    //get current rate value
    const rateval = document.getElementById("rate").value;
    //display current rate value
    document.getElementById("rate_val").innerText = rateval + '%';
};


function compute() {
    //define variables from html elements
    const principal = document.getElementById("principal").value;

    const rate = document.getElementById("rate").value;

    const years = document.getElementById("years").value;

    //use variables to calculate interest
    const interest = (principal * years * rate / 100).toFixed(2);

    //use date object to calculate future year
    const year = new Date().getFullYear() + parseInt(years);

    //form validation and submission
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
    document.getElementById("result").innerHTML = `<p>
        If you deposit <mark>$${principal}</mark>,<br />
        at an interest rate of <mark>${rate}%</mark>. <br />
        You will receive an amount of <mark>$${interest}</mark>,<br />
        in the year <mark>${year}</mark>
    </p>`

    }

}
