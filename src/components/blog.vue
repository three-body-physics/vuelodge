<template>
  <div>

 
    <div class="ui fixed secondary menu" id="navbar">
      <div class="ui container">
         <a href="/home" style="margin: 0px;" class="header item" id="homeNav"><i class="fa fa-home fa-2x" aria-hidden="true"></i>
        </a>           
        
        <div class="right menu" style="margin: 0px;">
          <div class="item" v-if="checkAuth()" style="margin: 0px;"><a  href="/home/new" class="ui inverted orange button">New Post</a></div>
          <div class="item" v-if="checkAuth()" style="margin: 0px;"><a class="ui item" @click="userProfile()"><i class="fa fa-user-circle fa-2x" aria-hidden="true" style="display: inline-block; letter-spacing: 2px;"></i></a></div>
          <div class="item" v-if="!checkAuth()" style="margin: 0px;"><a href="/register" class="ui inverted blue button">Register</a></div>
          <!-- <div class="item"><span class="ui item" v-show="checkAuth()"> Hello {{ checkUser() }} </span></div> -->
          <div class="item" v-if="checkAuth()" style="margin: 0px;"><a class="ui item" @click="userLogout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></div>
          

        
 
        </div>
      </div>
    </div>



<div class="ui doubling stackable centered grid" id="content">
<!-- <div class="ui doubling stackable centered grid container"> -->


  <div class="column">

    <div class="ui centered segment">
      <img class="ui centered fluid image" :src="entry.image">
      <div class="ui divider">

      </div>
      <div class="ui items">

        <div class="item">
          <div class="content">
            <div class="header">
              {{ entry.name }}
            </div>
            <div class="meta">
              Posted: {{ entry.date }} , {{ entry.author }}
            </div>
            <div class="ui divider">

            </div>
            <div class="description" id="description">
              {{ entry.text }}
            </div>
            <div class="extra">
              <p>Share this post:</p>
              <social-sharing style="display: inline-block;" v-bind:url="this.$route.path" inline-template>
                <div>
                  <network network="facebook">
                    <i class="fa fa-fw fa-facebook-square fa-2x" id="fbicon" style="cursor: pointer; margin-left: 2px;"></i>
                  </network>
                  <network network="pinterest">
                    <i class="fa fa-fw fa-pinterest fa-2x" style="cursor: pointer;"></i>
                  </network>
                  <network network="reddit">
                    <i class="fa fa-fw fa-reddit fa-2x" style="cursor: pointer;"></i>
                  </network>
                </div>
              </social-sharing>

            </div>
          </div>
        </div>

      </div>
    </div>

    <form v-show="replyBox" class="ui reply form">
      <div class="field">
        <div class="ui floating message">
          <p>Posting as: {{ checkUser() }}</p>
        </div>
        <textarea placeholder="type your comment here" id="commentbox" v-model="comment.comment"></textarea>
      </div>
      <div class="ui blue labeled submit icon button" @click="postComment()">
        <i class="icon edit"></i> Add Reply
      </div>
    </form>

    <div class="ui segment" id="commentSession">



      <div v-bind:class='buttonClass' @click="toggleReply()">
        Add Comment
      </div>

      <div class="ui comments">
        <h3 class="ui dividing header">{{ entry.comments.length | commentText("comment") }} </h3>


        <div v-for="comment in entry.comments" class="comment">
          <a class="avatar">
          <i class="big user circle icon"></i>
        </a>
          <div class="content">
            <i class="author">{{ comment.author.username }}</i>
            <div class="metadata">
              <span class="date"> {{ comment.date }} </span>
            </div>
            <div class="text">
              {{ comment.comment }}
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
  data() {
    return {
      id: this.$route.params.id,
      entry: {},
      replyBox: false,
      comment: {        
        comment: "",
        
      },
      
    }
  },

  computed: {
    buttonClass: function(){
      return {
        "ui right floated blue button": this.checkAuth(),
         "ui right floated blue disabled button": !this.checkAuth()
      }
    }

  },

  created() {
    this.postReq();
    this.checkAuth();
    

},

  filters: {

    commentText: function(text, string) {
      if (text >= 2) {
        return text + " comments";
      } else {
        return text + " comment";
      }
    }
  },

methods: {
  postComment() {

    var self = this;

    this.$http.post("/api/home/entry/" + this.id, {_id: this.id, content: this.comment, userId: localStorage.getItem("userId"), username: localStorage.getItem("username"), date: this.getTimeStamp()}, {headers: {Authorization: "Bearer " + localStorage.getItem("JWTtoken")}}).then( function(res) {

      console.log(res.body.post);

      this.entry = res.body.post;


    }, function(res) {
      console.log(res);
    });
      
 
  },


  userProfile() {
    this.$router.push("/home/user/" + localStorage.getItem("username"));
  },



   checkAuth() {

      var tk = "token: " + localStorage.getItem("JWTtoken");      

      if (tk.length < 20) {
      
        return false;
      } else {
        
        return true;
      }

    },

  toggleReply() {
    this.replyBox = !this.replyBox;

  },

      userLogout() {
      localStorage.removeItem("JWTtoken");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
     
      var self = this;
      setTimeout(function() {self.$router.push("/logout");}, 1000);   

       
    },

    checkUser() {
      var who = "" + localStorage.getItem("username");
      return who; 
    },

       checkAuth() {

      var tk = "token: " + localStorage.getItem("JWTtoken");      

      if (tk.length < 20) {
        return false;
      } else {
        return true;
      }

    },


  postReq() {
    this.$http.get("/api/home/entry/" + this.id, {
      flag: "hi"
    }).then(function(data) {

      this.entry = data.body;
      
    }, function(res) {
      console.log(res);
    });

  },

      getTimeStamp() {
      var now = new Date();
      var day = now.getDate();
      var month = now.getMonth() + 1;
      var year = now.getFullYear();

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return day + "/" + month + "/" + year;


    }

}
}
</script>

<style scoped>


#description {
  font-family:  helvetica, arial, sans-serif;
  line-height: 2rem;
  word-break: break-word;
  font-size: 12pt;
}

#commentSession {
  margin-top: 2em;
  margin-bottom: 2em;
}



#commentbox {
  margin-top: 0.5em;
}

#content {
  margin: 0.01%;
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

.masthead {
  background: url("../assets/hero3.jpg") no-repeat center center fixed !important;
}

.right.menu {
  margin-right: 1em;
}



/*.comment {
  margin-top: 3em;
}*/
</style>
