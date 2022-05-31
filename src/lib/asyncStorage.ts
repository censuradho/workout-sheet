import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_KEY = '@WORKOUT'

type Value = Record<string, any>

export function setItem (key: string, value: Value, callback?: () => void) {
  const parsedValue = JSON.stringify(value)

  return AsyncStorage.setItem(`${BASE_KEY}${key}`, parsedValue, callback)
}

export async function getItem <T = Value>(key: string, callback?: () => void) {
  const storage = await AsyncStorage.getItem(`${BASE_KEY}${key}`, callback)
  return storage ? (JSON.parse(storage) as T) : null
}