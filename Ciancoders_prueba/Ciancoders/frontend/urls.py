
from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path('Catalogo',index),
    path('Carrito',index),
    path('Registro',index),
    path('Iniciar_Sesion',index),
    path('Agregar',index),
    path('Editar',index),
    path('Reportes',index),
    path('Editando',index),
    path('Comprar',index),
    path('Reporte_Producto',index),
    path('Reporte_global',index),
    path('Reporte_Promedio',index),
]
