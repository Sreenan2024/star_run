let projectile: Sprite = null
let star = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . 5 5 5 1 1 5 1 1 5 5 5 . . 
    . . . . 5 5 f 1 5 f 1 5 5 . . . 
    . . . . . 3 3 5 5 5 3 3 . . . . 
    . . . . . . 5 5 f 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 . 5 5 5 . . . . 
    . . . . 5 5 5 . . . 5 5 5 . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(star)
star.setStayInScreen(true)
info.setScore(0)
info.startCountdown(120)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . c c c b b b . . . . . . . 
        . . c c c b b b b b . . . . . . 
        . b a c b b b b b b b . . . . . 
        . b b b b b b b b b c c . . . . 
        b b b b b b b b b b a c c . . . 
        b b b b b b b b b b b a b . . . 
        b b b c c b b b b b b b b . . . 
        . b b c c c b b b b b b . . . . 
        . b b b a b b b b b b b . . . . 
        . . a b b b b b b b b . . . . . 
        . . . a b b b b b c . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
