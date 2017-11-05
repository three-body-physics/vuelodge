<template>
<div id="holder">

  <!-- <div class="ui button" @click="toggleLogin()">
      login
    </div> -->
  <div class="ui inverted vertical masthead center aligned segment">

  <div class="ui container">
    <div class="ui computer only tablet only grid">
      <div class="ui fixed secondary menu" id="navbar">
        <div class="ui container">          

          <a style="margin: 0px;" href="/home" class="header item" id="homeNav"><i class="fa fa-home fa-2x" aria-hidden="true"></i>
          </a>        
        
        <div style="margin: 0px;" class="right menu">
          <div v-if="checkAuth()" style="margin: 0px;" class="item"><a class="ui orange button" href="/home/new">New Post</a></div>
          <div v-if="!checkAuth()" style="margin: 0px;" class="item"><a href="/register" class="ui inverted blue button">Register</a></div>
          <div v-show="!checkAuth()" style="margin: 0px;" class="item">
          <a class="ui inverted orange button" @click="toggleLogin()">
            <i class="fa fa-sign-in" aria-hidden="true"></i> Login
           </a>
          </div>
        
        <div v-if="checkAuth()" style="margin: 0px;" class="item"><a class="ui item" @click="userProfile()"><i class="fa fa-user-circle fa-2x" aria-hidden="true" style="display: inline-block; letter-spacing: 2px;"></i> {{ checkUser() }} </a></div>
        <div v-if="checkAuth()" style="margin: 0px;" class="item"><a class="ui item" @click="userLogout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </a>
        </div>
          
        </div>
      </div>
    </div>
  </div> 

  <div class="ui mobile only grid">
      <div class="ui fixed secondary menu" id="navbar">
        <div class="ui container">
          <a href="/home" class="header item" id="homeNav"><i class="fa fa-home fa-2x" aria-hidden="true"></i>
          </a>

        
        
        <div style="margin: 0px;" class="right menu">
          <div style="margin: 0px;" class="item" v-if="checkAuth()"><a class="ui orange button" href="/home/new">Post</a></div>
          <div style="margin: 0px;" class="item" v-if="!checkAuth()"><a href="/register" class="ui inverted blue button">Register</a></div>
          <div style="margin: 0px;" class="item"  v-show="!checkAuth()">
          <a class="ui inverted orange button" @click="toggleLogin()">
            <i class="fa fa-sign-in" aria-hidden="true"></i> Login
           </a>
          </div>
        
        <div class="item" v-if="checkAuth()" style="margin: 0px;"><a class="ui item" @click="userProfile()"><i class="fa fa-user-circle fa-2x" aria-hidden="true" style="display: inline-block; letter-spacing: 2px;"></i></a></div>
        <div class="item" v-if="checkAuth()" style="margin: 0px;"><a class="ui item" @click="userLogout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </a>
        </div>
          
        </div>
      </div>
    </div>
  </div>
  
  </div>

  <div class="ui text container">
    <h1 class="ui inverted header" id="bannerh1">
          Share your adventure with the world!
        </h1>
    <h2>Register now to start posting.</h2 id="bannerh2">

  </div>

</div>

  <div v-if="loginForm" id="formholder" class="ui middle aligned center aligned grid">

    <div class="six wide computer only column" id="computerForm">
      <h2 class="ui teal image header">
          <div class="content">
            Log in to your account
            <i class="fa fa-times-circle" @click="toggleLogin()"></i>
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username" v-model="loginName">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password" v-model="loginPass">
            </div>
          </div>
          <div class="ui fluid large teal submit button" @click="userLogin">
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="/register">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Username or password does not match.</li>
            <li>Inputs are case sensitive.</li>
          </ul>
        </div>

      </form>
    </div>

    <div class="mobile only sixteen wide column" id="mobileform">
       <h2 class="ui teal image header">
          <div class="content">
            Log in to your account
            <i class="fa fa-times-circle" @click="toggleLogin()"></i>
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username" v-model="loginName">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password" v-model="loginPass">
            </div>
          </div>
          <div class="ui fluid large teal submit button" @click="userLogin">
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="/register">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Username or password does not match.</li>
            <li>Inputs are case sensitive.</li>
          </ul>
        </div>

      </form>
    </div>

    <div class="tablet only ten wide column">
  <h2 class="ui teal image header">
          <div class="content">
            Log in to your account
            <i class="fa fa-times-circle" @click="toggleLogin()"></i>
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username" v-model="loginName">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password" v-model="loginPass">
            </div>
          </div>
          <div class="ui fluid large teal submit button" @click="userLogin">
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="/register">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Username or password does not match.</li>
            <li>Inputs are case sensitive.</li>
          </ul>
        </div>

      </form>
    </div>

  </div>


  <div class="ui centered middle aligned stackable grid container" id="body">

    <div class="ui two column row" id="headerRow">
      <div class="column">
        <h4 class="ui header">
          Latest entries:
        </h4>
      </div>
      <div class="tablet computer only column">

      </div>

    </div>
    <div class="ui divider" id="headerdivider">

    </div>

    <div class="ui stackable centered cards grid" id="ui-overrides">

      <div v-for="entry in activeEntries" class="doubling centered four wide column card" style="margin: 1em;">
        <div @click="goToBLog(entry._id)" class="image">
          <img v-bind:src="entry.image">
        </div>
        <div class="content">
          <a @click="goToBLog(entry._id)" class="header">
          {{ entry.name }}
        </a>
          <div class="meta">
            <span class="date">Posted: {{ entry.date }} , <strong>{{ entry.author }}</strong> </span>
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">
            {{ entry.text | limitText(150) }}
            <div class="ui divider">
            </div>
          </div>

          <i class="comment icon"></i><span id="comments" @click="goToBLog(entry._id)"> {{ entry.comments.length | commentText("comment") }}  </span>
        </div>
        <!-- <button @click="goToBLog(entry._id)" class="ui inverted orange button">Read More
        </button> -->
      </div>

    </div>

    <div class="ui pagination menu" id="pagination">
      <a v-for="num in pages" class="item" @click="pageToggle(num)">
      {{ num + 1 }}
    </a>
    </div>

  </div>



