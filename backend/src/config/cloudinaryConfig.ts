import cloudinarySDK from 'cloudinary';
import cloudinary = cloudinarySDK.v2;
import { cloudinaryConfig } from '../config';

cloudinary.config({
    cloud_name: cloudinaryConfig.cloudName,
    api_key: cloudinaryConfig.apiKey,
    api_secret: cloudinaryConfig.apiSecret,
});

export default cloudinary
