will need microsoft c++ build tools download from here "https://visualstudio.microsoft.com/visual-cpp-build-tools/"
> ⚡ Navigate to project subfolder - `cd Nasa-Biology-Engine--main`
> ⚡ Navigate to subfolder Bioverse - `cd Bioverse`
> ⚡ Run `pip install -r backend/requirements.txt` before starting.

---

## 🧰 Run Server

```bash(for local system)
cd backend
uvicorn app.main:app --reload
```
```for network accessed server
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Visit **[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)** for Swagger UI 🚀 on local system

visit **[http://YOUR_IP:8000/docs] (replace YOUR_IP with your server's IP address)** for Swagger UI 🚀 on any system

Try:

* `/search?q=plant`
* `/recommend?q=gravity`
* `/describe?q=bone`

---
# 🚀 BioVerse: NASA Space Biology Knowledge Engine  

BioVerse is a web application built for the **NASA Space Apps Challenge 2025**.  
It summarizes and makes accessible NASA’s bioscience research, enabling scientists, mission planners, and curious explorers to search, learn, and discover insights from decades of space biology experiments.  

---

## ⚠️ Windows Prerequisite  
On **Windows**, you may need Microsoft C++ Build Tools to install some Python dependencies.  
Download here 👉 [Microsoft Visual C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)  

---

## 🛠 Local Setup Instructions  

### 1. Clone Repository  
```bash
git clone https://github.com/YOUR_USERNAME/Nasa-Biology-Engine-.git
cd Nasa-Biology-Engine--main/Bioverse
