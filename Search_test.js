
Feature('Search Todo');

Before((I, searchPage) => {
  searchPage.home();
});

Scenario('create todo item', (I,searchPage) => {
  searchPage.searchTodo();
});

Scenario('edit todo', (I,searchPage) => {
  searchPage.editTodo();
});

Scenario('enter todo', (I, searchPage) => {
  searchPage.enterTodo();
  searchPage.expectTodo();
});

Scenario('check todo item', (I, searchPage) => {
  searchPage.checkTodo();
});

