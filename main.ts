input.onButtonPressed(Button.A, function () {
    if (!(sprite.get(LedSpriteProperty.Y) == 4)) {
        sprite.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(sprite.get(LedSpriteProperty.Y) == 4)) {
        sprite.change(LedSpriteProperty.X, 1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 0)
basic.forever(function () {
    if (!(sprite.get(LedSpriteProperty.Y) == 4)) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
    }
})
