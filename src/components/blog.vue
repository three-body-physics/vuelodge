<template>
<div class="ui doubling stackable centered grid" id="content">
<!-- <div class="ui doubling stackable centered grid container"> -->
  <div class="column">

    <div class="ui segment">
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
              Posted By
            </div>
            <div class="ui divider">

            </div>
            <div class="description">
              {{ entry.text }}
            </div>
            <div class="extra">
              Additional Details
              <social-sharing url="https://vuejs.org/" inline-template>
                <div>
                  <network network="facebook">
                    <i class="fa fa-facebook"></i> facebook
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
        <input type="text" placeholder="Username" v-model="comment.author">
        <textarea placeholder="type your comment here" id="commentbox" v-model="comment.comment"></textarea>
      </div>
      <div class="ui blue labeled submit icon button" @click="postComment()">
        <i class="icon edit"></i> Add Reply
      </div>
    </form>

    <div class="ui segment" id="commentSession">



      <div class="ui right floated blue button" @click="toggleReply()">
        Add Comment
      </div>

      <div class="ui comments">
        <h3 class="ui dividing header">Comments</h3>


        <div v-for="comment in entry.comments" class="comment">
          <a class="avatar">
          <i class="big user circle icon"></i>
        </a>
          <div class="content">
            <a class="author">{{ comment.author }}</a>
            <div class="metadata">
              <span class="date">Today at 5:42PM</span>
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
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      entry: {},
      replyBox: true,
      comment: {
        author: "",
        comment: ""
      }
    }
  },

  created() {
    this.postReq();

},

methods: {
  postComment() {
    this.$http.post("/api/blogs/" + this.id, {_id: this.id, content: this.comment}, function(res) {
      console.log(res)

    });
      this.entry.comments.push(this.comment);
    // this.$router.push("/home/blog/" + this.id);

  },

  toggleReply() {
    this.replyBox = !this.replyBox;

  },

  postReq() {
    this.$http.get("/api/blogs/" + this.id, {
      flag: "hi"
    }).then(function(data) {

      this.entry = data.body;
      console.log("request made!");
    });

  }

}
}
</script>

<style scoped>
.container {
  margin-top: 3em;
}

#commentSession {
  margin-top: 2em;
}

.fa-facebook {
  margin-left: 1em;

  cursor: pointer;
}

#commentbox {
  margin-top: 0.5em;
}

#content {
  margin: 0.01%;
}



/*.comment {
  margin-top: 3em;
}*/
</style>
