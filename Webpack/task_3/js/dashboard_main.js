import $ from 'jquery';
import _ from 'lodash';

//modules
import { moduleBody } from './body';
import { moduleFooter } from './footer';
import { moduleHeader } from './header/header';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// button
$('#startButton').on('click', _.debounce(updateCounter, 500));


// call modules
moduleBody();
moduleFooter();
moduleHeader();