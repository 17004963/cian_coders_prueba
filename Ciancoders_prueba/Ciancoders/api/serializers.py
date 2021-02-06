from rest_framework import serializers
from .models import Room,Cliente,Producto,Ventas


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause',
                  'votes_to_skip', 'created_at')

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cliente
        fields=('correo','contrasena','Nombre','tipo')

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=('Id_producto','Nombre','Vendedor','Cantidad','Descripcion','Precio')

class EditeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=('Id_producto','Nombre','Cantidad','Descripcion','Precio')

class CatalogoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=('Vendedor')

class VentasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ventas
        fields=('Id_producto','Nombre','Vendedor','Comprador','Cantidad','Precio')