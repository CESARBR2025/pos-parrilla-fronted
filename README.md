# POS Parrilla 🍖🔥

Sistema **POS web para restaurantes pequeños (parrilla)**, enfocado en **rapidez, simplicidad y operación en tiempo real**.
Este proyecto está pensado como un **MVP funcional**, sin sobreingeniería, ideal para negocios pequeños.

---

## 🎯 Objetivo del proyecto

Construir un sistema POS moderno que permita:

- Gestionar mesas y su estado
- Crear y administrar órdenes en tiempo real
- Visualizar órdenes en cocina (KDS)
- Generar cuentas y registrar pagos

Todo con una **arquitectura clara**, **flujo en tiempo real** y **UX operativa**.

---

## 🧱 Arquitectura general

```
Frontend (React + TS)
        ↓ REST / WebSockets
Backend (FastAPI)
        ↓
PostgreSQL
```

---

## 🛠️ Stack tecnológico

### Backend

- **FastAPI** – API REST + WebSockets
- **PostgreSQL** – Base de datos principal
- **SQLAlchemy / async** (según módulo)
- **Pydantic** – Validación de datos

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **Fetch API** (sin sobrecarga innecesaria)

---

## 📦 Módulos del sistema (MVP)

### 🪑 Gestión de Mesas

- Alta de mesas
- Estados: `libre`, `ocupada`
- Asociación con órdenes activas

### 🧾 Órdenes

- Crear órdenes por mesa o para llevar
- Agregar productos y notas
- Estados de orden (pendiente, en preparación, lista)

### 🍳 KDS (Kitchen Display System)

- Visualización en tiempo real de órdenes
- Sin edición, solo lectura

### 💵 Cuenta y Cobro

- Cálculo automático del total
- Registro de pagos (efectivo / tarjeta)
- Cierre de cuenta

---

## 🌿 Flujo de ramas (Git)

Se usa un flujo **simple y controlado**:

- `main` → rama estable / producción
- `qa` → integración y pruebas

### Flujo recomendado

1. Desarrollar en `qa`
2. Probar funcionalidad
3. Merge `qa` → `main`
4. Merge `main` → `qa`

---

## 🚀 Instalación y ejecución

### Backend

```bash
cd pos-backend
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd pos-frontend
npm install
npm run dev
```

Variables de entorno (`.env`):

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

## 🧠 Principios del proyecto

- MVP primero
- Código claro > código complejo
- Tiempo real solo donde aporta valor
- UX pensada para operación real
- Git limpio y entendible

---

## 📌 Estado del proyecto

🚧 **En desarrollo activo**
Actualmente implementando:

- Conexión frontend ↔ backend
- Gestión de grupos y mesas
- Flujo base de órdenes

---

## ✍️ Autor

**Cesar**
Ingeniero en Sistemas Computacionales

---

> Proyecto construido con enfoque práctico y mentalidad de producto re
