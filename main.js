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

  /**Создание списка
   * задач
   */

  function createTodoItem(name){
    let item = document.createElement('li');
    // Помещаем кнопки в buttongroup

    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // Устанавливаем стили для элементов списка, а так же
    // для размещения в его правой части с помощью flex.

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-item-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent ='Удалить';

    // Вкладываем кнопки в отдельный элемент,
    // чтобы они объединились в один блок

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    }

  }

  document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('todo-app');

    let todoApptitle = createAppTitle('Список дел');
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();


    container.append(todoApptitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    /**Браузер создает событие submit
     * на форме по нажатию на наEnter
     * или на кнопку создания дела
     */
    todoItemForm.form.addEventListener('submit', todoSubmit);
    function todoSubmit(e){
      e.preventDefault();
      if(!todoItemForm.input.value){
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value);
      todoItem.doneButton.addEventListener('click', function(){
        todoItem.item.classList.toggle('list-group-item-success');
      });
      todoItem.deleteButton.addEventListener('click', function(){
        if(confirm('Вы уверены?')){
          todoItem.item.remove();
        }
      });
      todoList.append(todoItem.item);
      todoItemForm.input.value = '';
    }


  } );
 })();
