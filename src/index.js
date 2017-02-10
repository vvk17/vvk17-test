import './index.css';
import numeral from 'numeral';
import {getUsers, deleteUser} from './api/userApi';

const courseValue = numeral(300).format('$0,0.00');
// debugger;    //eslint-disable-line no-debugger
console.log(`I would not pay even ${courseValue} for this interesting course`); //eslint-disable-line no-console

// Populate table of users via API call
getUsers().then ( result => {
  let usersBody = "";

  result.forEach (user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from (deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser (element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
