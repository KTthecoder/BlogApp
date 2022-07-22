from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class CategoryModel(models.Model):
    category = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.category

class BlogModel(models.Model):
    title = models.CharField(max_length=250)
    created = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    slug = models.SlugField(unique=True)
    frontImageFile = models.ImageField(blank=True, null=True, upload_to="frontImages")
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class MessageModel(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.TextField()

class CommentModel(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.TextField()
    BlogSlug = models.ForeignKey(BlogModel, on_delete=models.CASCADE) 