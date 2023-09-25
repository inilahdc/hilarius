### Aplikasi menggunakan dapat dijalankan menggunakan docker

gunakan perintah `docker-compose up -d` untuk melakukan proses build dan menjalankan system ini,

database menggunakan `posgresql` dan dapat diakases melalui `localhost:5432`

headless menggunakan `strapi` dan dapat diakases melalui `http://localhost:1337/admin`

frontend menggunakan `nextjs` dan dapat diakses melalui `localhost:3000`

dikarenakan ada kendala dalam hal setup docker untuk `strapi`, sehingga untuk opsi menjalankan strapi tanpa docker dapat dilakukan dengan cara
masuk ke folder `backend` kemudian dapat menjalan kan aplikasi strapi menggunakan perintah `yarn develop`

aplikasi frontend juga ada opsi untuk menjalankan tanpa menggunakan docker, yaitu dengan cara masuk ke folder `frontend`, kemudian dapat dijalakan aplikasi nextjs menggunakan perintah `yarn dev`

sebelum menjalan aplikasi `backend` maupun `frontend` secara mandiri, perlu dilakukan instalasi package dengan menggunakan perintah `yarn install` pada masing2 dorektori 