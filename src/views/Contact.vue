<template>
<form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>

  <div>
    <div>Name</div>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </div>

  <div>
    <div>Email Address</div>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
    >
  </div>

  <div>
    <div>Subject</div>
    <input
      id="subject"
      v-model="subject"
      type="subject"
      name="subject"
    >
  </div>

  <div>
    <div>
      Message
    </div>
    <input
      id="message"
      v-model="message"
      type="message"
      name="message"
    >
  </div>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>

<script>
  import Validation from '../model/validation';

  export default {
    name: 'Contact',
    data: function() {
      return {
        errors: [],
        name: null,
        email: null,
        subject: null,
        message: null
      }
    },
    validators: Validation.contact,
    methods: {
      checkForm: function (e) {
      if (this.name && this.email && this.subject && this.message) {
        return true;
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

      e.preventDefault();
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
</style>