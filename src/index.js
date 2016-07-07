
// change require to es6 import style
import $ from 'jquery';
import './style.scss'

let secs = 0;
$('#main').html(`You have been this page for ${secs} seconds`);
function countSecs() {
  secs++;
  $('#main').html(`You have been this page for ${secs} seconds`);
}

setInterval(countSecs, 1000);
