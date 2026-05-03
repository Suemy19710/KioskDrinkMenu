# Step 1: Use a tiny web server image (Nginx)
FROM nginx:alpine

# Step 2: Copy your menu files into the web server's folder
# This assumes your index.html is in the root of your folder
COPY . /usr/share/nginx/html

# Step 3: Tell Docker to listen on port 80
EXPOSE 80