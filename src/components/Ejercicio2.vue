<template>
  <div class="container mt-4">
    <div v-if="errors.length" class="alert alert-danger">
      <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
      <ul>
        <li v-for="(item, index) in errors" :key="index">{{ item }}</li>
      </ul>
    </div>

    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre:</label>
      <input id="nombre" type="text" class="form-control" v-model="nombre" />
    </div>

    <div class="mb-3">
      <label for="correo" class="form-label">Correo:</label>
      <input id="correo" type="email" class="form-control" v-model="correo" />
    </div>

    <div class="mb-3">
      <label for="contrasena" class="form-label">Contraseña:</label>
      <input id="contrasena" type="password" class="form-control" v-model="contrasena" />
    </div>

    <div class="mb-3">
      <label for="repetirContrasena" class="form-label">Repetir Contraseña:</label>
      <input
        id="repetirContrasena"
        type="password"
        class="form-control"
        v-model="repetirContrasena"
      />
    </div>

    <div class="d-grid gap-2">
      <button type="button" class="btn btn-primary" @click="validarDatos">Enviar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Definir una referencia reactiva para almacenar el valor del input
const nombre = ref('')
const errors = ref<string[]>([])
const correo = ref('')
const contrasena = ref('')
const repetirContrasena = ref('')
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validarDatos() {
  errors.value = []
  if (nombre.value.length === 0) {
    errors.value.push('Escriba un nombre.')
  }
  if (correo.value.length === 0 || !regex.test(correo.value)) {
    errors.value.push('escriba correo válido.')
  }
  if (contrasena.value.length === 0) {
    errors.value.push('Escriba contrasena.')
  }
  if (repetirContrasena.value.length === 0) {
    errors.value.push('repita contrasena.')
  }
  if (errors.value.length > 0) {
    return alert('por favor,valide los ingresos de datos.')
  } else {
    if (contrasena.value !== repetirContrasena.value) {
      errors.value.push('contraseñas no coinciden.')
    }
    if (errors.value.length === 0) {
      alert('El registro de ha realizado correctamente')
    }
  }
}
// Definir una propiedad calculada para obtener la longitud del texto
</script>
