
from django.shortcuts import render

# Create your tests here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Organisateur.serializers import OrganisateurSerializer
from Organisateur.models import Organisateur
from User.models import User

@csrf_exempt
def Organisateurs(request):
    if request.method=='GET':
        org = Organisateur.objects.all()
        org_serializer=OrganisateurSerializer(org,many=True)
        return JsonResponse(org_serializer.data,safe=False)
    

@csrf_exempt
def Connexion(request,email,password):
    if request.method=='GET':
        orgs = Organisateur.objects.all()
        org = orgs.get(email= email,password=password)
        org_serializer=OrganisateurSerializer(org)
        return JsonResponse(org_serializer.data,safe=False)
    
@csrf_exempt
def Inscription(request):    
    if request.method=='POST':
        org_data=JSONParser().parse(request)
        email=org_data.get('email')
        try:
            existing_user = Organisateur.objects.get(email=email)
            return JsonResponse("User already exists", safe=False)
        except Organisateur.DoesNotExist:
            org_serializer = OrganisateurSerializer(data=org_data)
            if org_serializer.is_valid():
                org_serializer.save()
                return JsonResponse("Added successfully", safe=False)
            return JsonResponse("Failed to add", safe=False)
    
    
"""
    elif request.method=='PUT':
        org_data=JSONParser().parse(request)
        org=Organisateur.objects.get(id=id)
        org_serializer=OrganisateurSerializer(org,data=org_data)
        if org_serializer.is_valid():
            org_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        org=Organisateur.objects.get(id=id)
        org.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    
"""
