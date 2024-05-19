from django.contrib import admin
from django.urls import path
from Demande import views



urlpatterns = [
    path('manager/current/',views.CurrentM),
    path('org/current/<str:email>/',views.CurrentO),
    path('manager/accept/',views.Accepted),
    path('manager/refus/',views.Refused),
    path('manager/accept_dem/<int:id_dem>',views.Accept),
    path('manager/refus_dem/<int:id_dem>',views.Refus),
    path( 'org/add/',views.Add)
     
]
