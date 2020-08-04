<template>
    <div>
        <div class="cards">
            <div v-for="card in cards" :key="card.id" class="cards__card">
                <a href="#">
                    <img src="../assets/edit-icon.png" class="cards__card__pen">
                </a>
                <img :src="card.avatar" class="cards__card__avatar">
                <div class="cards__card__name">{{card.name}}</div>
                <div class="cards__card__email">{{card.email}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'cards',
  data() {
    return {
      cards: [],
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
    render(data) {
      data.data.forEach((element) => {
        this.createCard(element.avatar, `${element.first_name} ${element.last_name}`, element.email);
      });
    },
    createCard(avatar, name, email) {
      this.cards.push({ avatar, name, email });
    },
  },
};
</script>

<style lang="scss">
$Primary : #174DBA;
$White : #ffffff;
$Dark : #505050;

.cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.cards__card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

.cards__card>*{
    margin-bottom: 4vh;
}

.cards__card>*:first-child{
    align-self: flex-end;
}

.cards__card__pen{
    margin-right: 1vh;
    margin-top: 1vh;
    height: 3vh;
    width: 3vh;
}

.cards__card__avatar{
    border-radius: 50%;
    height: 15vh;
    width: 15vh;
}

.cards__card__name{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    color: $Primary;
}

.cards__card__email{
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    color: $Dark;
}

</style>
