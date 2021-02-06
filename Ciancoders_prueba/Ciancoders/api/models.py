from django.db import models
import string
import random


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code

# Create your models here.


class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)


   
class Cliente(models.Model):
    correo=models.CharField(max_length=35, unique=True, primary_key=True)
    contrasena=models.CharField(max_length=15)
    Nombre=models.CharField(max_length=60)
    tipo=models.CharField(max_length=10, default="1")



class Producto(models.Model):
    Id_producto=models.CharField(max_length=40)
    Nombre=models.CharField(max_length=40)
    Vendedor=models.CharField(max_length=35)
    Cantidad=models.IntegerField()
    Descripcion=models.TextField(max_length=350)
    Precio=models.FloatField(default="1.00")


class Ventas(models.Model):
    Id_producto=models.CharField(max_length=40)
    Nombre=models.CharField(max_length=40)
    Vendedor=models.CharField(max_length=35)
    Comprador=models.CharField(max_length=40)
    Cantidad=models.IntegerField()
    Precio=models.FloatField(default="1.00")
    Fecha=models.DateTimeField(auto_now_add=True)


