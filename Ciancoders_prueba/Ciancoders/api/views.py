from django.shortcuts import render
from rest_framework import generics,status
from .serializers import RoomSerializer,ClienteSerializer,ProductoSerializer,EditeSerializer,CatalogoSerializer,VentasSerializer
from .models import Room,Cliente,Producto,Ventas
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.db.models import Q

# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class ClienteView(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ProductView(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class VentasView(generics.ListCreateAPIView):
    queryset = Ventas.objects.all()
    serializer_class = VentasSerializer


class CreateClient(APIView):
    parser_classes = [JSONParser]
    serializer_class = ClienteSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            correo=serializer.data.get('correo')
            contrasena=serializer.data.get('contrasena')
            nombre=serializer.data.get('Nombre')
            tipo=serializer.data.get('tipo')
        cliente=Cliente(correo=correo,contrasena=contrasena,Nombre=nombre,tipo=tipo)
        cliente.save()
        return Response(ClienteSerializer(cliente).data,status=status.HTTP_201_CREATED)


class CreateProduct(APIView):
    serializer_class = ProductoSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        print(serializer)
        Id_producto=serializer.data.get('Id_producto')
        Nombre=serializer.data.get("Nombre")
        Vendedor=serializer.data.get("Vendedor")
        Cantidad=serializer.data.get("Cantidad")
        Descripcion=serializer.data.get("Descripcion")
        Precio=serializer.data.get("Precio")
        producto=Producto(Id_producto=Id_producto,Nombre=Nombre,Vendedor=Vendedor,Cantidad=Cantidad,Descripcion=Descripcion,Precio=Precio)
        producto.save()
        return Response(ProductoSerializer(producto).data,status=status.HTTP_201_CREATED)


class Iniciar_Sesion(APIView):
    print("aqui estamos")
    serializer_class = ClienteSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        if (serializer.data.get('correo')):
            correo=serializer.data.get('correo')
            contrasena=serializer.data.get('contrasena')
        queryset = Cliente.objects.filter(correo=correo,contrasena=contrasena)
        if not queryset:
            return Response({},status=status.HTTP_200_OK)
        else:
            return Response({'correo':correo,'tipo':ClienteSerializer(queryset[0]).data.get('tipo')},status=status.HTTP_200_OK)

class List_Myproducts(APIView):
    serializer_class = ProductoSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        correo=serializer.data.get('Id_producto')
        productos=Producto.objects.filter(Vendedor=correo).values()
        product_list=list(productos)
        if(product_list):
            return Response(product_list)
        else:
            return Response({})

class EditProduct(APIView):
    serializer_class = EditeSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if(serializer.is_valid()):
            Id_producto=serializer.data.get('Id_producto')
            Nombre=serializer.data.get("Nombre")
            Cantidad=serializer.data.get("Cantidad")
            Descripcion=serializer.data.get("Descripcion")
            Precio=serializer.data.get("Precio")
        Producto.objects.filter(Id_producto=Id_producto).update(Nombre=Nombre,Cantidad=Cantidad,Descripcion=Descripcion,Precio=Precio)
        return Response({"Succes":True},status=status.HTTP_200_OK)

class deleteProduct(APIView):
    serializer_class = EditeSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        print(serializer.data)
        Id_producto=serializer.data.get('Id_producto')
        Producto.objects.filter(Id_producto=Id_producto).delete()
        return Response({"Succes":True},status=status.HTTP_200_OK)

class Catalogo(APIView):
    serializer_class = ProductoSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        correo=serializer.data.get('Id_producto')
        productos=Producto.objects.filter((~Q(Vendedor=correo))).values()
        product_list=list(productos)
        if(product_list):
            return Response(product_list)
        else:
            return Resposte({})

class Ventas_view(APIView):
    serializer_class = VentasSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if(serializer.is_valid()):
            print(serializer.data)
            Id_producto=serializer.data.get('Id_producto')
            Nombre=serializer.data.get("Nombre")
            Vendedor=serializer.data.get("Vendedor")
            Comprador=serializer.data.get("Comprador")
            Cantidad=serializer.data.get("Cantidad")
            Precio=serializer.data.get("Precio")
            venta=Ventas(Id_producto=Id_producto,Nombre=Nombre,Vendedor=Vendedor,Comprador=Comprador,Cantidad=Cantidad,Precio=Precio)
            venta.save()
            cantidad=Producto.objects.filter(Id_producto=Id_producto).only('Cantidad')
            nueva_cantidad = ((cantidad.values_list('Cantidad', flat=True))[0] - Cantidad)
            Producto.objects.filter(Id_producto=Id_producto).update(Cantidad=nueva_cantidad)
            return Response({"Succes":True},status=status.HTTP_200_OK)

class Reporte_producto(APIView):
    serializer_class = VentasSerializer
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        final=list()
        correo=serializer.data.get('Id_producto')
        lista_ventas=list(Ventas.objects.filter(Vendedor=correo).values())
        dict={}
        for i  in lista_ventas:
            print(i["Id_producto"])
            x=0
            if i["Nombre"] in dict:
                print("ua esta")
            else:
                dict[i["Nombre"]]=0
        for i in lista_ventas:
            dict[i["Nombre"]]=(dict[i["Nombre"]]+ (i["Cantidad"]*i["Precio"] ))
        print(dict  )   
        for key in dict:
            final.append({key:dict[key]})
    
        return Response(final,status=status.HTTP_200_OK)

class Reporte_global(APIView):
    serializer_class = VentasSerializer
    final=list()
    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        final=list()
        correo=serializer.data.get('Id_producto')
        lista_ventas=list(Ventas.objects.filter(Vendedor=correo).values())
        dict={"Total":0}
        for i  in lista_ventas:
            dict["Total"]=dict["Total"]+(i["Cantidad"]*i["Precio"] )
        for key in dict:
            final.append({key:dict[key]})
        return Response(final,status=status.HTTP_200_OK)

class Reporte_promedio(APIView):
    serializer_class = VentasSerializer
    def post(self,request,format=None):
        product=list()
        final=list()
        product=list()
        cont=0
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid()
        correo=serializer.data.get('Id_producto')
        lista_ventas=list(Ventas.objects.filter(Vendedor=correo).values())
        dict={"Total":0}
        for i  in lista_ventas:
            dict["Total"]=dict["Total"]+(i["Cantidad"]*i["Precio"] )
            if i["Id_producto"] not in product:
                product.append(i["Id_producto"])
                cont=cont+1
        dict["Total"]=dict["Total"]/cont
        for key in dict:
            final.append({key:dict[key]})
        return Response(final,status=status.HTTP_200_OK)

            



