from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'phone', 'is_staff', 'is_active']
    
    # Yeh add kiya
    def get_model_perms(self, request):
        # Show default permissions so it appears in admin
        return super().get_model_perms(request)

# Yeh add kiya
CustomUser._meta.verbose_name = 'Custom User'
CustomUser._meta.verbose_name_plural = 'Custom Users'

admin.site.register(CustomUser, CustomUserAdmin)
