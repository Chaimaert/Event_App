from django.contrib import admin
from django.urls import path
from Organisateur import tests



urlpatterns = [
    path('allorg/',tests.Allorg)
]
