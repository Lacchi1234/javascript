function attachEventListener(){
    let count=0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
    console.log("button clicked", count)
    count++
});
}
attachEventListener();