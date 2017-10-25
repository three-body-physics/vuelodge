<template>

  <div class="ui centered middle aligned stackable grid container" id="body">
    <div class="ui stackable cards grid" id="ui-overrides">

      <div v-for="entry in entries" class="doubling centered five wide column card">
        <div @click="goToBLog(entry._id)" class="image">
          <img v-bind:src="entry.image">
        </div>
        <div class="content">
          <a @click="goToBLog(entry._id)" class="header">
          {{ entry.name }}
        </a>
          <div class="meta">
            <span class="date">Posted: </span>
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">
            {{ entry.text | limitText(150) }}
            <div class="ui divider">
            </div>
          </div>
          <!-- <span class="right floated">
      <i class="heart outline like icon"></i>
      17 likes
    </span> -->
          <i class="comment icon"></i><span id="comments" @click="goToBLog(entry._id)"> {{ entry.comments.length }} comments </span>
        </div>
        <button @click="goToBLog(entry._id)" class="ui inverted blue button">Read More
      </button>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      entries: [],

    }
  },
  created() {
    this.getBlogs();

  },

  methods: {
    getBlogs() {
      this.$http.get("/api/blogs", {
        flag: "hello"
      }).then(function(data) {
        this.entries = data.body;
      });

    },
    goToBLog(id) {
      this.$router.push("/home/blog/" + id);
    },


    // read() {
    //   this.$http.get("/blogs/123045").then(function(data) {
    //     console.log("vue says hi");
    //   });
    // },

  },

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
.container {
  margin-top: 2em;
}


/*#blogpost:nth-child(n+1) {
  margin-top: 4em;
}*/

img {
  margin-bottom: 1em;
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
