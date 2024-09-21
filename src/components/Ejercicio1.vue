<template>
  <div class="container mt-4">
    <!-- Mensaje de errores con estilo de alerta de Bootstrap -->
    <div v-if="errors.length" class="alert alert-danger">
      <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
      <ul>
        <li v-for="(item, index) in errors" :key="index">{{ item }}</li>
      </ul>
    </div>

    <div class="mb-3">
      <label for="nota1" class="form-label">Nota 1:</label>
      <input id="nota1" type="number" class="form-control" min="10" max="70" v-model="nota1" />
    </div>

    <div class="mb-3">
      <label for="nota2" class="form-label">Nota 2:</label>
      <input id="nota2" type="number" class="form-control" min="10" max="70" v-model="nota2" />
    </div>

    <div class="mb-3">
      <label for="nota3" class="form-label">Nota 3:</label>
      <input id="nota3" type="number" class="form-control" min="10" max="70" v-model="nota3" />
    </div>

    <div class="mb-3">
      <label for="asistencia" class="form-label">Asistencia:</label>
      <input
        id="asistencia"
        type="number"
        class="form-control"
        min="0"
        max="100"
        v-model="asistencia"
      />
    </div>

    <div class="mb-3">
      <input type="button" value="Calcular" class="btn btn-primary" v-on:click="validarDatos()" />
    </div>

    <div class="mt-4">
      <p>
        El promedio es: <strong>{{ notaFinal }}</strong>
      </p>
      <p>
        <strong>{{ resultado }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Definir una referencia reactiva para almacenar el valor del input
const nota1 = ref(0)
const errors = ref<string[]>([])
const nota2 = ref(0)
const nota3 = ref(0)
let notaFinal = ref(0)
const asistencia = ref(0)
let resultado = ref('')

function validarDatos() {
  errors.value = []
  if (nota1.value < 10 || nota1.value > 70) {
    errors.value.push('Escriba nota 1 válida.')
  }
  if (nota2.value < 10 || nota2.value > 70) {
    errors.value.push('Escriba nota 2 válida.')
  }
  if (nota3.value < 10 || nota3.value > 70) {
    errors.value.push('Escriba nota 3 válida.')
  }
  if (asistencia.value < 0 || nota1.value > 100) {
    errors.value.push('Escriba asistencia válida.')
  }
  if (errors.value.length > 0) {
    return alert('por favor,valide los ingresos de datos.')
  } else {
    resultado.value = calculo()
  }
}
function calculo() {
  notaFinal.value = nota1.value * 0.35 + nota2.value * 0.35 + nota3.value * 0.3
  if (notaFinal.value >= 40 && asistencia.value >= 80) {
    return 'aprobado'
  } else {
    return 'reprobado'
  }
}
// Definir una propiedad calculada para obtener la longitud del texto
</script>
