from django.contrib import admin
from django.urls import path
from User import tests



urlpatterns = [
    path('users/',tests.Allusers)
]
