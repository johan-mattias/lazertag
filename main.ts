radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 2 && block == 0 && my_team == 1 || receivedNumber == 1 && block == 0 && my_team == 2) {
        game.removeLife(1)
        life += -1
    } else if (block == 1) {
        game.addScore(1)
        block = 0
        block_max += 1
    }
    
    basic.pause(500)
    view()
})
//  block
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (block_max > 0 && shooting == 0) {
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
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (my_team == 0) {
        my_team = 1
    } else if (my_team == 1) {
        my_team = 2
    }
    
})
//  shoot
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (mag > 0 && block == 0 && shooting == 0) {
        my_team = 0
        shooting = 1
        if (my_team == 1) {
            radio.sendNumber(1)
        } else if (my_team == 2) {
            radio.sendNumber(2)
        } else {
            basic.showString("no team")
        }
        
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
        shooting = 0
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
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    if (mag <= 0) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # # # .
                `)
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        mag = 5
        view()
    }
    
})
function view() {
    
    while (plats <= life) {
        led.plot(0, plats - 1)
        plats += 1
    }
    while (plats2 <= mag) {
        led.plot(4, plats2 - 1)
        plats2 += 1
    }
    while (plats3 <= block_max) {
        led.plot(2, plats3 - 1)
        plats3 += 1
    }
}

let plats3 = 0
let plats2 = 0
let plats = 0
let my_team = 0
let shooting = 0
let block_max = 0
let block = 0
let mag = 0
let life = 0
let blocking = 0
radio.setGroup(128)
life = 5
mag = 3
block = 0
block_max = 3
shooting = 0
game.setLife(life)
view()
