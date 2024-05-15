from django.test import TestCase

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
    
    
    
    elif request.method=='POST':
        manager_data=JSONParser().parse(request)
        manager_serializer=ManagerSerializer(data=manager_data)
        if manager_serializer.is_valid():
            manager_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    
    
    elif request.method=='PUT':
        manager_data=JSONParser().parse(request)
        manager=Manager.objects.get(id=id)
        manager_serializer=ManagerSerializer(manager,data=manager_data)
        if manager_serializer.is_valid():
            manager_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    
    elif request.method=='DELETE':
        manager=Manager.objects.get(id=id)
        manager.delete()
        return JsonResponse("Deleted Successfully",safe=False)