import './style.css'

  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const ul = document.getElementById('ul');

  const todos = JSON.parse(localStorage.getItem('todos'));

  if (todos) {
    todos.forEach(todo => {
      add(todo);
    })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();    
    add();
  });

  function add(todo) {
    let todoTxte = input.value;

    if (todo) {
      todoTxte =todo.text;
    }
    
    if (todoTxte) {
      const li = document.createElement("li");
      li.innerText = todoTxte
      li.classList.add("list-group-item");

      if (todo && todo.completed) {
        li.classList.add("text-decoration-line-through");
      }
      
      li.addEventListener('contextmenu' , (e) => {
        e.preventDefault();
        li.remove();
        saveDate();
      });

      li.addEventListener('click', () => {
        li.classList.toggle("text-decoration-line-through")
        saveDate();
      });

      li.addEventListener('dblclick', () => {
        console.log("dblclick");
      })
    

      ul.appendChild(li);
      input.value = "";
      saveDate();
    }
  };


  function saveDate () {
    const lists = document.querySelectorAll("li");
    let todos = [];

    lists.forEach(list => {
      let todo = {
        text: list.innerText,
        completed: list.classList.contains("text-decoration-line-through")
      };
      todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }


  document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
