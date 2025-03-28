# 📌 Todo API Guide

Hey Apoorva! 👋 This guide will help you use the Todo API with **Postman** and **fetch**. You’ll be able to **create, read, update, and delete** todos easily. Let’s get started! 🚀  

---

## 🔹 1. Setting Up Postman  

Since you’ll be testing the API, **Postman** is a great tool to make requests. If you don’t have it yet, follow these steps:  

1. Download Postman from:  
   ```  
   https://www.postman.com/downloads/  
   ```  
2. Install it and open the app.  
3. You can create an account (optional) or use it without signing in.  

### ✅ **How to Use Postman**  
1. Click **New Request** at the top.  
2. Select the method (`POST`, `GET`, `PUT`, `DELETE`).  
3. Enter the API **URL** (don’t worry, I’ll provide them below 👇).  
4. If needed, go to **Body** → Select **raw** → Choose **JSON**.  
5. Paste the request body (for `POST` and `PUT`).  
6. Hit **Send** and see the response. 🎉  

---

## 🌍 **Base URL**  
This is the root URL for all API requests:  

```  
https://todo-backend-3s9o.onrender.com/api  
```  

---

## 1️⃣ **Creating a Todo (POST)**  

Want to add a new task? Here’s how!  

### 📌 **Endpoint:**  
```  
POST /todos  
```  

### 📤 **What You Need to Send:**  
```json  
{
  "title": "Buy groceries",
  "completed": false
}  
```  

### ✅ **How to Do It in Postman:**  
- **Method:** `POST`  
- **URL:**  
  ```  
  https://todo-backend-3s9o.onrender.com/api/todos  
  ```  
- **Headers:**  
  ```  
  Content-Type: application/json  
  ```  
- **Body (Raw JSON):**  
  ```json  
  {
    "title": "Buy groceries",
    "completed": false
  }  
  ```  

### 📥 **What You’ll Get Back:**  
```json  
{
  "_id": "65a0d1e45f3a22b6bc2a1234",
  "title": "Buy groceries",
  "completed": false,
  "__v": 0
}  
```  

### 🌐 **Fetch Example (JavaScript)**  
If you want to make this request in code, here’s how:  

```js  
fetch("https://todo-backend-3s9o.onrender.com/api/todos", {  
  method: "POST",  
  headers: {  
    "Content-Type": "application/json"  
  },  
  body: JSON.stringify({  
    title: "Buy groceries",  
    completed: false  
  })  
})  
.then(response => response.json())  
.then(data => console.log(data))  
.catch(error => console.error("Error:", error));  
```  

---

## 2️⃣ **Getting All Todos (GET)**  

Want to see all your tasks? Use this!  

### 📌 **Endpoint:**  
```  
GET /todos  
```  

### ✅ **How to Do It in Postman:**  
- **Method:** `GET`  
- **URL:**  
  ```  
  https://todo-backend-3s9o.onrender.com/api/todos  
  ```  

### 📥 **Response Example:**  
```json  
[
  {
    "_id": "65a0d1e45f3a22b6bc2a1234",
    "title": "Buy groceries",
    "completed": false,
    "__v": 0
  },
  {
    "_id": "65a0d1f55f3a22b6bc2a5678",
    "title": "Complete homework",
    "completed": true,
    "__v": 0
  }
]  
```  

### 🌐 **Fetch Example (JavaScript)**  
```js  
fetch("https://todo-backend-3s9o.onrender.com/api/todos")  
  .then(response => response.json())  
  .then(data => console.log(data))  
  .catch(error => console.error("Error:", error));  
```  

---

## 3️⃣ **Updating a Todo (PUT)**  

Need to update a task? Here’s how!  

### 📌 **Endpoint:**  
```  
PUT /todos/:id  
```  

### 📤 **What You Need to Send:**  
```json  
{
  "title": "Buy groceries and cook dinner",
  "completed": true
}  
```  

### ✅ **How to Do It in Postman:**  
- **Method:** `PUT`  
- **URL (Replace `:id` with actual ID):**  
  ```  
  https://todo-backend-3s9o.onrender.com/api/todos/65a0d1e45f3a22b6bc2a1234  
  ```  
- **Body (Raw JSON):**  
  ```json  
  {
    "title": "Buy groceries and cook dinner",
    "completed": true
  }  
  ```  

### 📥 **Response Example:**  
```json  
{
  "_id": "65a0d1e45f3a22b6bc2a1234",
  "title": "Buy groceries and cook dinner",
  "completed": true,
  "__v": 0
}  
```  

### 🌐 **Fetch Example (JavaScript)**  
```js  
fetch("https://todo-backend-3s9o.onrender.com/api/todos/65a0d1e45f3a22b6bc2a1234", {  
  method: "PUT",  
  headers: {  
    "Content-Type": "application/json"  
  },  
  body: JSON.stringify({  
    title: "Buy groceries and cook dinner",  
    completed: true  
  })  
})  
.then(response => response.json())  
.then(data => console.log(data))  
.catch(error => console.error("Error:", error));  
```  

---

## 4️⃣ **Deleting a Todo (DELETE)**  

Want to remove a task? Here’s how!  

### 📌 **Endpoint:**  
```  
DELETE /todos/:id  
```  

### ✅ **How to Do It in Postman:**  
- **Method:** `DELETE`  
- **URL (Replace `:id` with actual ID):**  
  ```  
  https://todo-backend-3s9o.onrender.com/api/todos/65a0d1e45f3a22b6bc2a1234  
  ```  

### 📥 **Response Example:**  
```json  
{
  "message": "Todo deleted successfully"
}  
```  

### 🌐 **Fetch Example (JavaScript)**  
```js  
fetch("https://todo-backend-3s9o.onrender.com/api/todos/65a0d1e45f3a22b6bc2a1234", {  
  method: "DELETE"  
})  
.then(response => response.json())  
.then(data => console.log(data))  
.catch(error => console.error("Error:", error));  
```  

---

That’s it, Apoorva! 🎉 Now you know how to **create, read, update, and delete** todos using the API. Let me know if you need any help! 🚀  
