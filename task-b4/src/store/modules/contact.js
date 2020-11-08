// State, Getters, Actions, Mutations
// Make request to API
import axios from "axios";

// Global state of application
const state = {
  // Contact format: _id, name, email, phone, gender, create_date
  contacts: [],
};
// Way to get information from state
const getters = {
  allContacts: (state) => state.contacts,
};
// Get response and call mutation (actions take in an object)
const actions = {
  async deleteContact({ commit }, contact_id) {
    const values = {
      contact_id: contact_id,
    };
    const response = await axios.delete(`/api/contacts/${contact_id}`, values);
    const status = response.data.status;
    if (status === "success") {
      commit("deleteContact", contact_id);
    }
  },
  // Use commit to call mutation
  async fetchContacts({ commit }) {
    axios.get("/api/contacts").then((response) => {
      commit("setContacts", response.data.data);
    });
  },
  async addContact({ commit }, contact) {
    const values = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      gender: contact.gender,
    };
    const response = await axios.post("/api/contacts", values);
    const data = response.data.data;
    const contact_id = data._id;
    const name = data.name;
    const email = data.email;
    const gender = data.gender;
    const phone = data.phone;
    const create_date = data.create_date;
    // Call mutation to store new contact
    commit("newContact", {
      _id: contact_id,
      name: name,
      email: email,
      gender: gender,
      phone: phone,
      create_date: create_date,
    });
  },
  async editContact({ commit }, contact) {
    const contact_id = contact._id;
    const response = await axios.put(`/api/contacts/${contact_id}`, contact);
    if (response.status === 200) {
      commit("updateContact", contact);
    }
  },
};
// Used to change state
const mutations = {
  setContacts: (state, contacts) => {
    state.contacts = contacts;
  },
  newContact: (state, contact) => {
    state.contacts.unshift(contact);
  },
  deleteContact: (state, id) => {
    state.contacts = state.contacts.filter((contact) => contact._id !== id);
  },
  updateContact: (state, contact) => {
    state.contacts = state.contacts.map((obj) => {
      if (obj._id === contact._id) {
        return {
          ...contact,
          create_date: obj.create_date,
        };
      }
      return obj;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
