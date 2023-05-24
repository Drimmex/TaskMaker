// Declarar WeakMap para almacenar propiedades privadas de la clase
const _private = new WeakMap();

// Declarar la clase Task
class Task {
  constructor(name, date, priority, user, description) {
    // Crear un objeto properties con las propiedades privadas
    const properties = {
      _name: name,
      _date: date,
      _priority: priority,
      _user: user,
      _description: description,
    };
    // Almacenar el objeto properties en el WeakMap usando 'this' como clave
    _private.set(this, { properties });
  }

  // Getters de la clase Task
  get name() {
    return _private.get(this).properties['_name'];
  }

  get date() {
    return _private.get(this).properties['_date'];
  }

  get priority() {
    return _private.get(this).properties['_priority'];
  }

  get user() {
    return _private.get(this).properties['_user'];
  }

  get description() {
    return _private.get(this).properties['_description'];
  }

  // Setters de la clase Task
  set name(newName) {
    return (_private.get(this).properties['_name'] = newName);
  }

  set date(newDate) {
    return (_private.get(this).properties['_date'] = newDate);
  }

  set priority(newPriority) {
    return (_private.get(this).properties['_priority'] = newPriority);
  }

  set description(newDescription) {
    return (_private.get(this).properties['_description'] = newDescription);
  }

  set user(newUser) {
    return (_private.get(this).properties['_user'] = newUser);
  }
}
