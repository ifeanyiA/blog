# Generated by Django 4.1.2 on 2023-06-13 03:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0009_accountuser_color'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accountuser',
            name='color',
        ),
    ]