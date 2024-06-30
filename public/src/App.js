import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Aquí puedes manejar el inicio de sesión
        console.log('Usuario:', this.state.username);
        console.log('Contraseña:', this.state.password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre de usuario:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </label>
                <button type="submit">Iniciar Sesión</button>
            </form>
        );
    }
}

ReactDOM.render(<LoginForm />, document.getElementById('loginSection'));