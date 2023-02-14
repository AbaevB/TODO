 (function(){
  /**Создаем и
   * возвращаем заголовок приложения
   */
  function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = tile;
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
    let buuttonWrapper = document.createElement('div');
    let button = createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buuttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    buuttonWrapper.append(button);
    form.append(input);
    form.append(buuttonWrapper);

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

  }

 });
