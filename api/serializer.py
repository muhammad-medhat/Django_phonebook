from rest_framework import serializers
from tasks.models import Task
from contacts.models import Contact

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('__all__')
        read_only_fields = ('id',)

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('__all__')
        read_only_fields = ('id',)