FROM postgres

RUN rm -rf /docker-entrypoint-initdb.d/*

COPY ./init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
