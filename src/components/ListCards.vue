<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="container__text">
                Administrar Usuários
            </div>
            <Cards></Cards>
            <div class="container__footerNumber">
                Mostrando {{this.length}} de {{maxLength}}.
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Cards from './Cards.vue';

export default {
  name: 'listCards',
  components: {
    Header,
    Cards,
  },
  data() {
    return {
      length: 0,
      maxLength: 0,
    };
  },
  created() {
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users?page=1',
      responseType: 'application/json',
    })
      .then(({ data }) => {
        console.log(data);
        this.render(data, data.total);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    render(data, total) {
      this.length = data.data.length;
      this.maxLength = total;
    },
  },
};
</script>
<style scoped lang="scss">
$bgBody : #EFF0F3;
$Primary : #174DBA;
$Dark : #505050;

body{
    margin: 0;
    background-color: $bgBody;
}

.container{
    margin-top: 5vh;
    margin-left: 10vh;
    margin-right: 10vh;
}

.container__text{
    display: flex;
    flex-direction: row;
    flex: 100%;
    font-size: 38px;
    font-weight: bold;
    font-family: Helvetica, sans-serif;
    color: $Primary;
    margin-bottom: 5vh;
}

.container__footerNumber{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    color: $Dark;
    margin-bottom: 1vh;
}
</style>
