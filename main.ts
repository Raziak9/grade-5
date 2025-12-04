let Animal = 0
input.onGesture(Gesture.Shake, function () {
    Animal = randint(1, 2)
    if (true) {
        basic.showIcon(IconNames.Giraffe)
    } else {
        basic.showIcon(IconNames.Duck)
    }
})
basic.forever(function () {
	
})
