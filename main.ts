radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && block == 0) {
        game.removeLife(1)
        life += -1
        basic.showNumber(life)
    } else if (receivedNumber == 1 && block == 1) {
        game.addScore(1)
        block = 0
    }
    basic.pause(500)
    view()
})
// block
input.onButtonPressed(Button.A, function () {
    if (block_max > 0) {
        block = 1
        block_max += -1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        block = 0
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    view()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    mag = 5
    view()
})
// shoot
input.onButtonPressed(Button.B, function () {
    if (mag > 0) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        mag += -1
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(500)
    view()
})
function view () {
    for (let plats = 0; plats <= life; plats++) {
        led.plot(0, plats)
    }
    for (let plats = 0; plats <= mag; plats++) {
        led.plot(4, plats)
    }
}
let block_max = 0
let block = 0
let mag = 0
let life = 0
radio.setGroup(1)
game.setLife(3)
life = 2
mag = 4
block = 0
block_max = 3
view()
