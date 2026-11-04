# Дневник Rameev (v5.0)

Мобильное приложение для студентов колледжа (`app.rameevcollege.ru`) с поддержкой онлайн/офлайн работы и фоновой синхронизацией:
- Расписание: `https://app.rameevcollege.ru/study/schedule`
- Оценки (Дневник): `https://app.rameevcollege.ru/study/diary`
- Долги: `https://app.rameevcollege.ru/study/spo/education-tabs/debts`

## Сборка в Visual Studio / Android Studio
1. Откройте папку проекта в Visual Studio или VS Code.
2. Выполните установку зависимостей:
   ```bash
   npm install
   ```
3. Инициализируйте и пропатчите Android-проект:
   ```bash
   npm run init-android
   ```
4. Откройте проект в Android Studio и соберите APK:
   ```bash
   npm run open-android
   ```
