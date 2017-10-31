<template>

	<div id="formholder" class="ui middle aligned center aligned grid">
    <div class="six wide computer only column">
      <h2 class="ui teal image header">
          <div class="content">
            Register an account
           
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username" v-model="username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password" v-model="userPass">
            </div>
          </div>
          <div class="ui fluid large teal submit button" @click="userRegister">
            Register
          </div>
         

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li> {{ errorMessage }} </li>
          </ul>
        </div>

      </form>
    </div>

    <div class="mobile only sixteen wide column" id="mobileform">
      <h2 class="ui teal image header">
          <div class="content">
            Register an account
            
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password">
            </div>
          </div>
          <div class="ui fluid large teal submit button">
            Register
          </div>
 

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li> {{ errorMessage }} </li>
          </ul>
        </div>

      </form>
    </div>

    <div class="tablet only ten wide column">
      <h2 class="ui teal image header">
          <div class="content">
            Register an account
            
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" placeholder="username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" placeholder="password">
            </div>
          </div>
          <div class="ui fluid large teal submit button">
            Register
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li> {{ errorMessage }} </li>
          </ul>
        </div>

      </form>
    </div>

  </div>

</template>


<script>

import bodyComp from "./body.vue"

export default {
  data() {
    return {
    	username: "",
    	userPass: "",
    	errorMessage: "",
    	errorForm: false
    }
  },
  methods: {

  	userRegister() {

  		var self = this;

  		this.$http.post("/api/register", {username: this.username, password: this.userPass}).then(function(res) {

  			if (res.body.success === false) {

  				self.errorForm = true;
  				self.errorMessage = res.body.message;

  			} else if (res.body.success === true) {

  			console.log(res);

  			self.errorMessage = res.body.message;
  			localStorage.setItem("JWTtoken", res.body.token);
  			localStorage.setItem("username", res.body.username);
  			localStorage.setItem("userId", res.body.userId);


  			self.$router.push("/home");

  		} else {

  			self.errorForm = true;
  			self.errorMessage = res.body.message;
  		}

  		}, function(res) {

  			console.log(res);
  			
  		});
  	}






  }

}


 </script>

 <style scoped>


#formholder {
	margin-top: 5em;
	margin-bottom: 5em;
}

.fa-times-circle {
	cursor: pointer;
}

#errorMsg {
	display: block;
}

 </style>
