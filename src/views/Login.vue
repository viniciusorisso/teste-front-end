<template>
    <div>
        <Header></Header>
        <LoginCard></LoginCard>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import LoginCard from '../components/LoginCard.vue';

export default {
  name: 'login',
  components: {
    Header,
    LoginCard,
  },
};
</script>
