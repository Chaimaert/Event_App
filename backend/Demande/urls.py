from django.contrib import admin
from django.urls import path
from Demande import tests



urlpatterns = [
    path('current/',tests.Current),
    path('accept/',tests.Accepted),
    path('refus/',tests.Refused),
    path('accept_dem/<int:id_dem>',tests.Accept),
    path('refus_dem/<int:id_dem>',tests.Refus)
     
]
