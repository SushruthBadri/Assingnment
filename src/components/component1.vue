<template>
    <div id="component1">
    <h2>{{msg}}</h2>
    <component2></component2>
    
    </div>
</template>
<script>
import component2 from './component2';

export default {
  name: 'component1',
  components: {
    component2: component2
  },
  data() {
    return {
      msg: 'User Details Form',
    };      
  },
};

</script>
<style scoped>
</style>
