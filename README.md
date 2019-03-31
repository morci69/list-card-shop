#  Seguir los siguientes pasos para arrancar la lista de productos, sin tener apache2.

Descargarse el proyecto y guardarlo en cualquier carpeta

Abrir el archivo index.html en el browser:

    Click derecho al archivo index.html y abrir con Chrome o Firefox ie11...




#  Seguir los siguientes pasos para arrancar la lista de productos, con apache2 en ubuntu "servidor en Local".

Para seguir estos pasos tiene que tener previamente instalado y configurado apache2 y como sistema operativo ubuntu.

Abrir terminal:

    cd /var/www/html
    Copiar el proyecto listCard dentro de la carpeta HTML.
    
    cd 
    cd /etc/apache2/site-available
    sudo touch {Nombre del proyecto}.conf
    sudo nano {Nombre del proyecto}.conf
    Copiar dentro lo siguiente:

        <VirtualHost *:80>
            ServerName list-card.io
            ServerAlias list-card.io
            DocumentRoot /var/www/html/listcard
            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>

    Guardamos el archivo con los nuevos cambios.

    cd ..
    cd /site-enabled
    sudo ln -s ../site-available/{Nombre del proyecto}.conf {Nombre del proyecto}.conf

    cd
    cd /etc/ && sudo nano hosts

    Añadir al final el siguiente codigo:

        127.0.0.1 list-card.io
    Guardar y salir.

    Sudo service apache2 restart.

    Si todo a salido bien, añadir en chrome o cualquier otro browser list-card-io.





