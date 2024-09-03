import {loadNotes, onNewBotResponse, onNewNote, onSelected } from './socket.js';
import { onHandleSubmit, renderNotes, appendNote, fillForm, appendBotResponse } from './ui.js';
onNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm);
onNewBotResponse(appendBotResponse);
const noteForm= document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit);