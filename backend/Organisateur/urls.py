from django.contrib import admin
from django.urls import path
from Organisateur import views



urlpatterns = [
    path('allorg/',views.Allorg)
]
