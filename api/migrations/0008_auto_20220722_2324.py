# Generated by Django 3.2.8 on 2022-07-22 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_commentmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commentmodel',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='messagemodel',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
