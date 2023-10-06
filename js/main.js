




const { createApp } = Vue;

createApp({
  data() {
    return {

      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',

      arrEmails: [],

      emails: 10,
    }
  },
  methods: {
    getApi(emails){
      for (let i = 0; i < emails; i++) {

        axios.get(this.apiUrl)
          .then((response) => {
           
            this.arrEmails.push(response.data.response);
          })
          .catch((error) => {
            console.log(error)
          })

        
      }
    }
  },

  
  mounted() {
    this.getApi(this.emails);
  },

}).mount("#app");