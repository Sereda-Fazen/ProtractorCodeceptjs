
'use strict';

let I;
let Text;

module.exports = {

  _init() {

    Text = {model: this.newTodo};
    I = require('../steps_file.js')();
  },
//home
  
    url: '/',
// search
    dontSee: '#todo-count',
    enter: 'Enter',
    seeTodo: "todo in todos",
//edit
    text: 'write a review',
    newTodo:'newTodo',
//check
    todoComplete: 'todo.completed',


  // insert your locators and methods here



  home(){
    I.amOnPage(this.url);
  },

  searchTodo(){
    I.dontSeeElement(this.dontSee);
    I.fillField({model: this.newTodo}, 'Write a guide');
    I.pressKey(this.enter);
    I.see('Write a guide',{repeater: this.seeTodo});
    I.see('1 item left', this.dontSee);
  },
  
  editTodo(){
    I.createTodo('write a review');
    I.see('write a review', {repeater: this.seeTodo});
    I.doubleClick('write a review');
    I.pressKey(['Control', 'a']);
    I.pressKey('write old review');
    I.pressKey('Enter');
    I.see('write old review', {repeater: this.seeTodo});
  },
  enterTodo(){
    I.fillField({model: this.newTodo }, this.text);
    I.pressKey(this.enter);
    I.createTodo('finish tests');
  },
  expectTodo(){
    I.createTodo('write blogpost');
    I.see(this.text, {repeater: this.seeTodo});
    I.see('3 items left', this.dontSee);
  },

  checkTodo(){
    I.createTodo('my new item');
    I.see('1 item left', this.dontSee);
    I.checkOption({model: this.todoComplete});
    I.see('0 items left', this.dontSee);
  }








};
