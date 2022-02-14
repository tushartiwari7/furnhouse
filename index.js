console.log("hello");
const sidebar = document.getElementById("sidebar");

const openSidebar = () => sidebar.style.left = '0';
const closeSidebar = () => sidebar.style.left = '-25rem';

document.getElementById("hamburger").addEventListener("click",openSidebar);
document.getElementById("btn-close").addEventListener("click",closeSidebar);
