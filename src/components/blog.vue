<template>
<div class="ui doubling stackable centered grid container">

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

    <div class="ui segment" id="commentSession">

      <form class="ui reply form">
        <div class="field">
          <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Add Reply
        </div>
      </form>

      <div class="ui comments">
        <h3 class="ui dividing header">Comments</h3>

        <div class="comment">
          <a class="avatar">
          <i class="big user circle icon"></i>
        </a>
          <div class="content">
            <a class="author">Matt</a>
            <div class="metadata">
              <span class="date">Today at 5:42PM</span>
            </div>
            <div class="text">
              How artistic!
            </div>

          </div>
        </div>

        <div class="comment">
          <a class="avatar">
          <i class="big user circle icon"></i>
        </a>
          <div class="content">
            <a class="author">Matt</a>
            <div class="metadata">
              <span class="date">Today at 5:42PM</span>
            </div>
            <div class="text">
              How artistic!
            </div>
            <!-- <div class="actions">
              <a class="reply">Reply</a>
            </div> -->
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
      entry: {}
    }
  },

  created() {
    this.$http.get("/api/blogs/" + this.id, {
      flag: "hi"
    }).then(function(data) {

      this.entry = data.body
      console.log(data);
    });

},

methods: {
  postComment() {

  }
}
}
</script>

<style scoped>
.container {
  margin-top: 3em;
}

#commentSession {
  margin-top: 5em;
}

.fa-facebook {
  margin-left: 1em;

  cursor: pointer;
}



/*.comment {
  margin-top: 3em;
}*/
</style>
