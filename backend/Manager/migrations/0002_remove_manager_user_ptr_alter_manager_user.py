# Generated by Django 5.0.4 on 2024-05-19 21:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manager', '0001_initial'),
        ('User', '0002_remove_user_date_naissance_remove_user_login'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manager',
            name='user_ptr',
        ),
        migrations.AlterField(
            model_name='manager',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, related_name='manager_profile', serialize=False, to='User.user'),
        ),
    ]
