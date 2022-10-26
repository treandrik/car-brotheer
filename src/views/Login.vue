<template>
  <!-- <div class="login">
    <div class="login__container _container">
      <div class="login__card">
        <div class="login__left">
          <img :src="imageData" alt="" />
        </div>
        <div class="login__right">
          <div class="login__title red">Вход в учетную запись</div>
          <hr />
          <div class="login__email">
            <span class="badge">ЭЛЕКТРОННАЯ ПОЧТА</span>
            <input type="text" />
            <span class="error red">Некорректный адрес e-mail</span>
          </div>
          <div class="login__password">
            <span class="badge">ПАРОЛЬ</span>
            <input type="text" />
            <span class="error red">
              Пароль должен содержать минимум 6 символов
            </span>
            <a href="" class="button login__button">ВОЙТИ</a>
            <a href="" class="button register__button">ЗАРЕГЕСТРИРОВАТЬСЯ</a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="login">
    <div class="login__container _container">
      <div class="login__card">
        <div class="login__left">
          <img :src="imageData" alt="" />
        </div>
        <div class="login__right">
          <div class="login__title red">Вход в учетную запись</div>
          <hr />
          <div class="login__email" :class="{ error: v$.email.$errors.length }">
            <span class="login__badge">ЭЛЕКТРОННАЯ ПОЧТА</span>
            <input type="text" name="username" v-model="email" />
            <div class="login__error-wrapper">
              <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
              <span class="error red">{{ $message(error.$message) }}</span>
            </div>
            </div>
          </div>
          <div class="login__password" :class="{ error: v$.password.$errors.length }">
            <span class="login__badge">ПАРОЛЬ</span>
            <input type="password" name="password" v-model="password" />
            <div class="login__error-wrapper">
            <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
              <span class="error red">
                {{ $message(error.$message) }}
              </span>
            </div>
            </div>
            <a class="button login__button" v-on:click="login()">ВОЙТИ</a>
            <router-link to="/register" class="button register__button">НЕТ АККАУНТА? ЗАРЕГЕСТРИРОВАТЬСЯ</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import useVuelidate from "@vuelidate/core";
import messages from "@/utils/messages";
import { required, email, minLength } from "@vuelidate/validators";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default {
  name: "Login",

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      imageData: "",
      isFormCorrect: true,
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) },
    };
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      //тут можно выводить нотификацию из query параметра url
       this.$notify({
        text: messages[this.$route.query.message] || "Что-то пошло не так",
        type: "warn",
      });
    }
  },
  created() {
    this.getLogoImage();
  },
  methods: {
    async login() {
      this.isFormCorrect = await this.v$.$validate();
      if (this.isFormCorrect) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch("login", formData);
          this.$router.push("/service");
        } catch (e) {}
      }
    },
    getLogoImage() {
      var vm = this;
      getDownloadURL(ref(getStorage(), "images/logo.png")).then((url) => {
        vm.imageData = url;
      });
    },
  },
};
</script>

<style scoped>
.login__container {
  height: calc(100vh - 712px);
  min-height: 447px;
  display: flex;
}
.login__card {
  box-shadow: 0px 8px 24px 2px rgb(54 59 100 / 8%);
  border-radius: 7px;

  /*  */
  max-width: 530px;
  margin: auto;
  display: flex;
}
.login__left {
  width: 210px;
  background: rgba(244, 13, 13, 0.74);
  flex-grow: 1;
  border-radius: 7px 0 0 7px;
  display: flex;
}
.login__left img {
  margin: auto;
  max-width: 80%;
}
.login__right {
  display: flex;
  flex-direction: column;
  padding: 0px 35px 35px 25px;
  min-width: 348px;
}
.login__right hr {
  height: 1px;
  background: #ededed;
  width: 100%;
  margin-top: 5px;
}
.login__title {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 15px;
  text-align: center;
}
.login__email {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.login__email input,
.login__password input {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 35px;
  min-width: 195px;
  font-size: 13px;
  margin-top: 8px;
  color: black;
  border-radius: 5px;
  border: 1px solid #5b5b5b;
  padding-left: 14px;
  font-weight: 500;
}
.login__badge {
  color: #8a8a8a;
  font-weight: 700;
}
.login__password {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.login__button {
  width: 100%;
  text-align: center;
  background-color: #00944d;
  color: white;
  font-weight: 700;
  margin-top: 15px;
}

.login__button:hover {
  background-color: #016e3a;
}
.register__button {
  width: 100%;
  text-align: center;
  background-color: white;
  color: #1c84ff;
  font-weight: 400;
  margin-top: 15px;
  border: 1px solid #1c84ff;
}
.register__button:hover {
  background-color: #1c84ff;
  color: white;
}
.login__error-wrapper{
  min-height: 19px;
}
.input-errors {
  margin-top: 5px;
}
</style>
