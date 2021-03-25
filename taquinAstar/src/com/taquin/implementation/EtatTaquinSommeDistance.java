package com.taquin.implementation;

import com.taquin.Astar.Etat;
import javafx.util.Pair;

import java.util.ArrayList;
import java.util.List;

public class EtatTaquinSommeDistance extends EtatTaquin {
    public EtatTaquinSommeDistance(int[][] matrice) {
        super(matrice);
    }

    @Override
    public List<Pair<Etat, Integer>> getSuccessors() {
        int dimension = matrice.length;
        //get 0 position
        int x=-1,y = -1;
        for(int i=0;i<dimension;i++){
            for(int j =0; j<dimension; j++){
                if(matrice[i][j] == 0){
                    x = i; y = j;
                    break;
                }
            }
            if(x != -1) break;
        }

        //generate Successors
        List<Pair<Etat,Integer>> successors = new ArrayList<>();

        if(x != dimension - 1){
            // go down
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x+1][y];
            matriceNew[x+1][y] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquinSommeDistance(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(x != 0){
            // go up
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x - 1][y];
            matriceNew[x - 1][y] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquinSommeDistance(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(y != dimension - 1){
            // go right
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x][y+1];
            matriceNew[x][y+1] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquinSommeDistance(matriceNew);
            successors.add(new Pair<>(e,1));
        }
        if(y != 0){
            // go left
            int[][] matriceNew = MatrixCloner.cloneMatrix(matrice);
            int temp = matriceNew[x][y - 1];
            matriceNew[x][y - 1] = 0;
            matriceNew[x][y]= temp;

            Etat e = new EtatTaquinSommeDistance(matriceNew);
            successors.add(new Pair<>(e,1));
        }

        return successors;

    }

    @Override
    public int getHeuristique(Etat etatTaquinBut) {
        EtatTaquin etatFinal = (EtatTaquinSommeDistance) etatTaquinBut;
        int dimension = this.matrice.length;
        int count = 0;

        for(int k = 0; k < dimension * dimension - 1; k++){
            int x1 = 0,y1 = 0,x2 = 0,y2 = 0;
            for(int i=0;i<dimension;i++){
                for(int j = 0 ; j < dimension ; j++){
                    if(matrice[i][j] == k) {x1=i;y1=j;}
                    if(etatFinal.getMatrice()[i][j] == k) {x2=i;y2=j;}
                }
            }
            count+= Math.abs(x1 - x2) + Math.abs(y1-y2);
        }


        return count;
    }

}
