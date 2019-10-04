import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
    window: {
        width,
        height,
    },
    largeFontSize: 20,
    mainFontSize: 16,
    smallFontSize: 14,
    littleFontSize: 11,
};
