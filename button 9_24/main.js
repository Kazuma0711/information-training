let count = 0;
function increaseCount(){
    if(count < 6)
        count++;
        document.getElementById("counter").innerText = count;
    if(count == 6)
        count=-5;
        document.getElementById("counter").innerText = count;
}
function herasuCount(){
    if(count > -6)
        count--;
        document.getElementById("counter").innerText = count;
    if(count == -6)
        count=5;
        document.getElementById("counter").innerText = count;
}