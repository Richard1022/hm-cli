<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{getNamePlus}}</h1>
    <h1>{{getAgePlus}}</h1>
    <button @click="setAge(99)">setAge</button>
    <button @click="setName('jay')">setName</button>
    <button @click="bothModify({name:'jerry',age:10})">doAction bothModify</button>
    <button @click="testLogin">login</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  mounted() {
    console.log('123');
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters([
      'getNamePlus',
      'getAgePlus',
    ]),
  },
  methods: {
    testLogin() {
      console.log(this.$api);
      this.$api.test().then((res) => {
        console.log('success', res);
      }, (rej) => {
        console.log('reject', rej);
      });
    },
    ...mapMutations({
      setName: 'SET_NAME',
      setAge: 'SET_AGE',
    }),
    ...mapActions({
      bothModify: 'bothModify',
      bothMinus: 'bothMinus',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
