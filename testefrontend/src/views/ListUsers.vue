<template>
    <div>
        <header>
            <img src="../assets/logo-uppersoft.png" alt="">
        </header>
        <div class="container">
            <div class="container__text">
                Administrar Usuários
            </div>
            <div v-for="card in cards" :key="card.id" class="container__card">
                <a href="#"><img src="../assets/edit-icon.png" class="container__card__pen"></a>
                <img :src="card.avatar" class="container__card__avatar">
                <div class="container__card__name">{{card.name}}</div>
                <div class="container__card__email">{{card.email}}</div>
            </div>
            <div class="container__footerNumber">
                Mostrando {{this.length}} de {{maxLength}}.
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'listusers',
  data() {
    return {
      cards: [],
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
      data.data.forEach((element) => {
        this.createCard(element.avatar, `${element.first_name} ${element.last_name}`, element.email);
      });
      this.length = data.data.length;
      this.maxLength = total;
    },
    createCard(avatar, name, email) {
      this.cards.push({ avatar, name, email });
    },
  },
};
</script>
<style scoped lang="scss">
$bgBody : #EFF0F3;
$Primary : #174DBA;
$White : #ffffff;
$Gray : #acacac;
$Dark : #505050;

@mixin flexCenter1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
};

header{
    @include flexCenter1();

    background-color: $Primary;
    img{
        margin-top: 2vh;
        margin-bottom: 2vh;
        width: 25vh;
    }
}

body{
    margin: 0;
    background-color: $bgBody;
}

.container{
    margin-top: 5vh;
    margin-left: 10vh;
    margin-right: 10vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.container>*:last-child{
    justify-self: end;
    align-self: flex-end;
}

.container__text{
    flex: 100%;
    font-size: 38px;
    font-weight: bold;
    font-family: Helvetica, sans-serif;
    color: $Primary;
    margin-bottom: 5vh;
}

.container__card{
    flex: 25%;
    width: 50vh;
    height: 45vh;
    background-color: $White;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5vh;
    margin-bottom: 5vh;
}

.container__card>*{
    margin-bottom: 4vh;
}

.container__card>*:first-child{
    align-self: flex-end;
}

.container__card__pen{
    margin-right: 1vh;
    margin-top: 1vh;
    height: 3vh;
    width: 3vh;
}

.container__card__avatar{
    border-radius: 50%;
    height: 15vh;
    width: 15vh;
}

.container__card__name{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    color: $Primary;
}

.container__card__email{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    //color: $Gray;
    color: $Dark;
}

.container__footerNumber{
    flex:100%;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    color: $Dark;
    margin-bottom: 1vh;
}
</style>
