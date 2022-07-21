from django.db import models
from django.contrib.auth.models import User
from django.core.files import File
from urllib import request
import os

# Create your models here.
class CategoryModel(models.Model):
    category = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.category

class BlogModel(models.Model):
    title = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    slug = models.SlugField(unique=True)
    frontImageFile = models.FileField(upload_to="frontImages")
    frontImageURL = models.URLField()
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_remote_image(self):
        if self.image_url and not self.image_file:
            result = request.urlretrieve(self.image_url)
            self.image_file.save(
                os.path.basename(self.image_url),
                File(open(result[0], 'rb'))
                )
            self.save()