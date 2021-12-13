<template>
  <div class="row items-center justify-center">
    <div class="q-pa-md col-md-6 logo">
      <q-img src="https://i.ibb.co/cccCYsh/logo.png" />
    </div>
    <div class="q-pa-md col-6 login-user cf-body">
      <h5 class="title text-weight-bold cc-pri cf-body text-white">
        Iniciar sesión
      </h5>
      <q-input
        rounded
        outlined
        v-model="email"
        type="email"
        item-aligned
        bg-color="white"
        class="input-login"
        dense
      >
        <p class="title-input text-white">Usuario o Correo Electrónico:</p>
        <template v-slot:prepend>
          <q-icon name="email" class="cc-sec" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="password"
        :type="pass1 ? 'password' : 'text'"
        item-aligned
        bg-color="white"
        class="input-login"
        dense
      >
        <p class="title-input text-white">Contraseña:</p>
        <template v-slot:prepend>
          <q-icon name="lock" class="cc-sec" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="pass1 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer cc-sec"
            @click="pass1 = !pass1"
          />
        </template>
      </q-input>

      <div class="row justify-around mt-2 input-login">
        <q-btn
          rounded
          color="white"
          text-color="#0C2D48"
          label="Entrar"
          class="btn-login"
        />
        <q-checkbox v-model="right" label="Recúerdame" dark />
      </div>

      <div class="login">
        <q-item
          class="text-subtitle2 text-white sesion"
          manual-focus
          dense
          to="#"
          >¿Olvidaste tu contraseña?</q-item
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      right: false,
      pass1: false,
    };
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/style.gl.scss"
</style>
