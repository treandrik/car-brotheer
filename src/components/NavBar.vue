<template>
  <div class="menu">
    <div class="menu__icon-wrapper">
      <div class="menu__icon">
        <span></span>
      </div>
    </div>
    <div class="menu__container">
      <div class="menu__left">
        <div class="menu__logo">
          <img :src="imageLogo" alt="" />
        </div>
        <nav class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link v-bind:class="[
                  {
                    bold: $route.name == 'landing',
                    red: $route.name == 'landing',
                  },
                ]" class="menu__link" to="/">Главная</router-link>
            </li>
            <li class="menu__item">
              <router-link v-bind:class="[
                  {
                    bold: $route.name == 'service',
                    red: $route.name == 'service',
                  },
                ]" class="menu__link" to="/service">Сервис</router-link>
            </li>
            <li class="menu__item">
              <router-link v-bind:class="[ { bold: $route.name == 'news', red: $route.name == 'news', } ]"
                class="menu__link" to="">Новости</router-link>
            </li>
            <li class="menu__item">
              <router-link v-bind:class="[ { bold: $route.name == 'contacts', red: $route.name == 'contacts', }, ]"
                class="menu__link" to="">Контакты</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu__buttons" v-if="!isLoggedIn">
        <div :key="name">{{ name }}</div>
        <router-link to="/register" class="button menu__register-button">Регистрация</router-link>
        <router-link to="/login" class="button menu__login-button">Вход</router-link>
      </div>
      <div class="menu__buttons" v-if="isLoggedIn">
        <div class="menu__info-row">
          <div class="menu__nickname bold">{{name}}</div>
          <div class="menu__email">{{email}}</div>
          <div class="menu__logout"><a v-on:click="logout()">Выйти из профиля</a></div>
        </div>
        <div class="menu__avatar">
          <a href="">
            <img :src="imageAvatar" alt="" v-if="imageAvatar">
            <div class="menu__no-avatar" v-if="!imageAvatar">{{name[0]}}</div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDownloadURL, getStorage, ref } from "firebase/storage";
export default {
  name: "NavBar",
  data() {
    return {
      imageLogo: "",
      imageAvatar: "",
    };
  },
  created(){
    this.getLogoImage();
    this.getAvatarImage();
  },
  computed: {
    name: function () {
      //TODO надо подумать может эту проверку перенести куда то в стор
      return this.$store.getters.info ? this.$store.getters.info.name : "";
    },
    email: function () {
      //TODO надо подумать может эту проверку перенести куда то в стор
      return this.$store.getters.info ? this.$store.getters.info.email : "";
    },
    isLoggedIn: function() {
      return this.$store.getters.info ? true : false;
    }
    
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
    getLogoImage() {
      var vm = this;
      getDownloadURL(ref(getStorage(), "images/NavBar/logo.png")).then((url) => {
         vm.imageLogo = url;
      });
    },
    getAvatarImage() {
      var vm = this;
      const username = this.$store.getters.info ? this.$store.getters.info.name : "";
      if (username) {
        getDownloadURL(ref(getStorage(), "images/users/" + username + "/avatar.jpg")).then((url) => {
          vm.imageAvatar = url;
        });
      }
    },
  },
};
</script>

<style scoped>

.menu__container {
  display: flex;
  justify-content: space-between;
  padding: 32px 107px;
  min-height: 116px;
}

.menu__left {
  display: flex;
}

.menu__container nav ul {
  display: flex;
  justify-content: space-between;
}

.menu__logo {
  margin: 0 50px;
  display: flex;
}
.menu__logo img {
  max-width: 160px;
  margin: auto;
  margin-top: 7px;
}
.menu__body {
}

.menu__list {
  font-weight: 400;
  font-size: 16px;
  line-height: 44px;
  letter-spacing: 0.15em;
  list-style-type: none;
}

.menu__item {
  margin: 0 7px;
  position: relative;
}

.menu__item:not(:last-child):after {
  content: "|";
  position: absolute;
  top: -2px;
  right: -10px;
}

.menu__link {
  color: #474747;
  text-transform: uppercase;
}

.menu__link:hover {
  color: #f40d0d;
}

.menu__buttons {
  display: flex;
  margin: auto 0px;
}

.menu__register-button {
  border: #5b5b5b 1px solid;
  transition: all 0.1s ease;
  font-weight: 700;
  margin: auto 10px auto 0;
}

.menu__register-button:hover {
  background-color: #5b5b5b;
  color: white;
}

.menu__login-button {
  border: #f40d0d 1px solid;
  color: #f40d0d;
  transition: all 0.1s ease;
  font-weight: 700;
  margin: auto 10px auto 0;
  background-color: white;
}

.menu__login-button:hover {
  background-color: #f40d0d;
  color: white;
}

.menu__info-row {
  text-align: right;
  margin: auto 15px;
  line-height: 17px;
}

.menu__nickname {
}

.menu__email {
}

.menu__logout a {
  color: #f40d0d;
  cursor: pointer;
}

.menu__avatar img {
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.menu__no-avatar {
  text-align: center;
  width: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: 700;
  background: #f40d0d;
  border-radius: 25px;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

</style>
