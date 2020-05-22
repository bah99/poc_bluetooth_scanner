import { PermissionsAndroid } from 'react-native';

export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION]
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permission for bluetooth scanning granted');
            return true;
        } else {
            console.log('Location permission for bluetooth scanning revoked');
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}

// export async function requestBackgroundLocationPermission() {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION, {
//             title: 'Background location permission for bluetooth scanning',
//             message: 'background location',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//         },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('Background Location permission for bluetooth scanning granted');
//             return true;
//         } else {
//             console.log('Background Location permission for bluetooth scanning revoked');
//             return false;
//         }
//     } catch (err) {
//         console.warn(err);
//         return false;
//     }
// }