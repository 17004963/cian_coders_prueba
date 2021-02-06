from django.urls import path
from .views import RoomView,ClienteView,CreateClient,Iniciar_Sesion,ProductView,CreateProduct,List_Myproducts,EditProduct,deleteProduct,Catalogo,Ventas_view,VentasView,Reporte_producto,Reporte_global,Reporte_promedio
urlpatterns = [
    path('room', RoomView.as_view()),
    path('clientes_view',ClienteView.as_view()),
    path('crear_clientes',CreateClient.as_view()),
    path('Iniciar_Sesion',Iniciar_Sesion.as_view()),
    path('productos',ProductView.as_view()),
    path('agregar_producto',CreateProduct.as_view()),
    path('productos_list',List_Myproducts.as_view()),
    path('edit_product',EditProduct.as_view()),
    path('delete_product',deleteProduct.as_view()),
    path('Catalogo_List',Catalogo.as_view()),
    path('Ventas_List',Ventas_view.as_view()), 
    path('Ver_ventas',VentasView.as_view()),
    path('Reporte_producto',Reporte_producto.as_view()),
    path('Reporte_global',Reporte_global.as_view()),
    path('Reporte_promedio',Reporte_promedio.as_view()),

]


