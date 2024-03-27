<template>
 <div :style="{ backgroundImage: 'url(' + require('@/assets/images/giri.png') + ')'}">
  <div class="wrapper">
        <div class="card">
            <form @submit.prevent="login" class="d-flex flex-column">
                <div class="text-center text-black">
                    <img src="../assets/images/desi.png" width="200" height="200"/>
                </div>
                <div class="d-flex align-items-center  my-3 mb-1">
                    <span class="far fa-user p-2"></span>
                    <input type="text"  v-model="userLoginText" name="userLoginText" value="userLoginText"   placeholder="Name" class=" mb-1 form-control mb-1">
                </div>
                 <div class="d-flex align-items-center  my-3 mb-1">
                    <span class="far fa-user p-2"></span>
                    <input type="text"  v-model="userLoginText" name="userLoginText" value="userLoginText"   placeholder="Last Name" class=" mb-1 form-control mb-1">
                </div>
                <div class="d-flex align-items-center  my-3 mb-1">
                    <span class="far fa-user p-2"></span>
                    <input type="text"  v-model="userLoginText" name="userLoginText" value="userLoginText"   placeholder="Email" class=" mb-1 form-control mb-1">
                    
                </div>
                <div class="mt-sm-0 mt-0" style="font-size:13px;">This field can not change later</div>
                <div class="d-flex align-items-center mb-1">
                    <span class="fas fa-lock p-2"></span>
                    <input type="password"  v-model="password" name="password" value="password"  placeholder="Password" class=" mb-1 form-control" id="pwd">
                    <button class="btn">
                        <span class="fas fa-eye-slash"></span>
                    </button>
                </div>
                <div class="d-flex align-items-center mb-1">
                    <span class="fas fa-lock p-2"></span>
                    <input type="password"  v-model="password" name="password" value="password"  placeholder="Password accept" class=" mb-1 form-control" id="pwd">
                    <button class="btn">
                        <span class="fas fa-eye-slash"></span>
                    </button>
                </div>
                <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                    <div class="d-flex align-items-center mx-3">
                        <label class="option my-3">
                            <span class="text-light-gray">I agree with conditions</span>
                            <input type="checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                <div class="mb-1">
                    <button type="submit"   class="btn btn-primary mb-1 mx-3">Register</button>
                </div>
                <div class="mb-1">
                    <button type="submit"  class="btn btn-primary mb-1">Cancel</button>
                </div>
                </div>
            </form>
        </div>
    </div>
 </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      userLoginText: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await axios.post(
          'https://desisteely.com/api/web/v1/login',
          {
            userLoginText: this.userLoginText,
            password: this.password
          },
          {
            withCredentials: true,
            credentials: 'include'
          }
        )

        if (
          response.data.status === 'success' &&
          this.$route.path !== '/home'
        ) {
          // Başarılı giriş durumunda ana sayfaya yönlendir
          this.$router.push('/home')
        } else {
          // Hata durumunu işle
          console.error('Login failed')
        }
      } catch (error) {
        // Hata durumunu işle
        console.error('An error occurred', error)
      }
    },
    async loginGoogle () {
      try {
        const googleUser = await this.$gAuth.signIn()
        if (
          googleUser.data.status === 'success' &&
          this.$route.path !== '/home'
        ) {
          // Başarılı giriş durumunda ana sayfaya yönlendir
          this.$router.push('/home')
        } else {
          // Hata durumunu işle
          console.error('Login failed')
        }
      } catch (error) {
        // Hata durumunu işle
        console.error('An error occurred', error)
      }
    }
  }
}
</script>
<style scoped>
        /* Importing fonts from Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');



/* Reseting */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
   
}

body {
    background: linear-gradient(135deg, #00c3ff, #eeef1c);
    background: linear-gradient(135deg, #fc00ff, #00dbde);
    background-image: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);
    background-image: linear-gradient(150deg, #5a00ff 0%, #ff1ff7 100%, #ff1ff7 100%);
    min-height: 93vh;
} 

.wrapper {
    max-width: 500px;
    margin: 50px auto;  
    
}

.wrapper .card {
    max-width: 400px;
    min-height: 450px;
    margin: 30px;
    background: rgba(255, 255, 255, 0.134);
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.233);
    border-radius: 15px;
    cursor: pointer;
    padding: 0.8rem;
}

.wrapper .card a {
    text-decoration: none;
    color: #847171;
}

.wrapper .card a:hover {
    color: #fff;
}
.wrapper .card .input-field input {
    background-color: inherit;
      width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 10px auto;

}

.form-control{

  box-shadow: none;
  color: #4766b0;
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 20px auto;

}

.wrapper .card .input-field button.btn {
    color: #eee;
    padding: 0rem;
    padding-right: 0.5rem;
      border-radius: 20px;
}

.wrapper .card .input-field button.btn:hover {
    color: #fff;
      border-radius: 20px;
  width: 300px;
  height: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px auto;

}

.wrapper .card .input-field button.btn:focus {
    border: none;
    outline: none;
    box-shadow: none;
      border-radius: 20px;
  width: 300px;
  height: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px auto;

}

.wrapper .card .input-field input::placeholder {
    color: #eee;
}

.wrapper .card .option {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    user-select: none
}

.wrapper .card .option span.text-light-white:hover {
    color: #fff;

}

.wrapper .card .option input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border-radius: 2px
}

.wrapper .card .option:hover input~.checkmark {
    background-color: #f1f1f1
}

.wrapper .card .option input:checked~.checkmark {
    border: none;
    background-color: #333;
    transition: 300ms ease-in-out all
}

.checkmark:after {
    content: "\2713";
    position: absolute;
    display: none;
    color: #fff;
    font-size: 1rem
}

.wrapper .card .option input:checked~.checkmark:after {
    display: block
}

.wrapper .card .option .checkmark:after {
    left: 3px;
    top: -3px;
    width: 5px;
    height: 10px
}

.wrapper .card .btn.btn-primary {
    border-radius: 20px;
    width: 175px;
    background-color: #dba8a8;
    color: #333;
    border: none;
    border-radius: 20px;
    height: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    margin: 15px auto;

}

.wrapper .card .btn.btn-primary:hover {
    color: #fff;
    background: #333;
}

.wrapper .card .btn.btn-primary:focus {
    border: none;
    box-shadow: none;
}

.wrapper .card .text-light-white {
    color: #ddd;
}

.wrapper .card .line span.connect {
    position: absolute;
    top: -12px;
    left: 33%;
    color: #000;
    padding: 0 0.3rem;
    z-index: 100;
    border-radius: 2px;
    background-color: #fff;
}

.wrapper .card .connections a img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;

}

@media(max-width: 370px) {
    .wrapper .card .line:after {
        left: 27%;
    }
}

@media(max-width: 350px) {
    .wrapper {
        margin: 10px auto;
    }

    .wrapper .card {
        margin: 10px;
    }
}
</style>
