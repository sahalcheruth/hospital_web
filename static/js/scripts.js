function openSidebar(){
    document.getElementById('sidebar').style.width="250px";
    
    
   

}
function closeSidebar(){
    document.getElementById('sidebar').style.width="0px";
    
}
document.getElementById("open-btn").addEventListener("click", openSidebar);
document.querySelector(".close-btn").addEventListener("click", closeSidebar);

