import logging
import random
import requests
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.cache import cache
from rest_framework_simplejwt.tokens import RefreshToken

# Setup logging
logger = logging.getLogger(__name__)

User = get_user_model()

# Custom SMS API credentials and endpoint
API_KEY = "YXSPrWhAts"  # Replace with your API key from the SMS provider

# Function to send OTP using custom SMS API
def send_otp_via_sms(phone, otp):
    API_URL = f"https://dvhosting.in/api-sms-v3.php?api_key={API_KEY}&number={phone}&otp={otp}&senderid=SBGINF&message=Your OTP code is {otp}"
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "phone_number": phone,  
        "message": f"Your OTP code is {otp}", 
    }

    try:
        response = requests.post(API_URL, json=payload, headers=headers)
        logger.info(f"Response from SMS API: {response.text}")
        
        if response.status_code == 200:
            return response.json() 
        else:
            logger.error(f"Error sending OTP: {response.text}")
            raise Exception(f"Error sending OTP: {response.text}")
    except requests.RequestException as e:
        logger.error(f"Error sending OTP: {str(e)}")
        raise Exception(f"Error sending OTP: {str(e)}")

@api_view(['POST'])
def send_otp(request):
    phone = request.data.get('phone')
    if not phone:
        return Response({'error': 'Phone number required'}, status=status.HTTP_400_BAD_REQUEST)
    
    otp = str(random.randint(1000, 9999))
    
    # Cache OTP for 5 minutes
    cache.set(f'otp_{phone}', otp, timeout=300)  # OTP valid for 5 mins
    
    try:
        send_otp_via_sms(phone, otp)
        return Response({'message': 'OTP sent successfully'})
    except Exception as e:
        logger.error(f"Error in sending OTP: {str(e)}")
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def verify_otp(request):
    phone = request.data.get('phone')
    otp_input = request.data.get('otp')

    if not phone or not otp_input:
        return Response({'error': 'Phone and OTP required'}, status=status.HTTP_400_BAD_REQUEST)
    
    otp_real = cache.get(f'otp_{phone}')
    
    if not otp_real:
        return Response({'error': 'OTP expired, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)

    if otp_real != otp_input:
        return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
    
    # If OTP is valid, create or retrieve user
    user, created = User.objects.get_or_create(phone=phone, defaults={'username': phone})
    
    # Generate JWT token for the user
    refresh = RefreshToken.for_user(user)
    
    # Redirect to the productPage after successful login
    return Response({
        'message': 'Login successful, redirecting to Product Page...',
        'token': str(refresh.access_token),
        'redirect_url': '/products/'  # This is the URL for your Product Page
    })