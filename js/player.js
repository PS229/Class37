class Player {
    constructor() {
        this.index = null
        this.distance = 0
        this.name = null
    }
    getCount() {
        var playerref = db.ref("playerCount")
        playerref.on("value", function (data) {
            playerCount = data.val()
        })
    }
    updateCount(count) {
       db.ref("/").update({
           playerCount:count
       })
    }
    update() {
        var playerIndex = "players/player" + this.index
        db.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo() {
        var playerInforef = db.ref("players")
        playerInforef.on("value", (data) =>{
            allPlayers = data.val()
            console.log(allPlayers)
        })
    }
    
}