from django.contrib import admin
from django.urls import path
from Demande import views



urlpatterns = [
    path('current/',views.Current),
    path('accept/',views.Accepted),
    path('refus/',views.Refused),
    path('accept_dem/<int:id_dem>',views.Accept),
    path('refus_dem/<int:id_dem>',views.Refus)
     
]
