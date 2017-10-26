<template>
<div id="holder">

  <!-- <div class="ui button" @click="toggleLogin()">
      login
    </div> -->

  <div v-show="loginForm" id="formholder" class="ui middle aligned center aligned grid">
    <div class="six wide computer only column">
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
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="#">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Please enter your username</li>
            <li>Password must be at least 6 digits long</li>
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
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="#">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Please enter your username</li>
            <li>Password must be at least 6 digits long</li>
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
            login
          </div>
          <div class="ui message">
            "New to us?"
            <a href="#">Register here</a>
          </div>

        </div>
        <div v-show="errorForm" class="ui error message" id="errorMsg">
          <ul class="list">
            <li>Please enter your username</li>
            <li>Password must be at least 6 digits long</li>
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
            <span class="date">Posted: {{ entry.date }} </span>
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">
            {{ entry.text | limitText(150) }}
            <div class="ui divider">
            </div>
          </div>

          <i class="comment icon"></i><span id="comments" @click="goToBLog(entry._id)"> {{ entry.comments.length }} comments </span>
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
export default {


  data() {
    return {
      entries: [],
      entryHolder: [],
      activeEntries: [],
      errorForm: false,
      loginForm: false,
      activePage: 0,
      pages: []

    }
  },
  created() {
    this.getBlogs();

  },

  updated() {
    console.log(this.entries.length);
  },

  // updated() {
  //   this.getBlogs();
  // },

  methods: {
    getBlogs() {
      this.$http.get("/api/blogs", {
        flag: "hello"
      }).then(function(data) {

        this.entries = data.body.reverse();
        console.log(this.entries.length);
        this.divideEntries();
      }).catch(function(error) {
        console.log(error);
      });

    },

    pageToggle(num) {
      this.activePage = num;
      this.pagination();
    },

    goToBLog(id) {
      this.$router.push("/home/blog/" + id);
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




    // read() {
    //   this.$http.get("/blogs/123045").then(function(data) {
    //     console.log("vue says hi");
    //   });
    // },

  },

  // watch: {
  //   '$route' (to, from) {
  //
  //         if (from.params.id !== to.params.id) {
  //
  //           console.log("route changed");
  //
  //         }
  //       }
  // },

  filters: {
    limitText: function(text, limit) {
      if (text.length < 100) {
        return text;
      } else {
        return text.substring(0, limit) + "...";
      }
    }
  }
}
</script>

<style scoped>
/*#holder {
  position: relative;


}*/

#pagination {
  margin-top: 3em;
  margin-bottom: 1em;
}

#formholder {
  position: relative;
  z-index: 1;
}


#formholder .column {
  position: fixed;
  background: rgba(255, 255, 255, 1);
}

.container {
  margin-top: 2em;
}

#mobileform {
  top: 20%;
}

#errorMsg {
  display: block;
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



/*.row {
   display: flex;
   flex-wrap: wrap;
 }*/
</style>
