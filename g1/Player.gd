extends Node2D

var hp = 10
var mp = 5
var skills = []

func _ready():
    print("Player ready")

func move(direction):
    match direction:
        Vector2.UP: position.y -= 10
        Vector2.DOWN: position.y += 10
        Vector2.LEFT: position.x -= 10
        Vector2.RIGHT: position.x += 10
