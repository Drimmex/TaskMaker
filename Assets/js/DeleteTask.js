// Clase para manejar el botón de reinicio de tareas
class ResetButton {
  constructor() {
    // Obtener el elemento del botón de reinicio por su id
    this.resetBtn = document.getElementById('DeleteTask');
    // Agregar un evento de clic al botón y vincularlo al método de reinicio
    this.resetBtn.addEventListener('click', this.reset.bind(this));
  }

  // Método de reinicio de tareas
  reset() {
    // Mostrar un cuadro de diálogo de confirmación
    const confirmDelete = confirm('¿Estás seguro de que quieres borrar las tareas?');

    // Verificar la respuesta del cuadro de diálogo
    if (confirmDelete) {
      // Recargar la página para borrar las tareas
      location.reload();
      // Mostrar una alerta de que las tareas se han borrado satisfactoriamente
      alert('Las tareas se han borrado satisfactoriamente');
    }
  }
}

// Crear una instancia de la clase ResetButton para manejar el botón de reinicio
const resetButton = new ResetButton();
