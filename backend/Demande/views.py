from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Demande.serializers import DemandeSerializer
from Demande.models import Demande
from Local.models import Local
from .models import Organisateur
from datetime import datetime
from django.core.mail import send_mail
from Organisateur.models import Organisateur
from Manager.models import Manager
from Local.models import Local

@csrf_exempt
def CurrentM(request):
    if request.method=='GET':
        demandes = Demande.objects.all()
        
        demande_serializer = DemandeSerializer(demandes,many=True)
        return JsonResponse(demande_serializer.data, safe=False)



@csrf_exempt
def CurrentO(request):
    if request.method=='GET':

        organisateur = Organisateur.objects.get(id=request.GET.get('id'))
        demandes_en_cours = Demande.objects.all()
        demandes = demandes_en_cours.filter(etat=Demande.Etat.ENCOURS, org=organisateur)
        
        demande_serializer = DemandeSerializer(demandes,many=True)
        return JsonResponse(demande_serializer.data, safe=False)
    
@csrf_exempt
def Accepted(request):
    accepted = Demande.objects.filter(etat=Demande.Etat.ACCEPTE)
    data = []
    for demande in accepted:
        local= Local.objects.get(id= demande.id)
        demande_data = {
            'id' : demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin, 
            'commite' : demande.commite,
            'description' : demande.description,
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            'titre' : demande.titre,
            #'local': local.nom
            
        }
        data.append(demande_data)
    return JsonResponse(data,safe=False)

@csrf_exempt
def Refused(request):
    refused = Demande.objects.filter(etat=Demande.Etat.REFUSE)
    data = []
    for demande in refused :
        local= Local.objects.get(id= demande.id)
        demande_data = {
            'id' : demande.id,
            'etat': demande.etat,
            'besoin': demande.besoin, 
            'commite' : demande.commite,
            'start_date' : demande.start_date,
            'end_date': demande.end_date,
            'description' : demande.description,
            'titre' : demande.titre,
            #'local': local.id
        }
        
        data.append(demande_data)
    return JsonResponse(data,safe=False)


@csrf_exempt
def Accept(request):
    if request.method == 'PUT':
        dem_data = JSONParser().parse(request)
        dem = Demande.objects.get(id=dem_data.get('id'))
        dem.etat= Demande.Etat.ACCEPTE
        dem.save()
        org = Organisateur.objects.get(id=dem_data.get('org'))
        
        send_mail(
            'Result of your Request',
            f'Hello {org.nom}, \nWe are Happy to inform you that your request has been accepted.',
            'moroccopalace2023@gmail.com',
            [org.email],
            fail_silently=False,
        )
    
            
        return JsonResponse({'status': 'success', 'message' : 'Accepted !!!'})
    else:
        return JsonResponse({'status': 'error', 'message' : 'Not authorized !!!'})

@csrf_exempt
def Refus(request):
    if request.method == 'PUT':
        dem_data = JSONParser().parse(request)
        dem = Demande.objects.get(id=dem_data.get('id'))
        dem.etat= Demande.Etat.REFUSE
        dem.save()
        org = Organisateur.objects.get(id=dem_data.get('org'))
        
        send_mail(
            'Result of your Request',
            f'Hello {org.nom}, \nWe regret to inform you that your request has been refused.',
            'moroccopalace2023@gmail.com',
            [org.email],
            fail_silently=False,
        )
    
        return JsonResponse({'status': 'success', 'message' : 'Resued !!!'})
    else:
        return JsonResponse({'status': 'error', 'message' : 'Not authorized !!!'})

@csrf_exempt
def Add(request):
    if request.method == 'POST':
        # Récupération des valeurs des champs
        dem_data = JSONParser().parse(request)

        # Retrieve the Organisateur instance
        org_id = dem_data.get('org')
        org = Organisateur.objects.get(id=org_id)

        man_id = dem_data.get('man')
        man = Manager.objects.get(id=man_id)

        loc_id = dem_data.get('loc')
        loc = Local.objects.get(id=loc_id)
        # Création de l'instance de la demande avec les valeurs récupérées
        dem = Demande(
            etat=Demande.Etat.ENCOURS,
            types=dem_data.get('types'),
            besoin=dem_data.get('besoin'),
            commite=dem_data.get('commite'),
            description=dem_data.get('description'),
            titre=dem_data.get('titre'),
            org=org,
            start_date=dem_data.get('start_date'),
            end_date=dem_data.get('end_date'),
            man=man,
            loc=loc
        )

        # Sauvegarde de l'instance de la demande dans la base de données
        dem.save()

        # Renvoi d'une réponse JSON indiquant le succès de l'ajout de la demande
        return JsonResponse({'status': 'success', 'message': 'Demande ajoutée avec succès !'})

    else:
        # Renvoi d'une réponse JSON indiquant une erreur d'autorisation pour les méthodes autres que POST
        return JsonResponse({'status': 'error', 'message': 'Not authorized !!!'})

@csrf_exempt
def Delete(request, id_dem):
    if request.method == 'DELETE':
        dem =get_object_or_404(Demande,id=id_dem)
        dem.delete()
        return JsonResponse({'status': 'success', 'message': 'Demande deleted!'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Not authorized!'})