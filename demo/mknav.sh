#!/bin/bash
PP="-"
P="-"
C="-"

function show {
 echo "  '$2': { prev: '$1', next: '$3' }, " 
}

(echo var navs = {
for F in `ls -1 *.html` 
do
  PP=$P
  P=$C
  C=$F
  if [ $P != '-' ]; then show $PP $P $C ; fi
done  
show $P $C - 
echo } ) > navs.js

