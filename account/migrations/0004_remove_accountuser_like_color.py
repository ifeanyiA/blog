# Generated by Django 4.1.2 on 2023-06-09 08:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_accountuser_like_color'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accountuser',
            name='like_color',
        ),
    ]
