# Generated by Django 3.2.8 on 2022-07-22 22:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20220722_2324'),
    ]

    operations = [
        migrations.AddField(
            model_name='commentmodel',
            name='created',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
