namespace SpriteKind {
    export const Decoration = SpriteKind.create()
    export const ememy2 = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 100)
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 100)
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ememy2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.clouds, 100)
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 100)
    info.changeScoreBy(1)
})
let MYememy2: Sprite = null
let myfood: Sprite = null
let myfood2: Sprite = null
let myfood3: Sprite = null
let myenemy: Sprite = null
let mydecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(60)
for (let index = 0; index < 10; index++) {
    mydecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    mydecor.setPosition(randint(0, 160), 96)
}
game.onUpdateInterval(5000, function () {
    myenemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    myenemy.setPosition(scene.screenWidth(), randint(0, 115))
    myenemy.vx = -75
})
game.onUpdateInterval(11000, function () {
    myfood3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.Projectile)
    myfood3.setPosition(scene.screenWidth(), randint(5, 115))
    myfood3.vx = -75
})
game.onUpdateInterval(1700, function () {
    myfood2 = sprites.create(assets.image`food0`, SpriteKind.Food)
    myfood2.setPosition(scene.screenWidth(), randint(5, 115))
    myfood2.vx = -75
})
game.onUpdateInterval(2100, function () {
    myfood = sprites.create(assets.image`food`, SpriteKind.Food)
    myfood.setPosition(scene.screenWidth(), randint(5, 115))
    myfood.vx = -75
})
game.onUpdateInterval(8000, function () {
    MYememy2 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ememy2)
    MYememy2.setPosition(scene.screenWidth(), randint(5, 115))
    MYememy2.vx = -75
})
