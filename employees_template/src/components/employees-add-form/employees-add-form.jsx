import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  state = {
      name: "",
      salary: "",
    };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Имя"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Зарплата"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
