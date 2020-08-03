<template>
    <div>
        <header>
            <img src="../assets/logo-uppersoft.png" alt="">
        </header>
        <div class="container">
            <div class="container__cardBox">
                <form @submit.prevent="postLogin">
                    <div class="container__cardBox__titulo">
                        <h1 >Acessar</h1>
                    </div>
                    <div class="container__cardBox__elements">
                            <label class="container__cardBox__labels">
                                E-mail
                            </label>
                        <div>
                            <input type="email" v-model="email" id="email">
                        </div>
                    </div>
                    <div class="container__cardBox__elements">
                            <label class="container__cardBox__labels">
                            Senha
                            </label>
                        <div>
                            <input type="password" v-model="password" id="password">
                        </div>
                    </div>
                    <div class="container__cardBox__btn">
                        <button type="submit" id="btnStatus">ENTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      btnStatus: document.getElementById('btnStatus'),
    };
  },
  methods: {
    validateEmail() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.email)) {
        const thisId = document.getElementById('email');
        thisId.classList.add('emailError');
      }
    },
    validatePassword() {
      if (this.password === null) {
        const thisId = document.getElementById('email');
        thisId.classList.add('passwordError');
        this.btn.disabled = true;
      }
      this.btn.disabled = false;
    },
    async postLogin() {
      axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.$router.push({ name: 'listusers' });
        }
      })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped lang="scss">
$bgBody : #EFF0F3;
$Primary : #174DBA;
$White : #ffffff;

@mixin flexCenter{
    display: flex;
    justify-content: center;
};

body{
    margin: 0;
    background-color: $bgBody;
}
.container{
    height: 80vh;
    @include flexCenter();
    flex-direction: column;
}
.container__cardBox{
            width: 50vh;
            height: 45vh;
            background-color: $White;
            border-radius: 10px;
            @include flexCenter();
            align-self: center;
        }
.container__cardBox__elements{
    margin-bottom: 1vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    #email{
        outline: none;
        margin-top: 0.5vh;
        width: 29vh;
        height: 4vh;
        border-radius: 5px;
        border: solid 2px $Primary;
        padding-left: 1vh;

        &:focus{
            border-radius: 5px;
        }
    }
    .emailError{
        border: solid 2px red !important;
    }
    #password{
        outline: none;
        margin-top: 0.5vh;
        width: 29vh;
        height: 4vh;
        border-radius: 5px;
        border: solid 2px $Primary;
        padding-left: 1vh;

        &:focus{
            border-radius: 5px;
        }
    }
    .passwordError{
        border: solid 2px red !important;
    }
}
.container__cardBox__btn{
    margin-top: 4.5vh;
    margin-bottom: 4vh;
    button{
        outline: none;
        background-color: $Primary;
        color: $White;
        width: 30vh;
        height: 4vh;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        &:hover{
            background-color: $White;
            color: $Primary;
            cursor: pointer;
            border: solid 2px $Primary;
            border-color: $Primary;
        }
    }
}
.container__cardBox__titulo{
    display: flex;
    justify-content: center;
    margin-bottom: 4vh;
    h1{
        font-family:Helvetica, sans-serif;
        font-weight: bold;
        font-size: 32px;
        color: $Primary;
    }
}
.container__cardBox__labels{
    font-family:Helvetica, sans-serif;
    font-weight: medium;
    font-size: 16px;
    color:$Primary;
}

header{
    @include flexCenter();
    background-color: $Primary;
    img{
        margin-top: 2vh;
        margin-bottom: 2vh;
        width: 25vh;
    }

}
</style>
