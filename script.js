let submit = document.getElementById('submit');
let output = document.getElementById('output');

submit.addEventListener("click", () => {
    let startdate = new Date(document.getElementById("startdate").value)
    let enddate = new Date(document.getElementById("enddate").value)


    if (startdate.getTime() && enddate.getTime()) {
        let timeDiff = startdate.getTime() - enddate.getTime();

        let dayDiff = Math.abs(timeDiff / (1000 * 3600 * 24));
        output.innerHTML = `<span>${dayDiff}</span> Days`;
    }

})
