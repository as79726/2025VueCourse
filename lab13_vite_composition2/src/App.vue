<template>
  <h1>Composition Lab2</h1>
  <br />
  <MyComp1></MyComp1>
    <br />
  <button @click="toggleOptions2">show/hide options component</button>
  <br/>
  <div v-if="displayOptions2">
    <MyOptions2></MyOptions2>
  </div>
  <br/>
  <br />
  <button @click="toggleComposition2">show/hide composition component</button>
  <div v-if="displayComposition2">
    <MyComposition2></MyComposition2>
  </div>
  <br/>
  <FirebasePost></FirebasePost>
</template>
<script setup>
import MyComp1 from './components/MyComp1.vue';
import MyComposition2 from './components/MyComposition2.vue';
import MyOptions2 from './components/MyOptions2.vue';
import FirebasePost from './components/FirebasePost.vue';
import { ref } from 'vue';
const displayOptions2 = ref(true);
const displayComposition2 = ref(true);
const toggleOptions2 = () => {
  displayOptions2.value = !displayOptions2.value
}
const toggleComposition2 = () => {
  displayComposition2.value = !displayComposition2.value
}
</script>
<style scoped></style>