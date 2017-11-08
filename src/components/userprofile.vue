<template>

<div style="position: relative;">

	    <div class="ui fixed secondary menu" id="navbar">
      <div class="ui container">
         <router-link to="/home" style="margin: 0px;" class="header item" id="homeNav"><i class="fa fa-home fa-2x" aria-hidden="true"></i>
        </router-link>           
        
        <div class="right menu" style="margin: 0px;">
          <div class="item" v-if="checkAuth()" style="margin: 0px;"><router-link  to="/home/new" class="ui inverted orange button">New Post</router-link></div>
     
          <!-- <div class="item"><span class="ui item" v-show="checkAuth()"> Hello {{ checkUser() }} </span></div> -->
          <div class="item" v-if="checkAuth()" style="margin: 0px;"><a class="ui item" @click="userLogout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></div>
          

        
 
        </div>
      </div>
    </div>

  <div id="formholder" v-if="deleteCofirmation" class="ui middle aligned center aligned doubling grid">

    
    <div class="computer only tablet only sixteen wide column" style="background: white;">
      <h2 class="ui red image header">
          <div class="content" style="padding: 1em;">
            Type Yes to proceed
            <i class="fa fa-times-circle" style="cursor: pointer;" @click="toggleDelete()"></i>
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" placeholder="type yes to confirm" v-model="yesString">
            </div>
          </div>
          <div v-bind:class="yesClass" @click="deleteRequest()">
            Delete
          </div>   

        </div>
        <div v-show="errorDelete" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Delete request failed, no permission</li>            
          </ul>
        </div>

      </form>
    </div>
  

</div>

  <div id="mobileFormholder" v-if="deleteCofirmation" class="ui mobile only middle aligned center aligned grid">

    <div class="row">
    <div class="sixteen wide column" style="background: white;">
      <h2 class="ui red image header">
          <div class="content">
            Type Yes to proceed
            <i class="fa fa-times-circle" style="cursor: pointer;" @click="toggleDelete()"></i>
          </div>
        </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" placeholder="type yes to confirm" v-model="yesString">
            </div>
          </div>
          <div v-bind:class="yesClass" @click="deleteRequest()">
            Delete
          </div>   

        </div>
        <div v-show="errorDelete" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Delete request failed, no permission</li>            
          </ul>
        </div>

      </form>
    </div>
    </div>

</div>

<div class="ui stackable centered doubling grid" style="background: white; margin-bottom: 4em; margin-top: 6em">
  <div class="ten wide column">
  	<div class="ui container" style="margin-top: 2em;">
  	<div class="ui center aligned text container" style="margin-top: 2em; margin-bottom: 2em;">
  		<div class="row">
  			<i class="fa fa-user-circle fa-5x" aria-hidden="true" style="display: inline-block; letter-spacing: 2px;"></i>
  		</div>
  		<div class="row">
  			<h1>{{ checkUser() }}</h1>  			
  		</div>
    		
  	</div>

  			<div class="ui feed">

  				<h3>Activity</h3>
  				<div class="ui divider"></div>

  				<div v-for="entry in entries" class="event" style="margin-top: 1em;">

  					<div class="content">
  						<div class="summary">
  							{{ entry.author }} added a post titled: {{ entry.name }}
  							<div class="date"> {{ entry.date }} </div>
  						</div>
  						<div class="extra images">
  							<a @click="goToPost(entry._id)"><img v-bind:src="entry.image"></a>
  						</div>
  						<div class="meta">
  							<i style="display: block;"> {{ entry.comments.length }} comments</i>
  							<div style="margin: 10px 0px 0px 0px;" class="ui red button" @click="toggleDelete(entry._id)">Delete</div>
  						</div>  						
  					</div> 					

  				</div>

  			</div>
    
  </div>
  </div>
</div>

</div>

</template>

<script>
export default {
  
  data () {
    return {
    	entries: [],
    	error: false,
    	errorMessage: "",
    	errorDelete: false,
    	errorMessageDelete: "",
    	deleteCofirmation: false,
    	userPass: "",
    	postToDelete: "",
    	yesString: ""

    }
  },

  created() {
  	this.getUserPosts();
  },

  methods: {

  	 checkUser() {
      var who = "" + localStorage.getItem("username");
      return who; 
    },

    getUserPosts() {
    	var self = this;

    	this.$http.post("https://young-sands-22811.herokuapp.com/api/home/user/" + localStorage.getItem("userId"), {userId: localStorage.getItem("userId"), username: localStorage.getItem("username")}, {headers: {Authorization: "Bearer " + localStorage.getItem("JWTtoken")}}).then(function(res){
    		if(res.body.success === false) {
    			this.error = true;
    			this.errorMessage = res.body.message;
    		} else {
    			this.entries = res.body.entries.reverse();
    		}
    	}, function(res) {
    		this.error = true;
    		this.errorMessage = "Something went wrong";
    		console.log(res)
    	});
    },

    goToPost(id) {

    	this.$router.push("/home/entry/" + id);

    
  },

  deleteRequest() {

  	this.$http.delete("https://young-sands-22811.herokuapp.com/api/home/entry/" + this.postToDelete, {headers: {Authorization: "Bearer " + localStorage.getItem("JWTtoken")}}).then(function(res){
  			if(res.body.success === false) {
  				this.errorDelete = true;
  				this.errorMessageDelete = res.body.message;
  			} else {
  				this.getUserPosts();
  			}

  	}, function(res) {

  		this.errorDelete = true;
  		this.errorMessageDelete = "Request cannot be made."

  	});
  },

  toggleDelete(postID) {

  	if(postID) {

  	this.postToDelete = postID;
  	this.deleteCofirmation = !this.deleteCofirmation;

  } else {

  	this.postToDelete = "";
  	this.deleteCofirmation = !this.deleteCofirmation;

  	}
  },

    	yesConfirmation() {

  		if (this.yesString.toLowerCase() === "yes") {
  			return true;
  		} else {
  			return false;
  		}
  	},

  	       checkAuth() {

      var tk = "token: " + localStorage.getItem("JWTtoken");      

      if (tk.length < 20) {
        return false;
      } else {
        return true;
      }

    },

          userLogout() {
      localStorage.removeItem("JWTtoken");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
     
      var self = this;
      setTimeout(function() {self.$router.push("/logout");}, 1000);   

       
    }

},

  computed: {
  	yesClass: function() {
  	
  		return {
  			"ui fluid large red submit button": this.yesConfirmation(),
  			"ui fluid large red submit disabled button": !this.yesConfirmation()
  		}

  	}
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



#formholder {
	position: fixed;	
	top: 35%;
  left: 40.5%;	
	z-index: 1;
}

#mobileFormholder {
  position: fixed;
  top: 35%;
  left: 20%;
  z-index: 1;
}

@import url('https://fonts.googleapis.com/css?family=Catamaran|Montserrat:300i');


.menu {
  background: white;
}

#navbar {
 
  background: white;

}

#navbar a {
  font-family: 'Catamaran', sans-serif;
  font-size: 1em;
  font-weight: bold;
  
}

.right.menu {
  margin-right: 1em;
}


</style>
