import React from 'react';
import LottieView from 'lottie-react-native';

export default function ActivityIndicator({ visibility= false }) {
    if(!visibility) return null;
    return <LottieView source={require('../assets/animations/loader.json')} autoplay loop />
};