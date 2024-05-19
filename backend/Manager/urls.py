from django.contrib import admin
from django.urls import path
from Manager import views



urlpatterns = [
        path('allmgr/',views.Managers)
]
