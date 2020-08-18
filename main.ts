radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 1 && block == 0) {
        game.removeLife(1)
        life += -1
        basic.showNumber(life)
    } else if (receivedNumber == 1 && block == 1) {
        game.addScore(1)
    } else {
        
    }
    
    basic.showNumber(life)
})
//  shoot
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
    basic.showLeds(`
        . # . . .
        . # # # #
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(life)
})
//  block
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    block = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(5000)
    block = 0
    basic.showNumber(life)
})
let block = 0
let life = 0
radio.setGroup(1)
game.setLife(3)
life = 3
basic.showNumber(life)
basic.forever(function on_forever() {
    
})
