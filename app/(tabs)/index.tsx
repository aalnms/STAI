import { StyleSheet, Image, I18nManager, useColorScheme, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();

  // فرض اتجاه اللغة العربية
  useEffect(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* شعار التطبيق */}
      <Image
        source={require('@/assets/images/STAI-LOGO-removebg-preview.png')}
        style={styles.logo}
        resizeMode="contain"
        accessible accessibilityLabel="شعار تطبيق STAI"
      />
      {/* عنوان ترحيبي */}
      <Text style={styles.title}>مرحباً بك في STAI</Text>
      <Text style={styles.subtitle}>
        منصتك الذكية لإدارة مشاريعك ومساعدتك في السوق الخليجي
      </Text>
      {/* زر تسجيل الدخول */}
      <TouchableOpacity style={styles.button} accessibilityRole="button" accessibilityLabel="تسجيل الدخول أو إنشاء حساب">
        <Text style={styles.buttonText}>تسجيل الدخول / إنشاء حساب</Text>
      </TouchableOpacity>
      {/* تأثير انتقالي بسيط */}
      <View style={[styles.separator, colorScheme === 'dark' ? styles.separatorDark : styles.separatorLight]} />
      {/* معلومات حقوق النشر */}
      <Text style={styles.footer}>© 2024 STAI جميع الحقوق محفوظة</Text>
    </View>
  );
}

const primaryColor = '#0A7AFF';
const secondaryColor = '#F5F7FA';
const darkBg = '#181A20';
const darkText = '#F5F7FA';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: primaryColor,
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 28,
  },
  button: {
    backgroundColor: primaryColor,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    shadowColor: primaryColor,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 24,
    minWidth: 220,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
  },
  separator: {
    height: 2,
    width: '60%',
    borderRadius: 1,
    marginVertical: 18,
    alignSelf: 'center',
    transitionProperty: 'backgroundColor',
    transitionDuration: '0.3s',
  },
  separatorLight: {
    backgroundColor: '#e0e0e0',
  },
  separatorDark: {
    backgroundColor: '#333',
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 16,
    textAlign: 'center',
  },
});
