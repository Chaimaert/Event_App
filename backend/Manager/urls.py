from django.contrib import admin
from django.urls import path
from Manager import tests



urlpatterns = [
        path('managers/',tests.Managers)
]
