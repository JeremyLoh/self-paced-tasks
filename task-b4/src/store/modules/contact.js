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
  // Use commit to call mutation
  async fetchContacts({ commit }) {
    axios.get("/api/contacts").then((response) => {
      console.log(JSON.stringify(response.data));
      // Call mutation
      commit("setContacts", response.data.data);
    });
  },
};
// Used to change state
const mutations = {
  setContacts: (state, contacts) => {
    return (state.contacts = contacts);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
