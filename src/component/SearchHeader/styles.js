import { StyleSheet } from 'react-native';
import Metrics from '../../../src/config/metrics';
import AppStyles from '../../../src/config/style';
import { isIphoneX } from '../../../src/lib/isIphoneX';

const styles = StyleSheet.create({
    container: {
        height: isIphoneX() ? 74 : 50,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.white,
        paddingBottom: isIphoneX() ? 24 : 0
    },
    customContainer: {
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.white,
        paddingBottom: 0
    },
    btn: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        overflow: 'hidden'
    },
    input: {
        width: Metrics.screenWidth - 70,
        height: 36,
        borderRadius: 24,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: AppStyles.colors.white,
        marginVertical: 8
    }
});
export default styles;
