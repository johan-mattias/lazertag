radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 2 && my_team == 1 || receivedNumber == 1 && my_team == 2) {
        game.removeLife(1)
        life += -1
    }
    
    basic.pause(500)
    view()
})
//  block
/**  def on_button_pressed_a():
    global block, block_max
    if block_max > 0 and shooting == 0:
        block = 1
        block_max += -1
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.pause(5000)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        block = 0
    else:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
    basic.pause(500)
    view()
input.on_button_pressed(Button.A, on_button_pressed_a)

 */
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (my_team == 0) {
        my_team = 1
        basic.showIcon(IconNames.Diamond)
    } else if (my_team == 1) {
        my_team = 2
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Square)
    }
    
    basic.pause(500)
    view()
})
//  shoot
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (mag > 0 && shooting == 0) {
        shooting = 1
        if (my_team == 1) {
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
        } else if (my_team == 2) {
            radio.sendNumber(2)
            basic.clearScreen()
            led.toggle(2, 2)
            led.toggle(2, 1)
            led.toggle(2, 0)
            mag += -1
        } else {
            basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
            basic.pause(500)
            view()
        }
        
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
        mag = 3
        basic.pause(500)
        view()
    }
    
})
function view() {
    
    basic.clearScreen()
    while (plats <= life) {
        led.plot(0, plats - 1)
        plats += 1
    }
    while (plats2 <= mag) {
        led.plot(4, plats2 - 1)
        plats2 += 1
    }
    plats2 = 0
    plats = 0
}

let plats2 = 0
let plats = 0
let my_team = 0
radio.setGroup(128)
let life = 5
let mag = 3
let shooting = 0
game.setLife(life)
