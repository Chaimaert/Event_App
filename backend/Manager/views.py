from django.shortcuts import render


# Create your tests here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Manager.serializers import ManagerSerializer
from Manager.models import Manager

@csrf_exempt
def Managers(request):
    if request.method=='GET':
        manager = Manager.objects.all()
        manager_serializer=ManagerSerializer(manager,many=True)
        return JsonResponse(manager_serializer.data,safe=False)
    
    
@csrf_exempt    
def Connexion(request):
    if request.method=='GET':
        email = request.GET.get('email')
        password = request.GET.get('password')
        managers = Manager.objects.all()
        manager = managers.get(email= email,password=password)
        manager_serializer=ManagerSerializer(manager)
        return JsonResponse(manager_serializer.data,safe=False)
    
