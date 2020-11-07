// State, Getters, Actions, Mutations
// Make request to API
import axios from "axios";

// Global state of application
const state = {
  contacts: [
    {
      contact_id: "1",
      name: "apple",
      email: "email",
      gender: "gender",
      phone: "phone number",
      create_date: {
        type: Date.now,
      },
    },
    {
      contact_id: "2",
      name: "applehah",
      email: "email",
      gender: "gender",
      phone: "phone number",
      create_date: {
        type: Date.now,
      },
    },
  ],
};
// Way to get information from state
const getters = {
  allContacts: (state) => state.contacts,
};
// Get response and call mutation (actions take in an object)
const actions = {
  async deleteContact({ commit }, contact) {
    console.log(commit);
    console.log(JSON.stringify(contact));
  },
  // Use commit to call mutation
  async fetchContacts({ commit }) {
    axios.get("/api/contacts").then((response) => {
      console.log(JSON.stringify(response.data));
      // Call mutation
      commit("setContacts", response.data.data);
    });
  },
  async addContact({ commit }, contactInfo) {
    const values = {
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      gender: contactInfo.gender,
    };
    const response = await axios.post("/api/contacts", values);
    const data = response.data.data;

    console.log(response.data.data);

    const status = data.status;
    if (status === "success") {
      const contactInfo = data.data;
      const contact_id = contactInfo._id;
      const name = contactInfo.name;
      const email = contactInfo.email;
      const gender = contactInfo.gender;
      const phone = contactInfo.phone;
      const create_date = contactInfo.create_date;
      // Call mutation to store new contact
      commit("newContact", {
        contact_id,
        name,
        email,
        gender,
        phone,
        create_date,
      });
    }
  },
};
// Used to change state
const mutations = {
  setContacts: (state, contacts) => {
    return (state.contacts = contacts);
  },
  newContact: (state, contact) => {
    state.contacts.unshift(contact);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
