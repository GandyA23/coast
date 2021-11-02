<template>
  <div class="row" style="margin-bottom: 20px">
    <div class="q-pa-sm col-sm-8 logo">
      <q-img src="https://i.ibb.co/cccCYsh/logo.png"> </q-img>
    </div>
    <div class="q-pa-md col-6 register">
      <h5 class="title">Registrate</h5>
      <q-input
        rounded
        outlined
        v-model="name"
        bg-color="white"
        item-aligned
        dense
      >
        <p class="title-input">Nombre(s):</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="color-icon" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="lastName"
        style="padding-top: 20px"
        bg-color="white"
        item-aligned
        dense
      >
        <p class="title-input">Apellido(s):</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="color-icon" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="email"
        style="padding-top: 20px"
        bg-color="white"
        item-aligned
        dense
      >
        <p class="title-input">Correo electronico:</p>
        <template v-slot:prepend>
          <q-icon name="email" class="color-icon" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="password"
        style="padding-top: 20px"
        bg-color="white"
        :type="pass1 ? 'password' : 'text'"
        item-aligned
        dense
      >
        <p class="title-input">Contraseña:</p>
        <template v-slot:prepend>
          <q-icon name="lock" class="color-icon" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="pass1 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer color-icon"
            @click="pass1 = !pass1"
          />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="passwordConfirm"
        :type="pass2 ? 'password' : 'text'"
        style="padding-top: 20px"
        bg-color="white"
        item-aligned
        dense
      >
        <p class="title-input">Confirmar contraseña:</p>
        <template v-slot:prepend>
          <q-icon name="lock" class="color-icon" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="pass2 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer color-icon"
            @click="pass2 = !pass2"
          />
        </template>
      </q-input>

      <div class="btn-register">
        <q-btn rounded color="white" text-color="#0C2D48" label="Registrarse" />
      </div>

      <div class="login">
        <div class="text-subtitle2">¿Ya tienes cuenta?</div>
        <q-item class="text-subtitle2 sesion" manual-focus dense to="#"
          >Iniciar sesión</q-item
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registro",
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      pass1: false,
      pass2: false
    };
  },
};
</script>

<style lang="sass" scoped>

.title-input
  position: absolute
  color: white
  top: -20px
  left: -30px
  font-family: $cf-body


.color-icon
  color: #0C2D48

.title
  display: flex
  justify-content: center
  color: white
  margin: 0
  margin-bottom: 15px
  font-family: $cf-body

.btn-register
  display: flex
  justify-content: center
  color: white
  margin-top: 20px
  color: #0C2D48

.register
  background-color: $cc-sec
  width: 100%
  max-width: 400px
  border-radius: 30px
  margin: auto
  margin-top: 20px

.logo
  width: 100%
  margin: auto
  max-width: 450px


.login
  display: flex
  justify-content: center
  margin-top : 8px
  color: white
  font-family: $cf-body
  .sesion
    color: white
    margin-top: -2px
    text-decoration-line: underline
</style>
