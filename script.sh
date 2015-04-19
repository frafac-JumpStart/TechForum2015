#!/bin/bash

echo "-- Creation de l'application TechForum 2015 pour la mise production --"

if test -d www; then
	echo ""
else
	mkdir www
fi

echo "Creation des repertoires"
mkdir www/
mkdir www/css
mkdir www/data
mkdir www/img
mkdir www/js
mkdir www/lib
mkdir www/views

echo "Copie des fichiers html"
cp dev/app/*.html www/
cp -r dev/app/views/* www/views

echo "Copie des data"
cp -r dev/app/data/* www/data
echo "Copie des images"
cp -r dev/app/img/* www/img

echo "Copie des  autres fichier "
cp -r dev/app/css/* www/css
cp -r dev/app/js/* www/js
cp -r dev/app/lib/* www/lib


echo "-- L'application TechForum 2015 contenu dans le dossier \"www\" peut être mise en production --"