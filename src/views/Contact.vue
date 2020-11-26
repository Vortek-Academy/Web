<template>
  <v-container fluid style="margin-top: 11rem">
    <v-layout justify-center align-center>
      <v-card class="text-center" dark width="70%">
        <h1
          style="
            margin-top: 17px;
            font-weight: 300;
            letter-spacing: 2px;
            font-family: Bebas Neue, sans-serif;
          "
        >
          Contact <span style="color: #e67e22">VA</span>
        </h1>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                dark
                outlined
                label="Name"
                v-model="form.name"
              ></v-text-field>
              <div
                v-if="form.submit && !$v.form.name.error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.name.required">Name is required</span>
              </div>
            </v-col>

            <v-col cols="12">
              <v-text-field
                dark
                outlined
                label="Email"
                v-model="form.email"
              ></v-text-field>
              <div
                v-if="form.submit && !$v.form.email.error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.email.required">Email is required</span>
                <span v-if="!$v.form.email.email">Email is invalid</span>
              </div>
            </v-col>

            <v-col cols="12">
              <v-text-field
                dark
                outlined
                label="Subject"
                v-model="form.subject"
              ></v-text-field>
              <div
                v-if="form.submit && !$v.form.subject.error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.subject.required"
                  >Subject is required</span
                >
              </div>
            </v-col>

            <v-col cols="12">
              <v-textarea
                dark
                outlined
                label="Message"
                v-model="form.message"
              ></v-textarea>
              <div
                v-if="form.submit && !$v.form.message.error"
                class="invalid-feedback"
              >
                <span v-if="!$v.form.message.required"
                  >Message is required</span
                >
                <span v-if="!$v.form.message.maxLength"
                  >Message cannot be more than 1800 letters</span
                >
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions style="margin-bottom: 20px; margin-right: 20px">
          <v-spacer></v-spacer>
          <v-btn
            large
            depressed
            color="#7289da"
            style="color: #23272a"
            href="https://discord.vortekacademy.com"
            >Get help via Discord</v-btn
          >
          <v-divider vertical style="margin: 0 20px" />
          <v-btn
            large
            depressed
            color="#e67e22"
            style="color: #23272a"
            :loading="form.loading"
            @click="submit()"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-dialog v-model="response.dialog" dark max-width="500px">
      <v-card style="border: solid 1px #e67e22">
        <v-card-title
          style="font-weight: 300; font-size: 17px; word-break: normal"
        >
          {{ response.text }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="#e67e22" style="color: #23272a" to="/"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'Contact',
  validations: {
    form: {
      name: { required },
      email: { required, email },
      subject: { required },
      message: { required, maxLength: maxLength(1800) },
    },
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      submit: false,
    },
    response: {
      dialog: false,
      text:
        'We have received your query. Someone will get back to you in 2-3 days. Thank you!',
    },
  }),
  methods: {
    submit() {
      this.form.submit = true;
      this.form.loading = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.form.loading = false;
        return;
      }

      const body = {
        name: this.form.name,
        email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
      };

      fetch(
        `${
          process.env.VUE_APP_TYPE === 'dev'
            ? 'http://localhost:3002'
            : 'https://vortekacademy.com'
        }/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      ).then((res) => {
        if (res.status !== 200)
          this.response.text =
            'Something went wrong on our side. Please try again later!';
        if (res.status === 429)
          this.response.text = 'You can send only one query each day!';
        this.response.dialog = true;
        this.form.loading = false;
      });
    },
  },
};
</script>
