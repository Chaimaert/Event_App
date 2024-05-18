import json
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from User.models import User

@csrf_exempt
def Sign_up(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            nom = None
            prenom = None
            phone = None
            email = None
            password = None

            for key, value in data.items():
                if isinstance(value, str):
                    if nom is None:
                        nom = value
                    elif prenom is None:
                        prenom = value
                    elif phone is None:
                        phone = value
                    elif email is None:
                        email = value
                    elif password is None:
                        password = value
                else:
                    return JsonResponse({'status': 'error', 'message': 'Invalid data format'})

            if nom is None or prenom is None or phone is None or  email is None or password is None:
                return JsonResponse({'status': 'error', 'message': 'Missing required data'})

            user = User.objects.create_user(nom=nom,prenom=prenom,phone=phone,login=login, email=email, password=password)

            return JsonResponse({'status': 'success', 'message': 'Registration successful'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


@csrf_exempt
def Get_users(request):
    users = User.objects.all()
    data = []
    for user in users :
        
        user_data = {
            'id' : user.id,
            'nom': user.nom,
            'prenom': user.prenom, 
            'email' : user.email,
            'phone' : user.phone,
            
        }
        data.append(user_data)
    return JsonResponse(data,safe=False)