from django.shortcuts import render
from .models import BlogModel, CategoryModel
from .serializers import BlogSerializer, CategorySerializer
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
        category = CategoryModel.objects.get(slug = slug)
        blogs = BlogModel.objects.filter(category = category.id).order_by("-created")
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)