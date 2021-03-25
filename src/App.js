import React from "react";
import "./App.css";
import "./animations.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ConatctList";
import { v4 } from "uuid";
import Filter from "./components/Filter/Filter";
import Layout from "./components/Layout/Layout";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
    alert: false,
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  deleteAlert = () => [
    setTimeout(() => {
      this.setState({
        alert: false,
      });
    }, 3000),
  ];
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (contact) => {
    let newContact = {
      name: contact.name,
      number: contact.number,
      id: v4(),
    };
    if (
      this.state.contacts.find(
        (el) => el.name === newContact.name && el.number === newContact.number
      )
    ) {
      this.setState({
        alert: true,
      });
      this.deleteAlert();
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };
  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => {
          if (contact.id === id) {
            return false;
          } else {
            return true;
          }
        }),
      };
    });
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const filterContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Layout title="Phonebook" />
        <ContactForm submit={this.handleSubmit} />
        <Filter filterChange={this.handleChange} filterValue={filter} />
        <CSSTransition
          classNames="fade"
          timeout={250}
          in={contacts.length > 0}
          unmountOnExit
        >
          <ContactList
            deleteFunction={this.handleDelete}
            list={filterContacts}
          />
        </CSSTransition>

        <Alert alert={alert} />
      </>
    );
  }
}

export default App;