</div>
</template>

<script>
import userAuth from "./../router/userAuth.js";

export default {

  data() {
    return {
      entries: [],
      entryHolder: [],
      activeEntries: [],
      errorForm: false,
      loginForm: false,      
      activePage: 0,
      pages: [],
      loginName: "",
      loginPass: "",
      loggedUserName: "",

      

    }
  },

  created() {
    this.getBlogs();
 

  },

  // updated() {
  //   this.checkAuth();
  //   console.log(this.userLogged);
  // },


  // updated() {
  //   this.getBlogs();
  // },

  methods: {

    getBlogs() {
      this.$http.get("/api/home", {

        flag: "hello"

      }).then(function(data) {

        this.entries = data.body.reverse();
      
        this.divideEntries();

      }).catch(function(error) {

        console.log(error);

      });

    },

     checkAuth() {

      var tk = "token: " + localStorage.getItem("JWTtoken");      

      if (tk.length < 20) {
        return false;
      } else {
        return true;
      }

    },

    checkUser() {
      var who = "" + localStorage.getItem("username");
      return who; 
    },

    userLogin(username, password) {

      if (username, password) {

        this.$http.post("/api/login", {username: username, password: password}).then(function(res) {
        
        console.log(res);

        localStorage.setItem("JWTtoken", res.body.token);
        localStorage.setItem("userId", res.body.user._id);
        localStorage.setItem("username", res.body.user.username);

        this.loggedUser = "token: " + res.body.token;

        if (this.loggedUser.length > 20){

        this.loginForm = false;

        }

        this.$router.push("/")

      }, function(res){
        console.log(res);
      });


      } else {

      this.$http.post("/api/login", {username: this.loginName, password: this.loginPass}).then(function(res) {
        
        console.log(res);
        console.log("second call");
    

        if (res.body.success === true){

        localStorage.setItem("JWTtoken", res.body.token);
        localStorage.setItem("userId", res.body.user._id);
        localStorage.setItem("username", res.body.user.username);  
        this.loginForm = false;

        } else {
          this.errorForm = true;
        }



      }, function(res){
        console.log(res);
      });

      }

    },
    

    userLogout() {
      localStorage.removeItem("JWTtoken");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
     
      var self = this;
      setTimeout(function() {self.$router.push("/logout");}, 1000);   

       
    },

    userProfile(username) {

      if (username) {

        this.$router.push("/home/user/" + username);

      } else {

        this.$router.push("/home/user/" + "" + localStorage.getItem("username"));

      }

    },

    pageToggle(num) {
      this.activePage = num;
      this.pagination();
    },

    goToBLog(id) {
      this.$router.push("/home/entry/" + id);
    },

    toggleLogin() {
      this.loginForm = !this.loginForm;
    },

    divideEntries() {


      for (let i = 0; i <= this.entries.length / 6; i++) {
        this.pages.push(i);
      }

      for (let i = 0; i <= this.entries.length / 6; i++) {
        this.entryHolder[i] = this.entries.slice((6 * i), ((6 * i) + 6));
      }

      this.pagination();

    },

    pagination() {
      this.activeEntries = this.entryHolder[this.activePage];
    }


  },


  filters: {
    limitText: function(text, limit) {
      if (text.length < 100) {
        return text;
      } else {
        return text.substring(0, limit) + "...";
      }
    },

    commentText: function(text, string) {
      if (text >= 2) {
        return text + " comments";
      } else {
        return text + " comment";
      }
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Catamaran|Montserrat:300i');
@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One|Fjalla+One');



#pagination {
  margin-top: 3em;
  margin-bottom: 1em;
}

#formholder {
  position: relative;
  z-index: 1;
  margin-bottom: 1.5em;
}


#formholder .column {
  position: fixed;
  background: rgba(255, 255, 255, 1);
}

.grid.container {
  margin-top: 2em;
}

#mobileform {
  top: 20%;
}

#errorMsg {
  display: block;
}

#computerForm {
  top: 25%;
}

/*#blogpost:nth-child(n+1) {
  margin-top: 4em;
}*/

img {
  margin-bottom: 1em;
}

#headerdivider {
  margin: 0.5rem;
}

#headerRow {
  padding: 0px;

}


.segment {
  border: 0px !important;
}

#ui-overrides.card {
  margin-top: 1em;
  box-shadow: 0px !important;
  border: none;
}

#comments {
  opacity: 0.6;
  cursor: pointer;
}

#comments:hover {
  opacity: 1;
}

.image:hover {
  cursor: pointer;
}

#body {
  margin-bottom: 3em;
}




#homeNav {
   font-weight: bold;
}

.masthead h1.ui.header {
  font-size: 2em;
  margin-top: 9em;
}

.masthead h2 {

  margin-bottom: 10em;
  font-size: 1.2em;
}

.menu {
  background: white;
}

#navbar {
  font-family: 'Catamaran', sans-serif;
  font-size: 1em;
  background: white;
}

.masthead {
/*  background: url("../assets/hero3.jpg") no-repeat center center fixed !important;*/
  background: url("https://i.redd.it/lghllrc86vdy.jpg") no-repeat center center fixed !important;
}

.right.menu {
  margin-right: 1em;
}

/*.row {
   display: flex;
   flex-wrap: wrap;
 }*/
</style>
