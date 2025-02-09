import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Интерфейс для настроек приложения
export interface ISettings {
  showNavigation: boolean;
  // Добавьте другие настройки по необходимости
}

// Интерфейс контекста
export interface ISettingsContext {
  settings: ISettings;
  updateSetting: (key: keyof ISettings, value: any) => Promise<void>;
}

// Создаём контекст, инициализируя его как undefined
export const SettingsContext = createContext<ISettingsContext | undefined>(undefined);

// Интерфейс для пропсов провайдера
interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps): JSX.Element => {
  const [settings, setSettings] = useState<ISettings>({
    showNavigation: false,
    // Укажите другие значения по умолчанию
  });

  // Загрузка сохранённых настроек при монтировании
  useEffect(() => {
    (async () => {
      try {
        const storedSettings = await AsyncStorage.getItem('app_settings');
        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }
      } catch (error) {
        console.error('Ошибка загрузки настроек', error);
      }
    })();
  }, []);

  // Функция обновления настроек
  const updateSetting = async (key: keyof ISettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    try {
      await AsyncStorage.setItem('app_settings', JSON.stringify(newSettings));
    } catch (error) {
      console.error('Ошибка сохранения настроек', error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};
