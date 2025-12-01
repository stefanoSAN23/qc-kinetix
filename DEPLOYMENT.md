# 🚀 Guía de Deployment en Digital Ocean

Esta guía te ayudará a desplegar el proyecto QC Kinetix en un servidor de Digital Ocean.

## 📋 Requisitos Previos

- Una cuenta de Digital Ocean
- Un dominio configurado (opcional pero recomendado)
- Acceso SSH al servidor

## 🔧 Paso 1: Crear Droplet en Digital Ocean

1. Ve a Digital Ocean Dashboard
2. Crea un nuevo Droplet:
   - **OS**: Ubuntu 22.04 LTS
   - **Plan**: Basic ($6/mes mínimo recomendado)
   - **Region**: Elige la más cercana a tus usuarios
   - **Authentication**: SSH keys (recomendado) o Password

## 📦 Paso 2: Configurar el Servidor

### 2.1 Conectar al servidor

```bash
ssh root@tu-ip-del-servidor
```

### 2.2 Actualizar el sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.3 Instalar Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verificar instalación:
```bash
node --version
npm --version
```

### 2.4 Instalar Nginx

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 📁 Paso 3: Subir el Proyecto

### Opción A: Usando Git (Recomendado)

```bash
# Crear directorio para el proyecto
sudo mkdir -p /var/www/kinetix-clone
sudo chown -R $USER:$USER /var/www/kinetix-clone

# Clonar repositorio
cd /var/www/kinetix-clone
git clone tu-repositorio-url .

# Instalar dependencias
npm install

# Hacer build de producción
npm run build
```

### Opción B: Usando SCP/SFTP

```bash
# Desde tu máquina local
scp -r kinetix-clone/* root@tu-ip:/var/www/kinetix-clone/
```

Luego en el servidor:
```bash
cd /var/www/kinetix-clone
npm install
npm run build
```

## ⚙️ Paso 4: Configurar Nginx

### 4.1 Copiar configuración

```bash
sudo cp nginx.conf /etc/nginx/sites-available/kinetix-clone
```

### 4.2 Editar configuración

```bash
sudo nano /etc/nginx/sites-available/kinetix-clone
```

**IMPORTANTE**: Cambia `tu-dominio.com` por tu dominio real o la IP del servidor.

### 4.3 Habilitar sitio

```bash
sudo ln -s /etc/nginx/sites-available/kinetix-clone /etc/nginx/sites-enabled/
```

### 4.4 Verificar y recargar

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 Paso 5: Configurar SSL (Opcional pero Recomendado)

### 5.1 Instalar Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 5.2 Obtener certificado SSL

```bash
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

Sigue las instrucciones en pantalla. Certbot actualizará automáticamente tu configuración de Nginx.

### 5.3 Renovación automática

Certbot configura la renovación automática, pero puedes verificar:

```bash
sudo certbot renew --dry-run
```

## 🔄 Paso 6: Actualizaciones Futuras

Cuando necesites actualizar el sitio:

```bash
cd /var/www/kinetix-clone

# Si usas Git:
git pull origin main

# Reinstalar dependencias (si hay cambios)
npm install

# Rebuild
npm run build

# Recargar Nginx (no es necesario reiniciar)
sudo systemctl reload nginx
```

## 🛠️ Comandos Útiles

### Ver logs de Nginx
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Reiniciar Nginx
```bash
sudo systemctl restart nginx
```

### Verificar estado de Nginx
```bash
sudo systemctl status nginx
```

### Verificar puertos abiertos
```bash
sudo ufw status
```

## 🔥 Configurar Firewall (Recomendado)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 📊 Monitoreo (Opcional)

### Instalar PM2 para monitoreo (si necesitas Node.js en producción)

```bash
sudo npm install -g pm2
```

## ✅ Verificación Final

1. Visita `http://tu-ip` o `https://tu-dominio.com`
2. Verifica que todas las rutas funcionan
3. Verifica que las imágenes se cargan
4. Verifica responsive en móvil
5. Revisa la consola del navegador por errores

## 🐛 Troubleshooting

### Error 502 Bad Gateway
- Verifica que Nginx está corriendo: `sudo systemctl status nginx`
- Verifica permisos: `sudo chown -R www-data:www-data /var/www/kinetix-clone/dist`

### Las rutas no funcionan (404)
- Verifica que `try_files` está en la configuración de Nginx
- Verifica que el archivo `index.html` existe en `/var/www/kinetix-clone/dist`

### Imágenes no cargan
- Verifica que las URLs de las imágenes son accesibles
- Verifica CORS si las imágenes están en otro dominio

### Build falla
- Verifica Node.js version: `node --version` (debe ser 18+)
- Limpia cache: `rm -rf node_modules package-lock.json && npm install`

## 📝 Notas Importantes

- **Backups**: Configura backups regulares del servidor
- **Updates**: Mantén el sistema actualizado: `sudo apt update && sudo apt upgrade`
- **Seguridad**: Cambia las contraseñas por defecto y usa SSH keys
- **Dominio**: Si usas dominio, configura los DNS records en tu proveedor

## 🆘 Soporte

Si encuentras problemas:
1. Revisa los logs de Nginx
2. Verifica la configuración de Nginx con `sudo nginx -t`
3. Verifica que el build se completó correctamente
4. Verifica permisos de archivos y directorios

