let date = new Date();
let year = date.getFullYear();


document.querySelector('p').innerHTML = year + ' &copy;'; 

let currentdate = document.lastModified;

document.querySelector('div').innerHTML = 'Last updated: ' + currentdate;

document.querySelector('div').innerHTML = `Last updated: ${currentdate}`;

