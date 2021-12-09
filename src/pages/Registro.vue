<template>
  <div class="row items-center">
    <div class="q-pa-md col-md-6 logo">
      <q-img src="https://i.ibb.co/cccCYsh/logo.png" />
    </div>
    <div class="q-pa-md col-6 register-user cf-body">
      <h5 class="title text-weight-bold cc-pri cf-body">Regístrate</h5>
      <q-input
        rounded
        outlined
        v-model="name"
        item-aligned
        dense
        hide-bottom-space
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length <= 20 || 'Por favor máximo 20 caracteres',
          (val) => val.length >= 5 || 'Por favor mínimo 5 caracteres',
        ]"
      >
        <p class="title-input cc-pri">Nombre(s):</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="cc-pri" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="lastName"
        class="register-input"
        hide-bottom-space
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length <= 20 || 'Por favor máximo 20 caracteres',
          (val) => val.length >= 5 || 'Por favor mínimo 5 caracteres',
        ]"
        item-aligned
        dense
      >
        <p class="title-input cc-pri">Apellido(s):</p>

        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="cc-pri" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="email"
        type="email"
        class="register-input"
        :rules="[(val) => !!val || 'Este campo es requerido', isValidEmail]"
        item-aligned
        hide-bottom-space
        dense
      >
        <p class="title-input cc-pri">Correo electrónico:</p>
        <template v-slot:prepend>
          <q-icon name="email" class="cc-pri" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="password"
        hide-bottom-space
        class="register-input"
        :type="pass1 ? 'password' : 'text'"
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length <= 20 || 'Por favor máximo 20 caracteres',
          (val) => val.length >= 10 || 'Por favor mínimo 10 caracteres',
        ]"
        item-aligned
        dense
      >
        <p class="title-input cc-pri">Contraseña:</p>
        <template v-slot:prepend>
          <q-icon name="lock" class="cc-pri" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="pass1 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer cc-pri"
            @click="pass1 = !pass1"
          />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        hide-bottom-space
        v-model="passwordConfirm"
        :type="pass2 ? 'password' : 'text'"
        class="register-input"
        :rules="[
          (val) => !!val || 'Este campo es requerido',

          (val) =>
            password === passwordConfirm || 'Las contraseñas deben ser iguales',
        ]"
        item-aligned
        dense
      >
        <p class="title-input cc-pri">Confirmar contraseña:</p>
        <template v-slot:prepend>
          <q-icon name="lock" class="cc-pri" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="pass2 ? 'visibility_off' : 'visibility'"
            class="cursor-pointer cc-pri"
            @click="pass2 = !pass2"
          />
        </template>
      </q-input>

      <div class="btn-register-user">
        <q-btn rounded color="cc-pri" text-color="white" label="Registrarse" />
      </div>

      <div class="login cc-pri cf-body">
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
      pass2: false,
    };
  },

  methods: {
    isValidEmail(val) {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return emailPattern.test(val) || "Email no valido";
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../css/style.gl.scss"
</style>
