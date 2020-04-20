<template>
  <form id="app" @submit="checkForm" method="post" class="contact">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </p>
    <p v-if="success === true">
      <b>Message sent. Thank you.</b>
    </p>
    <div>
      <md-field>
        <label>Name</label>
        <md-input v-model="name"></md-input>
      </md-field>
    </div>
    <div>
      <md-field>
        <label>Email Address</label>
        <md-input v-model="email"></md-input>
      </md-field>
    </div>
    <div>
      <md-field>
        <label>Subject</label>
        <md-input v-model="subject"></md-input>
      </md-field>
    </div>
    <div>
      <md-field>
        <label>Message</label>
        <md-textarea v-model="message" md-autogrow></md-textarea>
      </md-field>
    </div>
    <p>
      <input type="submit" value="Submit">
    </p>
    <input type="hidden" id="botbuster" name="botbuster" v-model="botbuster">
  </form>
</template>

<script>
  export default {
    name: 'Contact',
    data: function() {
      return {
        errors: [],
        name: null,
        email: null,
        subject: null,
        message: null,
        botbuster: null,
        success: null
      }
    },
    methods: {
      checkForm: function (e) {
        if(this.botbuster !== null) {
          this.success = false;
          return this.success;
        }

        this.errors = [];

        if (!this.name) {
          this.errors.push('Name required.');
        }
        if (!this.email) {
          this.errors.push('Email Address required.');
        }
        if (!this.subject) {
          this.errors.push('Subject required.');
        }
        if (!this.message) {
          this.errors.push('Message required.');
        }

        //Call function to send email
        if(this.errors.length === 0) {
          e.preventDefault();
          
          //TODO: call email function
          this.$axios
          .post('https://api.reunitedanddivided.com/send-email', {
            name: this.name, 
            email: this.email, 
            subject: this.subject, 
            message: this.message
          })
          .then(function(response) {
            alert(JSON.stringify(response))
            if(response === true) {
              this.name = null;
              this.email = null;
              this.subject = null;
              this.message = null;

              this.success = true;
              return this.success;
            }
            else {
              this.errors.push('Could not send message.')
              this.success = false;
              return this.success;
            }
          })
          .catch(function(e) {
            console.log(e)
          });
        }
        else {
          this.success = false;
          return this.success;
        }
      }
    }
  }
</script>

<style scoped>
.person-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;
}
.about {
  padding: 4%;
  padding-bottom: 6%;
}
.description {
  padding-top: 3%;
  padding-bottom: 3%;
  text-align:center;
}
.contact {
  border-style: solid;
  border-color: orange;
  border-radius: 16px;
  border-width: .5px;
  padding: 1%;
  margin-top: 6%;
  margin-bottom: 12%;
}
</style>