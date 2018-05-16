<template>
    <div id="component2">
    <form>
       UserName: <input type="text" v-model="username" ><br/>
       <br/>
       E-Mail: <input type="email" v-model="email">
       <br/>
       <br/>
       DOB: <input type="date" v-model="dob">
       <br/>
       <br/>
       Phone: <input type="tel" v-model="phone">
       <br/>
       <br/>
    </form>
    <component3 :username = 'username' :email = 'email' :dob = 'dob' :phone = 'phone'></component3>
    </div>
</template>
<script>
import component3 from './component3';
    
export default {
  name: 'component2',
  components: {
      component3: component3
  },
  data() {
    return {
        username:'',
        email:'',
        dob: '',
        phone:'',
    };      
  },
};

</script>
<style scoped>
</style>
