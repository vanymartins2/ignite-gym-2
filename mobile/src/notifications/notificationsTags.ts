import OneSignal from 'react-native-onesignal'

export function tagUserInfoCreate(name: string, email: string) {
  OneSignal.sendTags({
    user_name: name,
    user_email: email
  })
}
