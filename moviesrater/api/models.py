from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class Movie( models.Model):
        title = models.CharField(max_length=32)
        description = models.CharField(max_length=32)

class Rating(models.Model):
        movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')
        user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ratings')

        stars = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])
        
        class Meta:
            unique_together = (('user', 'movie'),)
            index_together = (('user', 'movie'),)
