<template>
    <div>
     <youtube :video-id="videoId" ref="youtube" :player-vars="playerVars"></youtube>
    </div>
</template>

<script>
export default {
  name: 'screen',
   data() {
    return {
        videoId: "Uh9643c2P6k",
        playerVars: {
            autoplay: 1
        }
    }
    },
   computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
    methods: {
    
  },
  
}
</script>
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
