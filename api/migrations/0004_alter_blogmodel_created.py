# Generated by Django 3.2.8 on 2022-07-22 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_messagemodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogmodel',
            name='created',
            field=models.DateField(auto_now_add=True),
        ),
    ]