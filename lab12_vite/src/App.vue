<template>
  <div>
    <h3>{{ userName }}</h3>
    <!-- <CompositionComponent1></CompositionComponent1> -->
    <composition-component1></composition-component1>
    <hr/>
    <CompositionComponent2></CompositionComponent2>
    <composition-component2></composition-component2>
    <hr/>
    <CompositionComponent3></CompositionComponent3>
    <hr/>
    <CompositionComponent4></CompositionComponent4>
    <hr/>
    <CompositionComponent5></CompositionComponent5>
     <hr/>
    <CompositionComponent6></CompositionComponent6>
  </div>
</template>

<script>
import CompositionComponent1 from './components/CompositionComponent1.vue';
import CompositionComponent2 from './components/CompositionComponent2.vue';
import CompositionComponent3 from './components/CompositionComponent3.vue';
import CompositionComponent4 from './components/CompositionComponent4.vue';
import CompositionComponent5 from './components/CompositionComponent5.vue';
import CompositionComponent6 from './components/CompositionComponent6.vue';
export default {
  components:{
"composition-component1": CompositionComponent1,
    CompositionComponent2,
    CompositionComponent3,
    CompositionComponent4,
    CompositionComponent5,
    CompositionComponent6
  },
  data() {
    return {
      userName: "Mark Ho"
    }
  }
}
</script>

<style lang="scss" scoped></style>