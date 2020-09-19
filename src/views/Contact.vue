<template>
  <form id="app" @submit="checkForm" method="post">
    <div class="md-layout">
      <div class="md-layout-item md-size-15"></div>
      <div class="md-layout-item md-size-70 contact md-elevation-3">
        <div class="md-layout">
          <div class="md-layout-item md-size-35 md-small-size-0"></div>
          <div class="md-layout-item md-size-30 md-small-size-100">
            <p v-if="errors.length">
              <ul>
                <li class="no-dots" v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
            </p>
            <p v-if="success === true">
              Message sent. Thank you.
            </p>
          </div>
          <div class="md-layout-item md-size-35 md-small-size-0"></div>
        </div>
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
        <input type="hidden" id="botbuster" name="botbuster" v-model="botbuster">
        <md-button type="submit" value="Submit" class="md-raised right-align">Submit</md-button>
      </div>
      <div class="md-layout-item md-size-30"></div>
    </div>
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
      checkForm: function(e) {
        e.preventDefault();
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
        else {
          const emailIsValid = this.validateEmail(this.email);
          if(!emailIsValid) {
            this.errors.push('Valid Email Address required.');
          }
        }
        if (!this.subject) {
          this.errors.push('Subject required.');
        }
        if (!this.message) {
          this.errors.push('Message required.');
        }

        //Call function to send email
        if(this.errors.length === 0) {
          const config = {
            headers: {
              'Content-Type': "application/json"
            }
          };

          const data = {
            name: this.name, 
            email: this.email, 
            subject: this.subject, 
            message: this.message
          };
          
          this.sendEmail(data, config).then((success) => {
            if(success === false) {
              this.errors.push('Could not send message.')
            }
            else {
              this.success = true;
              this.name = null;
              this.email = null;
              this.subject = null;
              this.message = null;
            }
          });
        }
        else {
          this.success = false;
          return this.success;
        }
      },
      sendEmail: async function(data, config) {
        let success = false;
        await this.$axios
          .post('https://us-central1-randdwebsite.cloudfunctions.net/send-emails', data, config)
          .then(function(response) {
            if(response.status === 200) {
              success = true;
              return success;
            }
            else {
              return success;
            }
          })
          .catch(function() {
            success = false;
            return success;
          });
        return success;
      },
      validateEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
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
  padding: 3%;
  margin-top: 6%;
  margin-bottom: 12%;
}
.no-dots {
  list-style: none
}
.right-align {
  margin-left: auto;
  margin-right: auto;
  float:right;
}
</style>