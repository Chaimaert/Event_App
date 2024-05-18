from django.contrib import admin
from django.urls import path
from User import views



urlpatterns = [
    path('signup/',views.Sign_up),
    path('users/',views.Get_users)
]
