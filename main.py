def on_received_number(receivedNumber):
    global life
    if receivedNumber == 1 and block == 0:
        game.remove_life(1)
        life += -1
        basic.show_number(life)
    elif receivedNumber == 1 and block == 1:
        game.add_score(1)
    else:
        pass
    basic.show_number(life)
radio.on_received_number(on_received_number)

# shoot

def on_button_pressed_a():
    radio.send_number(1)
    basic.show_leds("""
        . # . . .
        . # # # #
        . # . . .
        . # . . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_number(life)
input.on_button_pressed(Button.A, on_button_pressed_a)

# block

def on_button_pressed_b():
    global block
    block = 1
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    basic.pause(5000)
    block = 0
    basic.show_number(life)
input.on_button_pressed(Button.B, on_button_pressed_b)

block = 0
life = 0
radio.set_group(1)
game.set_life(3)
life = 3
basic.show_number(life)

def on_forever():
    pass
basic.forever(on_forever)
