<template>
    <div id="component3">
    <button v-on:click = "toggle">Toggle</button>
    <br /> <br />
    <div v-if="showName">UserName: {{username}}<br/><br/>
    Email: {{email}}
    <br/><br/>
    DOB: {{dob}}
    <br/><br/>
    Phone: {{phone}}</div>
    </div>
</template>
<script>
export default {
  props: ['username',
         'email',
          'phone',
          'dob',
         ],
  name: 'component3',
  components: {
  },
  data() {
    return {
        
      msg: 'Welcome to my page',
      showName: true,
    };      
  },
  methods: {
    toggle: function(e){
        this.showName = !this.showName;
    },
  },
};

</script>
<style scoped>
</style>
