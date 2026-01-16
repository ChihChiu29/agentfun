extends Node2D

const UP = Vector2(0, -1)
const DOWN = Vector2(0, 1)
const LEFT = Vector2(-1, 0)
const RIGHT = Vector2(1, 0)

var hp = 10
var mp = 5
var skills = []

func _ready():
    print("Player ready")

func move(direction):
    match direction:
        UP: position += direction * 10
        DOWN: position += direction * 10
        LEFT: position += direction * 10
        RIGHT: position += direction * 10
