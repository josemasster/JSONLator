# 🌍 JSON Translator - Next.js

&#x20;&#x20;

## 📌 Descripción

**JSON Translator** es una aplicación web desarrollada en **Next.js** que permite cargar, traducir y descargar archivos JSON fácilmente. Ideal para desarrolladores y equipos que necesitan traducir archivos JSON en diferentes idiomas.

## 🚀 Características

✅ Subir archivos JSON para su traducción.\
✅ Convertir archivos JSON en strings y viceversa.\
✅ Descargar los archivos JSON traducidos.\
✅ Interfaz moderna y fácil de usar.\
✅ Rápido procesamiento de archivos en el cliente.

## 🎥 Demo

🚀 [Prueba la app en vivo](https://JSONLator.vercel.app/)

### Light mode:

![image](https://github.com/user-attachments/assets/16bedccd-167f-4879-86ec-6b0cffde7659)

### Dark mode:

![image](https://github.com/user-attachments/assets/d2d26e90-3703-4a65-bc74-4947800f4b6b)

---

## ⚡ Instalación y uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/josemasster/JSONLator.git
cd JSONLator
```

### 2️⃣ Instalar dependencias

```bash
npm install  # o yarn install
```

### 3️⃣ Ejecutar el proyecto en modo desarrollo

```bash
npm run dev  # o yarn dev
```

Accede a [**http://localhost:3000**](http://localhost:3000) en tu navegador.

---

## 🔧 API Endpoints

| Método | Endpoint         | Descripción                                     |
| ------ | ---------------- | ----------------------------------------------- |
| `POST` | `/api/translate` | Recibe un JSON y devuelve su versión traducida. |

Ejemplo de petición:

```json
{
  "text": "{ \"mensaje\": \"Hola mundo\" }",
  "targetLang": "en"
}
```

Respuesta esperada:

```json
{
  "ok": true,
  "status": 200,
  "statusText": "OK",
  "body": "{ \"mensaje\": \"Hello world\" }"
}
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 🚀

1. Haz un **fork** del repositorio.
2. Crea una nueva rama: `git switch -c feature-nueva`
3. Realiza tus cambios y haz un commit: `git commit -m "Agrega nueva funcionalidad"`
4. Sube los cambios a tu fork: `git push origin feature-nueva`
5. Abre un **Pull Request** 🚀

---

¡Gracias por usar **JSON Translator**! 💙
