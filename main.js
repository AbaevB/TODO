 (function(){
  /**Создаем и
   * возвращаем заголовок приложения
   */
  function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  /**
   * Создаем и возвращаем
   * форму для создания
   * дела
   */
  function createTodoItemForm(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    /**
     * <form class="input-group mb-3">
     *  <input class="form-control" plceholder="Введите название нового дела">
        *  <div class="input-group-append">
        *     <button class="btn btn-primary">Добавить дело</button>
        *  </div>
     * </form>
     */

    return {
      form,
      input,
      button,
    };
  }



  /**Создаем и возвращаем
   * список элементов.
   */

  function createTodoList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('todo-app');

    let todoApptitle = createAppTitle('Список дел');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoApptitle);
    container.append(todoItemForm.form);
    container.append(todoList);
  } );
 })();
