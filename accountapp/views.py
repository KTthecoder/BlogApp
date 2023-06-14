from .serializers import AccountSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['POST'])
def RegisterPage(request):
    if request.method == "POST":
        account = AccountSerializer(data = request.data)
        if account.is_valid():
            data = {}
            username = account.data["username"]
            password = account.data["password"]
            email = account.data["email"]

            user = User.objects.create_user(username, email, password)
            user.save()
            data['response'] = "User created Succesfully"
            return Response(data)
        else:
            data = {}
            data['response'] = "Username or email is already taken!"
            return Response(data)
    
            
   
    
