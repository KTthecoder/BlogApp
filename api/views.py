from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def AllBlogs(request):
    if request.method == "GET":
        blogs = BlogModel.objects.filter().order_by("-created")
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def AllCategories(request):
    if request.method == "GET":
        categories = CategoryModel.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def BlogByCategory(request, slug):
    if request.method == "GET":
        data = {}
        try: 
            category = CategoryModel.objects.get(slug = slug)
        except CategoryModel.DoesNotExist:
            data['response'] = "Category does not exists"
            return Response(data)   

        blogs = BlogModel.objects.filter(category = category.id).order_by("-created")

        if not blogs.exists():
            data['response'] = "There are not blogs in this category"
            return Response(data) 
        else:
            serializer = BlogSerializer(blogs, many=True)
            return Response(serializer.data)
            
        

@api_view(['POST'])
def SendMessage(request):
    if request.method == "POST":
        data = {}
        message = MessageSerializer(data = request.data)
        if message.is_valid():
            message.save()
            data['response'] = "Message sent successfully"
            return Response(data)
        else:
            data['response'] = "Error while sending message (write new message)"
            return Response(data)

@api_view(['GET'])
def ArticleDetails(request, slug):
    if request.method == "GET":
        blog = BlogModel.objects.filter(slug = slug)
        data = {}
        serializer = BlogSerializer(blog, many = True)
        if blog.exists():
            return Response(serializer.data)
        else: 
            data['response'] = "This article does not exists"
            return Response(data)