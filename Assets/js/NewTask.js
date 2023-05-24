// Definición de la clase NewTask que hereda de la clase Task
class NewTask extends Task {
  constructor(name, date, priority, user, description) {
    super(name, date, priority);
    this.user = user;
    this.description = description;
  }
}

// Función para crear una tarea nueva
function CreateTask() {
  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('priority').value;
  const user = document.getElementById('user').value;
  const description = document.getElementById('description').value;

  // Validar que todos los campos estén completos
  if (name === '' || date === '' || priority === '' || user === '') {
    alert('Los campos con asteriscos son importantes, rellenalos, por favor 👌');
    return;
  }

  // Crear una nueva instancia de NewTask con los valores obtenidos
  const task1 = new NewTask(name, date, priority, user, description);
  console.log(task1, task1.user);

  // Obtener la referencia a la tabla
  const table = document.getElementById('taskTable');
  // Insertar una nueva fila en la tabla
  const row = table.insertRow();

  // Crear las celdas para cada campo de la tarea
  const nameCell = row.insertCell(0);
  const dateCell = row.insertCell(1);
  const priorityCell = row.insertCell(2);
  const userCell = row.insertCell(3);
  const descriptionCell = row.insertCell(4);
  const modifyCell = row.insertCell(5);

  // Asignar los valores de la tarea a las celdas correspondientes
  nameCell.innerHTML = task1.name;
  dateCell.innerHTML = task1.date;
  priorityCell.innerHTML = task1.priority;
  userCell.innerHTML = task1.user;
  descriptionCell.innerHTML = task1.description;

  // Crear botones para descargar, modificar y borrar la tarea
  const downloadButton = document.createElement('button');
  downloadButton.innerHTML = 'Descargar';
  downloadButton.addEventListener('click', () => {
    downloadTask(task1);
  });

  const modifyButton = document.createElement('button');
  modifyButton.innerHTML = 'Modificar';
  modifyButton.addEventListener('click', () => {
    ModifyTask(row, task1);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Borrar';
  deleteButton.addEventListener('click', () => {
    deleteTask(row);
  });

  // Agregar los botones a la celda de modificaciones
  modifyCell.appendChild(modifyButton);
  modifyCell.appendChild(downloadButton);
  modifyCell.appendChild(deleteButton);
}

// Función para descargar una tarea en formato de texto
function downloadTask(task) {
  // Construir el contenido de la tarea en formato de texto
  var content =
    'Tarea: ' +
    task.name +
    '\n' +
    'Fecha: ' +
    task.date +
    '\n' +
    'Descripción: ' +
    task.description +
    '\n' +
    'Prioridad: ' +
    task.priority +
    '\n' +
    'Usuario: ' +
    task.user;

  // Crear un enlace de descarga
  var link = document.createElement('a');
  link.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
  );
  link.setAttribute('download', task.name + '.txt');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Función para modificar una tarea
function ModifyTask(row, task) {
  // Obtener los valores actuales de la tarea
  const name = task.name;
  const date = task.date;
  const priority = task.priority;
  const description = task.description;
  const user = task.user;

// Mostrar una alerta indicando cómo modificar los campos
  alert('Para modificar, debes ingresar la información mediante los cuadros emergentes y luego dar click en "aceptar", solo da click en "aceptar". 😊');

  // Solicitar al usuario los nuevos valores y almacenarlos
  const newName = prompt('Nuevo nombre:', name);
  const newDate = prompt('Nueva fecha:', date);
  const newPriority = prompt('Nueva prioridad:', priority);
  const newUser = prompt('Nuevo usuario:', user);
  const newDescription = prompt('Nueva descripción:', description);

  // Actualizar los valores de la tarea con los nuevos valores ingresados
  task.name = newName;
  task.date = newDate;
  task.priority = newPriority;
  task.description = newDescription;
  task.user = newUser;

  // Actualizar los valores en las celdas de la tabla
  const nameCell = row.cells[0];
  const dateCell = row.cells[1];
  const priorityCell = row.cells[2];
  const userCell = row.cells[3];
  const descriptionCell = row.cells[4];

  nameCell.innerHTML = newName;
  dateCell.innerHTML = newDate;
  priorityCell.innerHTML = newPriority;
  descriptionCell.innerHTML = newDescription;
  userCell.innerHTML = newUser;
}

// Función para borrar una tarea
function deleteTask(row) {
  const table = document.getElementById('taskTable');
  table.deleteRow(row.rowIndex);
}
