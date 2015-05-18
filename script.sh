#!/bin/bash

echo "-- Creation de l'application TechForum 2015 pour la mise production --"

if test -d www; then
	echo ""
else
	mkdir www
fi

echo "Creation des repertoires"
mkdir www/
mkdir www/app
mkdir www/app/css
mkdir www/app/data
mkdir www/app/img
mkdir www/app/js
mkdir www/app/libs
mkdir www/app/views

echo "Copie des fichiers html"
cp dev/app/*.html www/app
cp -r dev/app/views/* www/app/views

echo "Copie des data"
cp -r dev/app/data/* www/app/data
echo "Copie des images"
cp -r dev/app/img/* www/app/img

echo "Copie des  autres fichier "
cp -r dev/app/css/* www/app/css
cp -r dev/app/js/* www/app/js
cp -r dev/app/libs/* www/app/libs

echo "-- L'application TechForum 2015 contenu dans le dossier \"www\" peut être mise en production --"