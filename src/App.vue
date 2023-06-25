<!-- <script>

export default {
data() {
    return {
      greetings: "Hello World",
      count: 0
    }
  },

 methods: {
  increment(){
    this.count++
  }
 } 
}

</script> -->
<script setup>
import { onMounted, ref } from 'vue';

const count =ref(0);
const greetings = ref("Tejas")
const increment = () => {
  count.value++
}
const classes = ref("btn")
onMounted(()=>{
  console.log("mounted")

})
</script>
<template>
  <button v-bind:class="classes"  @click="increment" >Count is {{ count }}</button>
  <input type="text" v-model="greetings" />
 <p>
  {{ greetings }} {{ greetings.length }}
</p>
</template>

<style>
.btn{
  color: green;
}
</style>